import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv().config;

const app = express();

app.listen(3000, () => {
    console.log('listening on port 3000')
})