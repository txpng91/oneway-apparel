// Add product to cart
export const addCart = (product) => {
  return {
    type: 'ADDPRODUCT',
    payload: product,
  };
};

//Delete product from cart
export const deleteFromCart = (product) => {
  return {
    type: 'DELPRODUCT',
    payload: product,
  };
};
