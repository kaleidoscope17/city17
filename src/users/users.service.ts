import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(userData: { name: string; email: string }) {
    const newUser = {
      id: this.users.length + 1,
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }
}

