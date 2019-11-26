export default function mainview(state = {}, action) {
  switch (action.type) {
    case 'PETS_FETCHED':
      return {
        ...state,
        pets: action.payload.pets
      };
    case 'PETS_FAILURE':
      return {
        ...state,
        message: action.payload.message
      };
    default:
      return state;
  }
}
