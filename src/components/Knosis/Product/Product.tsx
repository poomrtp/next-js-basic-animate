import { TProduct } from '@/types/product/product.type';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

type TProductProps = {
  products: TProduct[];
} & HTMLAttributes<HTMLDivElement>;
const Product = ({ products, ...props }: TProductProps) => {
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
