import { Repository } from 'typeorm';
import { UserDTO } from './dto/user-dto';
import { Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultCreateUser } from './dto/result-user.dto';
@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ) { }

  create(data: UserDTO): ResultCreateUser {
    return this.userRepository.create(data);
  }

  findOne(id: number): Promise<Users> {
    return this.userRepository.findOne({ where: { id } });
  }

  findAll(): Promise<ResultCreateUser[]> {
    return this.userRepository.find();
  }

  async save(data: Users): Promise<void> {
    await this.userRepository.save(data);
  }

  async remove(user: Users): Promise<void> {
    await this.userRepository.remove(user);
  }
};