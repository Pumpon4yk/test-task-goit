const KEY = "FOLLOW__USERS"


const setFollowingLocal = (usersFollow) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(usersFollow));
    return true
  } catch (error) {
    return error
  }
}

const getFollowingLocal = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY))
  } catch (error) {
    return error
  }
}

export{setFollowingLocal, getFollowingLocal}