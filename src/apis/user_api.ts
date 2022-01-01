import axios from 'axios';
import User, { AccessToken } from '@/modules/users'


function createUserFromResponse(res: any): User {
  return new User(res.id, res.name, res.email, res.password)
}

export const getUser: () => Promise<User[] | undefined> = async () => {
  try {
    const res = await axios.get('/user')
    return res.data
  } catch (err) {
    return err
  }
}

export interface UserCreateParams {
  name: string
  email: string
  password: string
}

export const createUser: (params: UserCreateParams) => Promise<User> = async (params: UserCreateParams) => {
  const res = await axios.post('/user', { name: params.name, email: params.email, password: params.password })
  return createUserFromResponse(res.data)
}

export interface UserLoginParams {
  email: string
  password: string
}

export const loginUser: (params: UserLoginParams) => Promise<AccessToken> = async (params: UserLoginParams) => {
  const res = await axios.post('/login', { email: params.email, password: params.password })
  return res.data.access_token
}

