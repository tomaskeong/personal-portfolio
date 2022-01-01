function getField(structure: any, field: string, getData?: boolean) {
  if (getData) {
    return structure?.data?.attributes[field]
  }
  return structure?.attributes[field]
}

export const dataFieldUtils = {
  getField,
}
