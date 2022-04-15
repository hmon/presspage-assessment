import { BaseService } from '@/services/_base.service'
import { Users } from '@/models/users'
import { singleton } from 'tsyringe'

@singleton()
export class UserService extends BaseService {
  static entity = 'users'

  async getAll(): Promise<Users> {
    const result = await this.request.get<Users>(UserService.entity)

    return result.data
  }
}
