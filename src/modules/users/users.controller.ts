import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserDTO } from './dto/user-dto';
import { TrimPipe } from 'src/common/pipes/trim-pipes';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly service: UsersService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({ status: 200, description: 'List of users', type: [UserDTO] })
  async findAll() {
    return this.service.findAllUsers();
  };

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve a user by ID' })
  @ApiResponse({ status: 200, description: 'User details', type: UserDTO })
  @ApiParam({ name: 'id', description: 'User ID', type: Number })
  async findOneUnique(@Param('id') id: number) {
    return this.service.findOneUser(id);
  };

  @Post()
  @UsePipes(TrimPipe)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created', type: UserDTO })
  @ApiBody({ type: UserDTO })
  async create(@Body() createUserDTO: UserDTO) {
    return this.service.createUser(createUserDTO);
  };

  @Put(':id')
  @UsePipes(TrimPipe)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Update an existing user' })
  @ApiResponse({ status: 204, description: 'User successfully updated' })
  @ApiParam({ name: 'id', description: 'User ID', type: Number })
  @ApiBody({ type: UserDTO })
  async update(@Param('id') id: number, @Body() updateUserDTO: UserDTO) {
    return this.service.updateUser(id, updateUserDTO);
  };

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 204, description: 'User successfully deleted' })
  @ApiParam({ name: 'id', description: 'User ID', type: Number })
  async remove(@Param('id') id: number) {
    return this.service.deleteUser(id);
  };
};
