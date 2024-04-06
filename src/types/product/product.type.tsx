export type TProduct = {
  name: string;
  image: string;
  price: number;
  stockStatus: StockStatus;
};

export enum StockStatus {
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'outOfStock',
  LOW_IN_STOCK = 'lowInStock',
}
