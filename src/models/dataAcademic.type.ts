export interface DataAcademy {
  id?: string
  levelStudy?: string
  otherStudy?: string
  otherLanguage?: string
  performance?: string
}

export const EmptyDataAcademyState: DataAcademy = {
  id: undefined,
  levelStudy: undefined,
  otherStudy: undefined,
  otherLanguage: undefined,
  performance: undefined
}