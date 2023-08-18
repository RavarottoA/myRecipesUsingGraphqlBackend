import { createUserService } from "../services/createUser.js";

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
