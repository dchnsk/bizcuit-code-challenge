import { IUser, IUserDTO } from "./../../interfaces/user";
import UserModel from "./UserModel";

export interface IUserService {
  createUser: (user: IUserDTO) => Promise<IUser>;
  findUserByEmail: (email: string) => Promise<IUser>;
}

export class UserService implements IUserService {
  constructor() {}

  async createUser(user: IUserDTO) {
    try {
      const newUser = await UserModel.create(user);

      return newUser.dataValues;
    } catch (error: any) {
      throw error;
    }
  }

  async findUserByEmail(email: string) {
    try {
      const user = await UserModel.findOne({
        where: { email },
      });

      return user?.dataValues;
    } catch (error: any) {
      throw error;
    }
  }
}
