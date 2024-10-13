const fs = require("fs");
const multer = require("multer");

// Check if the upload directory exists, and create it if not
const uploadPath = './upload';
if (!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath);
}

// Set up the storage configuration for multer
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, uploadPath); // Specify the directory for file storage
    },
    filename: function (req, file, callback) {
      const uniqueId = Date.now() + '-' + Math.floor(Math.random() * 1E9);
      callback(null, `${uniqueId}-${file.originalname}`); // Create a unique filename using timestamp and random number
    }
});
  
// Initialize the upload handler with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
