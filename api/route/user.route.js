import express from "express";
import usercontroller from '../controllers/user.controller.js'


const router = express.Router();

router.get('/test', usercontroller)


export default router;