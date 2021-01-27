export default (to, from, next) => {
  let token = localStorage.getItem('auth_token')
  if (token) {
    next()
  } else {
    next({ name: 'login' })
  }
}
