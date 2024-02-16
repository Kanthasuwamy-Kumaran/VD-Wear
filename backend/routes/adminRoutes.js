import express from 'express';
const router = express. Router();

import { 
    loginAdmin,
    logoutAdmin,
    getShopDetails,
    getAllUsers,
    deleteShop,
    deleteUser
} from '../Controllers/adminController.js';

import { protect,isAdmin } from '../middleware/authMiddleware.js';



// ("/api/admin",adminRoutes) this main routes

// admin routes
router.post("/admin-login",loginAdmin);
router.post('/adminlogout', logoutAdmin); 
router.get("/shopsprofile",getShopDetails); //protect,isAdmin,
router.get("/usersprofile",getAllUsers); //protect,isAdmin,

router.delete("/deleteshop",deleteShop); //protect,isAdmin,
router.delete("/deleteuser",deleteUser); //protect,isAdmin,


// start upload image
import {uploadImage} from "../Controllers/imageController.js"
import multer from 'multer';

const storage= multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadImage);





export default router;