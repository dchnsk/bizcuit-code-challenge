import { encrypt, decrypt } from "./../../core/utils/crypto";
import { Response, Request } from "express";
import { IUserService } from "./UserService";

interface IUserController {
  signIn: (req: Request, res: Response) => Promise<void>;
  signUp: (req: Request, res: Response) => Promise<void>;
}

export class UserController implements IUserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async signUp(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body;

      const encryptedPassword = encrypt(password);

      const newUser = await this.userService.createUser({
        email,
        name,
        password: encryptedPassword,
      });

      res.status(201).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
  async signIn(req: Request, res: Response) {
    const { email, name, password } = req.body;

    const decryptedPassword = decrypt(password);
  }
}
