import { UserDTO } from "./dto/user-dto";
import { Injectable } from "@nestjs/common";
import { Users } from "./entities/users.entity";
import { ResultCreateUser } from "./dto/result-user.dto";
import { GetUserUseCase } from "./usecases/find-user.usecase";
import { PostUserUseCase } from "./usecases/create-user.usecase";
import { UpdateUserUseCase } from "./usecases/update-user.usecase";
import { DeleteUserUseCase } from "./usecases/delete-user.usecase";

@Injectable()
export class UsersService {
  constructor(
    private readonly postUserUseCase: PostUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
  ) { }

  createUser(data: UserDTO): Promise<ResultCreateUser> {
    return this.postUserUseCase.execute(data);
  }

  findAllUsers(): Promise<ResultCreateUser[]> {
    return this.getUserUseCase.execute();
  }

  findOneUser(id: number): Promise<Users> {
    return this.getUserUseCase.executeById(id);
  }

  deleteUser(id: number): Promise<void> {
    return this.deleteUserUseCase.execute(id);
  }

  updateUser(id: number, data: UserDTO): Promise<void> {
    return this.updateUserUseCase.execute(id, data);
  }
};