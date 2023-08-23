import { Users } from '../models/Users.js';

export const getUserService = async (email) => {
    const user = await Users.findOne({
        where: {email},
    });
    return user.get();
};
