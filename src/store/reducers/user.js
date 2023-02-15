let initialState = {
  items: [],
  total: 2342,
};

function userInfo(state = initialState, action) {
  switch (action.type) {
    case "USERNAME": {
      return {
        company: state,
      };
    }

    case "INC_ITEM_COUNT": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.payload ? { ...i, count: i.count + 1 } : i
        ),
      };
    }

    case "DEC_ITEM_COUNT": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.payload
            ? { ...i, count: i.count === 1 ? 1 : i.count - 1 }
            : i
        ),
      };
    }

    case "REMOVE_ITEM_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((i) => i.product.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
}

export default userInfo;
