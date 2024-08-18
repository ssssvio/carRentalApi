import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { FindUsersService } from './finders/find-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [FindUsersService]
})
export class UsersModule { }