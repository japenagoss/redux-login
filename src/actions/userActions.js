import { userService } from '../apis/user'

export const userLogin = (email, password) => {
  return (dispatch) => {
    userService.login(email, password).then(user => {
      //localStorage.setItem('users', JSON.stringify(user));
      dispatch(login(user));
    });
  }
};

const login = (user) => ({ type: 'USERS_LOGIN_REQUEST', user });