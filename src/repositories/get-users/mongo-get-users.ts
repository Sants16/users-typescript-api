import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "João",
        lastName: "Victor",
        email: "usermail@myemail.com",
        password: "password123",
      },
    ];
  }
}
