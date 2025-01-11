import bcrypt from 'bcrypt';


export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 12);
};

export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
