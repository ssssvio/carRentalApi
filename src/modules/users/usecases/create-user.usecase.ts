import * as bcryptjs from 'bcryptjs';
import { UserDTO } from '../dto/user-dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ICreateUserUseCase } from '../interfaces/create-user.interface';
import { UserRepository } from '../users.repository';
import { FindUsersService } from '../finders/find-users.service';
import { ResultCreateUser } from '../dto/result-user.dto';

@Injectable()
export class PostUserUseCase implements ICreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly findUserService: FindUsersService
  ) { }

  async execute(data: UserDTO): Promise<ResultCreateUser> {
    const user = await this.findUserService.findOneByEmail(data.email);
    if (user) {
      throw new NotFoundException(`User with email ${data.email} already exists!`);
    }

    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const newUser = this.userRepository.create({
      ...data,
      password: hashedPassword,
    })
    await this.userRepository.save(newUser);

    const result: ResultCreateUser = {
      name: newUser.name,
      email: newUser.email,
    };

    return result;
  }
};