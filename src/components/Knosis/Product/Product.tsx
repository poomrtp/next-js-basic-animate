import { IProduct } from '@/types/product/product.type';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

type IProductProps = {
  products: IProduct[];
} & HTMLAttributes<HTMLDivElement>;
const Product = ({ products, ...props }: IProductProps) => {
  return (
    <div {...props}>
      <div className="grid lg:grid-cols-2 gap-8">
        {products.map((item, index) => (
          <div key={index}>
            <Image
              className="w-full"
              src={item.image}
              alt={item.name}
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
