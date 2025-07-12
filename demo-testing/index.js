import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// Use fileURLToPath and path.dirname to get the directory name of the current module
// This is necessary for ES modules to resolve the __dirname equivalent
// since __dirname is not available in ES modules.
// This allows us to serve static files correctly.  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;


// Serve static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Use Express's built-in body parser instead of deprecated bodyParser
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});