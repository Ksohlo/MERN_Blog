import user from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'


dotenv.config();

export const signup = async (req,res, next)=> {
    const {username, email, password} = req.body;
    

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        // return res.status(400).json({message: 'All fields are required'});
        return next({message: 'All fields are required'});
    }
    
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new user({
        username, 
        email, 
        password: hashedPassword,
    })

    try {
        await newUser.save();
        res.json('Signup Successful');
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password || email === '' || password === '') {
        next({message: 'All fields are required'});
    }

    try {
        const validUser = await user.findOne({email});
        if (!validUser) {
            next({message: 'User not found'});
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next({message: 'Wrong password'});
        }

        const token = Jwt.sign(
            { id:validUser._id }, 
            process.env.JWT_SECRET);
        res.status(200).cookie('access_token', token, { httpOnly:true }).json(validUser);

    } catch (error) {
        next(error);
    }
}