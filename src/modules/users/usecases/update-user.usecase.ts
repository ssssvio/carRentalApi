import * as bcryptjs from 'bcryptjs';
import { UserDTO } from '../dto/user-dto';
import { UserRepository } from '../users.repository';
import { FindUsersService } from '../finders/find-users.service';
import { IUpdateUserUsecase } from '../interfaces/update-user.interface';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

@Injectable()
export class UpdateUserUseCase implements IUpdateUserUsecase {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly findUserService: FindUsersService
  ) { }

  async execute(id: number, data: UserDTO): Promise<void> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found!`);
    }

    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const newUserData = { password: hashedPassword, ...data, id };

    if (JSON.stringify(user) === JSON.stringify(newUserData)) {
      return;
    }

    if (data.email) {
      const userWithSameEmail = await this.findUserService.findOneByEmail(data.email);
      if (userWithSameEmail && userWithSameEmail.id !== id) {
        throw new BadRequestException(`User with email ${data.email} already exists!`);
      }
    }

    await this.usersRepository.save(newUserData);
  }
};