const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case 'ADDPRODUCT':
      //Verify id a product is in the cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Allows to increase product quanitity when product is in cart
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case 'DELPRODUCT':
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

      break;

    default:
      return state;
      break;
  }
};

export default handleCart;