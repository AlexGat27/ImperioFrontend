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

export interface ManufactureModel{
  id: number | null
  name: string | null
  website: string | null
  id_region: number | null
  id_city: number | null
  id_district: number | null
  address_loading: string | null
  note: string | null
  create_your_project: boolean | null
  is_work: boolean | null
}

export interface ManufactureContactsModel{
  id: number | null
  id_manufacture: number | null
  telephone: string
  name_personal: string
  notes: string
}

export interface ManufacturesDto {
  model: ManufactureModel
  emails: string[]
  contacts: string[]
}

export interface SearchManufacturesDto{
  manufacture_name: string
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
  email: string | null
  notes: string | null
  region_names: string[]
  car_type_names: string[]
}
export interface TypeCarsDto{
  id: number
  name: string
}