export interface DataAcademy {
  id?: string
  levelStudy?: string
  title?: string
  otherStudy?: string
  otherLanguage?: string
  performance?: string
}

export const EmptyDataAcademyState: DataAcademy = {
  id: undefined,
  levelStudy: undefined,
  title: undefined,
  otherStudy: undefined,
  otherLanguage: undefined,
  performance: undefined
}