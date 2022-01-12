export default class Menu {
  id: number;
  name: string;
  description: string;
  owner_id: number;
  area_id: number;
  genre_id: number;
  price: number;
  image: string;

  constructor(id: number, name: string, description: string, owner_id: number, area_id: number, genre_id: number, price: number, image: string) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.owner_id = owner_id,
    this.area_id = area_id,
    this.genre_id = genre_id,
    this.price = price,
    this.image = image
  }
}

export interface MenuResponse {
  menus: Menu[]
}



