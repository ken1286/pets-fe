export default function loginRegister(state = '', action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload.message;
    case 'LOGIN_FAILURE':
      return action.payload.message;
    default:
      return state;
  }
}
