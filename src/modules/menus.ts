export default class Menu {
  name: string;
  description: string;
  owner_id: number;
  area_id: number;
  genre: string;
  price: number;
  image: string;

  constructor(name: string, description: string, owner_id: number, area_id: number, genre: string, price: number, image: string) {
    this.name = name,
    this.description = description,
    this.owner_id = owner_id,
    this.area_id = area_id,
    this.genre = genre,
    this.price = price,
    this.image = image
  }
}

export interface MenuResponse {
  id: number;
  name: string;
  description: string;
  owner_id: number;
  area_id: number;
  area_name: string;
  genre_name: string;
  genre_id: number;
  price: number;
  image: string;
  product_code: number;
  created_at: Date;
  updated_at: Date;
}



