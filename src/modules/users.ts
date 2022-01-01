export default class User {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.password = password
  }
}

export interface AccessToken {
  access_token: string;
}