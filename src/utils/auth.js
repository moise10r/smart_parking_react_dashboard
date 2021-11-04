const isAuthenticate = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return currentUser? true : false;
}

export default isAuthenticate