import { ResultCreateUser } from "../dto/result-user.dto";
import { Users } from "../entities/users.entity";

export interface IFindAllUsersUsecase {
  execute(): Promise<ResultCreateUser[]>;
};

export interface IFindUserUsecase {
  executeById(id: number): Promise<Users>;
};