
import {GridFsStorage} from "multer-gridfs-storage";
import multer from "multer"
import dotenv from "dotenv";
 
dotenv.config();
const storage = new GridFsStorage({
   
    url:  process.env.DATABASE_URL,
    file: (request, file) => {
        const allowedTypes = ['image/png', 'image/jpg'];
        if (allowedTypes.indexOf(file.mimetype) === -1) {
            return `${Date.now()}--blog-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}--blog-${file.originalname}`
        };
    }
});

export default multer({ storage });


 