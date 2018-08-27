let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? user : {};

export function users(state = initialState, action) {
  switch (action.type) {
    case 'USERS_LOGIN_REQUEST':
      return {
        user: action.user
      };
    default:
      return state
  }
}