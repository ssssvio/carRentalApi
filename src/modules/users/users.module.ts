import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { UsersController } from './users.controller';
import { GetUserUseCase } from './usecases/find-user.usecase';
import { FindUsersService } from './finders/find-users.service';
import { PostUserUseCase } from './usecases/create-user.usecase';
import { UpdateUserUseCase } from './usecases/update-user.usecase';
import { DeleteUserUseCase } from './usecases/delete-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService,
    FindUsersService,
    GetUserUseCase,
    PostUserUseCase,
    DeleteUserUseCase,
    UpdateUserUseCase,
    UserRepository
  ],
  exports: [
    FindUsersService, PostUserUseCase, GetUserUseCase, UpdateUserUseCase, DeleteUserUseCase, UserRepository
  ]
})
export class UsersModule { }