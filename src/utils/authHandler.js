/**
 * Function to login user with user data
 * @param {*} user object
 */
export const loginUser = (user) => {
  localStorage.setItem('userAuth', JSON.stringify(user))
}

/**
 * Function to check whether user logged in
 * @returns boolean
 */
export const isLoggedIn = () => {
  const user = localStorage.getItem('userAuth')
  return !!user
}

/**
 * Function to fetch loggedin user object
 * @returns user object
 */
export const getUserDetails = () => {
  return JSON.parse(localStorage.getItem('userAuth'))
}

/**
 * Function to logout user
 */
export const logoutUser = () => {
  localStorage.removeItem('userAuth')
}

/**
 * Function is to signup user
 * @param {*} user
 */
export const signupUser = (user) => {
  const users = JSON.parse(localStorage.getItem('rgstrdUsers'))
  if (users) {
    // set user as registered user
    users.push({ ...user })
    localStorage.setItem('rgstrdUsers', JSON.stringify(users))

    // login after signup
    loginUser(user)
  }
}

// Valid user credentials
const validUsers = [
  {
    name: 'Admin',
    email: 'admin@digibook.com',
    password: 'admin@123',
  },
  {
    name: 'Steve',
    email: 'steve@digibook.com',
    password: 'steve@123',
  },
]

// set if users not available
export const setDefaultUsers = () => {
  const users = JSON.parse(localStorage.getItem('rgstrdUsers'))
  if (!users) {
    localStorage.setItem('rgstrdUsers', JSON.stringify(validUsers))
  }
}

export const isValidUser = (user) => {
  const users = JSON.parse(localStorage.getItem('rgstrdUsers'))
  if (users) {
    const userObj = users.find(
      (u) => u.email === user.email && u.password === user.password
    )
    return userObj
  }
  return false
}
