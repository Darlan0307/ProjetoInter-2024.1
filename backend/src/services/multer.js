import multer from "multer";
import path  from "path";

// Multer config
export const uploader = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      cb(new multer.MulterError('LIMIT_FILE_TYPE', 'Unsupported file type'), false);
      return;
    }
    cb(null, true);
  },
  limits: { fieldSize: 8 * 1024 * 1024,fileSize: 2 * 1024 * 1024},
});