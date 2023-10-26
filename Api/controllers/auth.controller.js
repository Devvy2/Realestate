import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signUp = async (req, res) => 
{
    const { username, email, password } = req.body;
   
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ username, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json("user created successfully");
    } catch (error) {
        res.status(500).json(error.message);
    }
    console.log(hashedPassword)
};

