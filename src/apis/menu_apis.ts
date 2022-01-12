import axios from 'axios';
import Menu, { MenuResponse } from '@/modules/menus'


// function createUserFromResponse(res: User): User {
//   return new User(res.id, res.name, res.email, res.password)
// }


export const getMenus: () => Promise<MenuResponse[]> = async () => {
  const response = await axios.get('/menu')
  return response.data.data
}

export const getOwnerMenus: (params: Menu) => Promise<MenuResponse[]> = async (params: Menu) => {
  const response = await axios.get(`/menu/owner/${params}`)
  return response.data.data
}

export const getMenuDetail: (params: Menu) => Promise<MenuResponse[]> = async (params: Menu) => {
  const response = await axios.get(`/menu/${params}`)
  return response.data.data
}



//stripe


export const PaymentCheckOut: (menu_id: number) => Promise<string> = async (menu_id: number) => {
  const response = await axios.get(`/checkout/${menu_id}`)
  const sessionId = response.data.id
  return sessionId
}






// export interface UserCreateParams {
//   name: string
//   email: string
//   password: string
// }

// export const createUser: (params: UserCreateParams) => Promise<User> = async (params: UserCreateParams) => {
//   const res = await axios.post('/register', { name: params.name, email: params.email, password: params.password })
//   return createUserFromResponse(res.data)
// }

// export interface LoginParams {
//   email: string
//   password: string
//   type: string
// }


// export const login: (params: LoginParams ) => Promise<LoginUserResponse | LoginOwnerResponse | LoginAdminResponse> = async (params: LoginParams) => {
//   const response = await axios.post('/login', { email: params.email, password: params.password, type: params.type })
//   return response.data
// }

