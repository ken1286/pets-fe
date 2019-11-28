export default function mainview(state = [], action) {
  switch (action.type) {
    case 'PETS_FETCHED':
      return [...action.payload.pets];
    case 'PETS_FAILURE':
      return [...state];
    case 'PET_DELETED':
      return state.filter(pet => {
        if (pet.id !== action.payload) {
          return true;
        }
      });
    default:
      return state;
  }
}
