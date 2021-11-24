import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  	user_id: string;
}

class ListAllUsersUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	execute({ user_id }): User[] {
		const user = this.usersRepository.findById(user_id)

		if (!user) {
			throw new Error('User requesting not Found')
		}
		
		if (!user.admin) {
			throw new Error('Unable to list, requesting user is not admin')
		}
		
		const allUsers = this.usersRepository.list()

		return allUsers
	}
}

export { ListAllUsersUseCase };
