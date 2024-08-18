import { ResultUser } from '../dto/result-user.dto';

export interface IFindAllUsersUsecase {
  execute(): Promise<ResultUser[]>;
};

export interface IFindUserUsecase {
  executeById(id: number): Promise<ResultUser>;
};