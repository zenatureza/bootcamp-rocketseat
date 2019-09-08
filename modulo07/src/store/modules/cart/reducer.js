// used to avoid ... when modifying state
import produce from 'immer';

// action is passed through 'dispatch' method
export default function cart(state = [], action) {
  // reducer state is also immutable!
  switch (action.type) {
    case 'ADD_TO_CART':
      /* ########## OLD WAY TO CHANGE AN IMMUTABLE STATE
        returns current state of products + added product
        return [
          ...state,
          {
            ...action.product,
            amount: 1,
          },
        ];
      */
      return produce(state, stateDraft => {
        // apply modifications into state through a draft
        const draft = stateDraft;

        // checks if the product's already on the list
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          // if so, then increases the amount of it
          draft[productIndex].amount += 1;
        } else {
          // else, places a new product into the list
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, stateDraft => {
        const draft = stateDraft;
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
