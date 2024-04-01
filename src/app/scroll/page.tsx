'use client';

import InView from '@/components/Animate/InView';
import Hero from '@/components/Scroll/Hero/Hero';
import { useInView, animated } from '@react-spring/web';

const ScrollPage = () => {
  return (
    <div className="">
      <Hero />
      <div className="min-h-dvh bg-white/70 text-black backdrop-blur-lg p-20">
        <InView>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          pariatur soluta ratione officia veritatis optio ad esse dolorum
          architecto, sunt exercitationem, necessitatibus odit quidem veniam
          assumenda sit quos nostrum consequuntur.
        </InView>
      </div>
      <div className="min-h-dvh bg-white/70 text-black backdrop-blur-lg p-20">
        <InView>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          pariatur soluta ratione officia veritatis optio ad esse dolorum
          architecto, sunt exercitationem, necessitatibus odit quidem veniam
          assumenda sit quos nostrum consequuntur.
        </InView>
      </div>
    </div>
  );
};

export default ScrollPage;
