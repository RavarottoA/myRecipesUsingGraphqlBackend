import { config } from 'dotenv';
config();
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import { getUserEmail } from './src/services/services.js';

export const authMiddleware = expressjwt({
    algorithms: ['HS256'],
    credentialsRequired: false,
    secret: process.env.TOKEN_SECRET,
});

export const handleLogin = async (req, res) => {
    const user = req.body;
    const userGot = await getUserEmail(user.email);
    if (userGot === null) {
        return res.status(400).send("Cannot find user");
    }
    try {
        const claims = { sub: user.id, email: user.email };
        const token = jwt.sign(claims, process.env.TOKEN_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).send();
    }
};
