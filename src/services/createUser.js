import { Users } from '../models/Users.js';
import bcrypt from 'bcrypt';

export const createUserService = async ( name, surname, email, password ) => {

    let hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
        name, surname, email, password: hashedPassword
    });
    return newUser
};
