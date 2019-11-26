export default function loginRegister(state = { message: '' }, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        message: action.payload.message
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        message: action.payload.message
      };
    default:
      return state;
  }
}
