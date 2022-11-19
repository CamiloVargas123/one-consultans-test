export interface DataPersonal {
  id?: string
  firtName?: string
  lastName?: string
  age?: number
  email?: string
  isSend?: boolean
}

export const EmptyDataPerosnalState: DataPersonal = {
  id: undefined,
  firtName: undefined,
  lastName: undefined,
  age: undefined,
  email: undefined
}