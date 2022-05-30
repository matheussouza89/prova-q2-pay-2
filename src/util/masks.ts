export function maskCPFCNPJ(value: string) {
  if (value !== undefined) {
    if (value.length < 14) {
      const newValue = value
        .toString()
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
      return newValue
    } else {
      const newValue = value
        .toString()
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, '$1.$2.$3/$4-$5')
      return newValue
    }
  }
  return ''
}
