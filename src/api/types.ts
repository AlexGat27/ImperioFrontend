export interface UserDto {
  id: number
  name: string
  surname: string
  login: string
  roles: string[]
  updated_at: string
  created_at: string
}

export interface RoleDto {
  type: number
  name: string
  description: null
  ruleName: null
  data: null
  createdAt: number
  updatedAt: number
}

/*
  Тут все про мануфактуры, сначала идут интерфейсы неэкспортированные, потом экспортированные
*/

export interface ManufacturesDto{
  id: number
  name: string
  website: string
  region: string
  city: string
  district: string
  address_loading: string
  note: string
  create_your_project: boolean
  is_work: boolean
  emails: string[]
  contacts: ManufactureContactsModel[]
}

export interface ManufactureContactsModel{
  id: number
  // id_manufacture: number
  telephone: string
  name_personal: string
  notes: string
}

export interface SearchManufacturesDto{
  id: number
  name: string
  website: string
  category: string
  region: string
  city: string
  district: string
  emails: string[]
  contacts: ManufactureContactsModel[]
}


/*
  Тут все про продукты
*/

export interface ProductsDto{
  id: number
  name: string
  length: number
  width: number
  height: number
  weight: number
  category_name: string
}

/*
  Тут все про логистов
*/

export interface CarsLogistDto{
  name: string
  telephone: string
  email: string
  notes: string
  region_names: string[]
  car_type_names: string[]
}
export interface TypeCarsDto{
  id: number
  name: string
}

/*
* А здесь все про города
* */
export interface CityDto{
  id: number
  name: string
  parentid: number
}