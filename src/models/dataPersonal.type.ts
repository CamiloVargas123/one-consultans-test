export interface DataPersonal {
  id?: string
  firtName?: string
  lastName?: string
  age?: number
  email?: string
}

export const EmptyDataPerosnalState: DataPersonal = {
  id: undefined,
  firtName: undefined,
  lastName: undefined,
  age: undefined,
  email: undefined
}