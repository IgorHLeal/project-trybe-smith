import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

const UsersController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const { username, classe, level, password } = req.body;
    const newUser = await UsersService.create({ username, classe, level, password });

    return res.status(StatusCodes.CREATED).json(newUser);
  },
};

export default UsersController;