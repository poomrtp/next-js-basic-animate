'use client';
import AnimateObjectBg from '@/components/AnimateBg/AnimateObjectBg';
import Content from '@/components/Scroll/Hero/Content';
import Hero from '@/components/Scroll/Hero/Hero';

const ScrollPage = () => {
  return (
    <div className="">
      <AnimateObjectBg>
        <Content />
      </AnimateObjectBg>
    </div>
  );
};

export default ScrollPage;
