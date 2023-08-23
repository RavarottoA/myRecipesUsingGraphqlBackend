import bcrypt from 'bcrypt';

export const comparePasswords = async (bodyPassword, userPassword) => {
    if ( await bcrypt.compareSync(bodyPassword, userPassword) ) {
        return 'Success';
    } else {
        return 'Not Allowed'
    };
};
