import express from "express"
import { signupcontroller,LogInUsers } from "../controllers/userController.js";
import {uploadFile,downloadfile} from '../controllers/imageCont.js'
import upload from '../utils/upload.js'
import {savePost,getallBlogs,editedPost,deleteBlog } from '../controllers/postController.js'
import {auhtenticateToken} from '../controllers/jwtController.js'
import { postComment ,getComment,postLikes,getAllLikes} from "../controllers/CommentCont.js";

const route = express.Router();

route.post('/signup',signupcontroller)
route.post('/login',LogInUsers)
route.post('/upload/files', upload.single('file'), uploadFile)
route.get('/file/:filename',downloadfile)
route.post('/saveBlog', auhtenticateToken, savePost)
route.get('/getAllBlog', getallBlogs)
route.post('/saveBlog', auhtenticateToken, savePost)
route.post("/saveEditedBlog/:postId",auhtenticateToken,editedPost);
route.delete('/deleteBlog/:postId',auhtenticateToken, deleteBlog);
route.post('/postComment',auhtenticateToken,postComment);
route.get('/getComment/:postId',auhtenticateToken,getComment);
route.post('/postLikes/:postId',auhtenticateToken,postLikes);
route.get('/getAllLikes/:postId', getAllLikes);

export default route;