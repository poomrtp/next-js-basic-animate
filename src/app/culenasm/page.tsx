import Content from '@/components/Culenasm/Content/Content';
import Hero from '@/components/Culenasm/Hero/Hero';
import Image from 'next/image';

const CulenasmPage = () => {
  return (
    <div className="relative">
      {/* <Image
        className="fixed -z-10 h-dvh w-auto object-cover"
        src="/image/culenasm/main/culenasm-band.jpeg"
        alt=""
        fill
      /> */}
      <Hero />
      {/* <Content /> */}
    </div>
  );
};

export default CulenasmPage;
