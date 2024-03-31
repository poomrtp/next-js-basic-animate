import { knosisProduct } from '@/constants/knosis.constant';
import Navigation from '../Navigation/Navigation';
import Product from '../Product/Product';

const Content = () => {
  return (
    <div className="p-4 bg-neutral-950 text-white ">
      <div className="mx-auto lg:max-w-[940px]">
        <Navigation>
          <div>Home</div>
          <div>About</div>
        </Navigation>
        <Product products={knosisProduct} />
      </div>
    </div>
  );
};

export default Content;
