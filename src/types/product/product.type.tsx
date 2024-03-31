export type IProduct = {
  name: string;
  image: string;
  price: number;
  stockStatus: EStockStatus;
};

export enum EStockStatus {
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'outOfStock',
  LOW_IN_STOCK = 'lowInStock',
}
