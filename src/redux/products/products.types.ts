export type IProducts = {
  data: IProductsData;
  status: 'PENDING' | 'SUCCESS' | 'ERROR';
};

export type IProductsData = {
  [productId: string]: IProduct;
};

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}
