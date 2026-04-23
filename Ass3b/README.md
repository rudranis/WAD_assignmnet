# Assignment 3b - CRUD API using Node.js, Express, MongoDB

## Project Structure

- `config/database.config.js` - MongoDB connection URL
- `app/model/user.js` - Mongoose user model
- `app/controllers/User.js` - Register, login, and CRUD logic
- `app/routes/User.js` - API routes
- `server.js` - Entry point

## Install and Run

```bash
cd Ass3b
npm install
npm start
```

Server runs at `http://localhost:3000`.

## API Endpoints

- `POST /user/register` - Register user
- `POST /user/login` - Login user
- `POST /user` - Create user (CRUD create)
- `GET /user` - Show all users
- `GET /user/:id` - Show one user
- `PATCH /user/:id` - Update user
- `DELETE /user/:id` - Delete user

## Sample JSON Body (Register/Create)

```json
{
  "email": "test@example.com",
  "firstName": "Tanmay",
  "lastName": "User",
  "phone": "9999999999",
  "password": "test123"
}
```

## Notes

- Keep MongoDB running locally on `127.0.0.1:27017`.
- Database name used: `crud-node-express`.
