# WAD Assignments

## Folder Structure

- `Ass1a` - Static multi-page website
- `Ass1b` - Login and details pages
- `Ass2a` - GitHub version control commands
- `Ass2b` - Docker container environment
- `Ass2c` - Angular register/login/profile app
- `Ass3a` - Static file web server using Node.js core modules
- `Ass3b` - CRUD + register/login API using Node.js, Express, MongoDB
- `Ass4a` - jQuery Mobile website
- `Ass4b` - AWS Elastic Beanstalk deployment sample

### Assignment 2a

Read `Ass2a/README.md` for GitHub account, repository, commit, push and pull commands.

### Assignment 2b

```bash
cd Ass2b
docker build -t ass2b-docker-app .
docker run --rm -p 8000:8000 ass2b-docker-app
```

Open: `http://localhost:8000/`

### Assignment 2c

```bash
cd Ass3b
npm start
```

In another terminal:

```bash
cd Ass2c
npm start
```

Open: `http://localhost:4200/`

## Quick Run Commands

### Assignment 3a

```bash
cd Ass3a
node server.js
```

Open: `http://localhost:5000/`

If port 5000 is busy:

```bash
cd Ass3a
PORT=5001 node server.js
```

### Assignment 3b

```bash
cd Ass3b
npm install
npm start
```

Open: `http://localhost:3000/`

Base API path: `/user`

### Assignment 4a

Open `Ass4a/index.html` in a browser.

### Assignment 4b

```bash
cd Ass4b
npm start
```

Open: `http://localhost:8080/`
