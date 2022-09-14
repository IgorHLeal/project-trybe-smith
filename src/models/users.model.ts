import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/users.interface';

const UsersModel = {
  create: async ({ username, classe, level, password }: IUser): Promise<number> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`;

    const values = [username, classe, level, password];

    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);

    return insertId;
  },
};

export default UsersModel; 