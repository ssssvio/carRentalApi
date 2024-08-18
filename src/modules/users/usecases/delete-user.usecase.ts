import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { IDeleteUSerUsecase } from '../interfaces/delete-user.interface';

@Injectable()
export class DeleteUserUseCase implements IDeleteUSerUsecase {
  constructor(private readonly usersRepository: UserRepository) { }

  async execute(id: number): Promise<void> {
    const userToRemove = await this.usersRepository.findOne(id);
    if (!userToRemove) {
      throw new NotFoundException(`User #${id} not found!`);
    }
    this.usersRepository.remove(userToRemove);
    return;
  }
};