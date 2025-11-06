import multer from "multer";

// Use memory storage for Vercel compatibility (serverless functions don't have persistent disk)
const upload = multer({storage: multer.memoryStorage()})

export default upload;