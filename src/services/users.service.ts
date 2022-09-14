import jwt from 'jsonwebtoken';
import IJwtToken from '../interfaces/token.interface';
import IUser from '../interfaces/users.interface';
import UsersModel from '../models/users.model';

const JWT_SECRET = 'minhaSenhaSecreta';
const JWT_CONFIG: object = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const UsersService = {
  create: async ({ username, classe, level, password }: IUser): Promise<IJwtToken> => {
    const newUser = await UsersModel.create({ username, classe, level, password });
    const token = jwt.sign({ data: { username, newUser } }, JWT_SECRET, JWT_CONFIG);

    return { token };
  },
};

export default UsersService;
