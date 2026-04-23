# Assignment 3a - Static File Web Server

## Run

```bash
cd Ass3a
node server.js
```

Open `http://localhost:5000/` in your browser.

If port 5000 is busy:

```bash
PORT=5001 node server.js
```

Then open `http://localhost:5001/`.

- `/` lists all files in the current folder.
- Clicking a file serves it with the correct MIME type.
- Directory traversal is blocked by path sanitization.
