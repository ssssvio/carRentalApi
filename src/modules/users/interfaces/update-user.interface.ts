import { UserDTO } from "../dto/user-dto";

export interface IUpdateUserUsecase {
  execute(id: number, data: UserDTO): Promise<void>;
};