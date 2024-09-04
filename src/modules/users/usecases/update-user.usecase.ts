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
    const { name, email, password } = data;
    const userExists = await this.usersRepository.findOne(id);

    if (!userExists) {
      throw new NotFoundException(`User #${id} not found!`);
    }

    if (email) {
      const userWithSameEmail = await this.findUserService.findOneByEmail(email);
      if (userWithSameEmail && userWithSameEmail.id !== id) {
        throw new BadRequestException(`User with email ${email} already exists!`);
      }
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUserData = { id, name, email, password: hashedPassword };

    await this.usersRepository.save(newUserData);
  }
};