import { ResultCreateUser } from "../dto/result-user.dto";
import { UserDTO } from "../dto/user-dto";

export interface ICreateUserUsecase {
  execute(data: UserDTO): Promise<ResultCreateUser>;
};