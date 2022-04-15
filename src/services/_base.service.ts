import { container } from 'tsyringe'
import { ApiService } from '@/services/api.service'

export class BaseService {
  /**
   * ------------------------------
   * @HELPERS
   * ------------------------------
   */

  get request() {
    return container.resolve(ApiService)
  }
}
