const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // Added CORS

const app = express();

app.use(cors()); // Enable CORS

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single('myfile');

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images only.');
  }
}

// Route for uploading file
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      if (req.file == undefined) {
        res.status(400).send('No file selected');
      } else {
        res.send(`File uploaded: ${req.file.filename}`);
      }
    }
  });
});

app.listen(5000, () => console.log('Server started on port 5000'));