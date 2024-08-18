import { Injectable, NotFoundException } from '@nestjs/common';
import { IFindAllUsersUsecase, IFindUserUsecase } from '../interfaces/find-user.interface';
import { UserRepository } from '../users.repository';
import { Users } from '../entities/users.entity';
import { ResultCreateUser } from '../dto/result-user.dto';

@Injectable()
export class GetUserUseCase implements IFindAllUsersUsecase, IFindUserUsecase {
  constructor(private readonly usersRepository: UserRepository) { }

  async execute(): Promise<ResultCreateUser[]> {
    const allUsers = await this.usersRepository.findAll();
    if (!allUsers.length) {
      throw new NotFoundException('No users found!');
    }
    return allUsers.map(user => { return { name: user.name, email: user.email } });
  }

  async executeById(id: number): Promise<Users> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found!`);
    }
    return user;
  }
};