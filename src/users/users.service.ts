import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

export type UserModel = User;

@Injectable()
export class UsersService {
  private readonly users: UserModel[] = [
    {
      id: 1,
      name: 'john',
      email: 'john@email.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'chris',
      email: 'chris@email.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async findByEmail(username: string): Promise<UserModel | undefined> {
    return this.users.find((user) => user.name === username);
  }
  /* create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  } */
}
