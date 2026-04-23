const bcrypt = require("bcryptjs");
const User = require("../model/user");

function publicUser(user) {
  const data = user.toObject ? user.toObject() : { ...user };
  delete data.password;
  return data;
}

function userPayload(body) {
  return {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email?.toLowerCase(),
    phone: body.phone
  };
}

exports.create = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ ...userPayload(req.body), password: hashedPassword });

    return res.status(201).json({
      message: "User created successfully",
      user: publicUser(user)
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.register = exports.create;

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    const validPassword = user && await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.json({
      message: "Login successful",
      user: publicUser(user)
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: "Invalid user id" });
  }
};

exports.update = async (req, res) => {
  try {
    const payload = userPayload(req.body);

    if (req.body.password) {
      payload.password = await bcrypt.hash(req.body.password, 10);
    }

    const user = await User.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ message: "User updated successfully", user });
  } catch (error) {
    const status = error.code === 11000 ? 409 : 400;
    return res.status(status).json({ message: error.code === 11000 ? "Email already exists" : error.message });
  }
};

exports.destroy = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid user id" });
  }
};
