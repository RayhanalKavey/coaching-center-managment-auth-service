import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // We need auto generated incremental id
  const id = await generatedUserId()
  user.id = id
  //A default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}
export default {
  createUser,
}
