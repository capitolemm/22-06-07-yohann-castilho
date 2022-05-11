export interface ICart {
  [productId: string]: ICartProduct;
}

export interface ICartProduct {
  id: string;
  quantity: number;
}
