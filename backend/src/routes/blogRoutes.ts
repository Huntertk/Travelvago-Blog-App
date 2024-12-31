// import { randomBytes } from "crypto";
import { Router } from "express";
import multer from "multer";
// import path from "path";
import { createNewBlog, deleteBlog, editBlog, getBlogs, insertNewBlog } from "../controllers/blogController";
import { authorizeRoles, authUser } from "../middleware/authMiddleware";

const router = Router();


// Set up storage engine for Multer
const storage = multer.memoryStorage();
// Set up storage engine for Multer
// const storage = multer.diskStorage({ 
//     destination: (req, file, cb) => { 
//         cb(null, path.join(__dirname, "..", "..", "public", "assets", "images")); 
//     }, filename: (req, file, cb) => {
//         const generateFileName = randomBytes(16).toString('hex')
//         cb(null, `${generateFileName}_${path.extname(file.originalname)}`);
//     }
// });

// Initialize upload variable with Multer configuration
const upload = multer({ 
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
      },
 });


router.post('/new', 
    authUser,
    authorizeRoles('admin'),
    upload.single('image'),
    createNewBlog
)

router.post('/edit', 
    authUser,
    authorizeRoles('admin'),
    upload.single('image'),
    editBlog
)

router.post('/delete', 
    authUser,
    authorizeRoles('admin'),
    deleteBlog
)

router.get('/',
    getBlogs
)

router.post('/create',
    insertNewBlog
)


export default router;