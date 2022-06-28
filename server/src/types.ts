export interface Location{
  id: string,
  address: string,
}

export interface Franchisee{
  id: string,
  first_name: string,
  last_name: string,
  location_ids: string[]
}

export interface Sale {
  id: string,
  franchisee_id: string,
  location_id: string,
  date: string,
  subtotal: number,
  tax: number,
  total: number
}

export interface Data{
  data: {
    locations: Location[],
    franchisees: Franchisee[]
    sales: Sale[]
  }
}