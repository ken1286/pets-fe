export default function mainview(state = [], action) {
  switch (action.type) {
    case 'PETS_FETCHED':
      return [...action.payload.pets];
    case 'PETS_FAILURE':
      return [...state];
    default:
      return state;
  }
}
