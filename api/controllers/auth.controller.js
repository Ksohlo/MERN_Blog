import user from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req,res)=> {
    const {username, email, password} = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({message: 'All fields are required'})
    }
    
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new user({
        username, 
        email, 
        password: hashedPassword,
    })

    try {
        await newUser.save();
        res.json('Signup Successful')
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};