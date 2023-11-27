import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => 
{
    const { username, email, password } = req.body;
   
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ username, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json("user created successfully");
    } catch (error) {
        next(error);
    }
};

export const signIn = async (req, res, next) =>{
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email: email});
        if(!validUser) return next(errorHandler(404, "User not found"));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, "Wrong credentials"));
        const token = Jwt.sign({ id: validUser._id}, process.env.JWT_SECRET)
        const {password : pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}
