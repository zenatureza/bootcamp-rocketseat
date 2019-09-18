// used to avoid ... when modifying state
import produce from 'immer';

// action is passed through 'dispatch' method
export default function cart(state = [], action) {
  // reducer state is also immutable!
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, stateDraft => {
        const { product } = action;

        stateDraft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, stateDraft => {
        const draft = stateDraft;
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, stateDraft => {
        const draft = stateDraft;

        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
