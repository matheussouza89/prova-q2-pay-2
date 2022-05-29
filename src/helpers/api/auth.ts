export const isAuthenticated = () => {
  const token = localStorage.getItem('TOKEN_KEY')

  if (token) {
    return false
  }

  return true
}
