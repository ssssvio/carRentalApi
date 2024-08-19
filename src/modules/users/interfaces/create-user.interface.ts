import { ResultCreateUser } from "../dto/result-user.dto";
import { UserDTO } from "../dto/user-dto";

export interface ICreateUserUseCase {
  execute(data: UserDTO): Promise<ResultCreateUser>;
};