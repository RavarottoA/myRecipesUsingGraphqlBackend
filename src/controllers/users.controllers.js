import { comparePasswords } from "../services/comparePasswords.js";
import { createUserService } from "../services/createUser.js";
import { getUserService } from "../services/getUser.js";

export const createUser = async (req, res) => {
    const { name, surname, email, password, password2 } = req.body;
    try {
        const newUser = await createUserService(
            name,
            surname,
            email,
            password,
            password2
        );
        
        res.json(newUser);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const loginUser = async (req, res) => {
    const user = req.body;
    const userGot = await getUserService(user.email);
    if (userGot === null) {
        return res.status(400).send("Cannot find user");
    }
    try {
        const comparison = await comparePasswords(user.password, userGot.password);
        if (comparison === 'Success') {
            res.send('Success');
        } else {
            res.send('Not Allowed');
        }
    } catch (error) {
        res.status(500).send();
    }
};

