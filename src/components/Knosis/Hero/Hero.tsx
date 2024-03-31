'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web';

const Hero = () => {
  const PAGE_COUNT = 1;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useScroll({
    onChange: ({ value: { scrollY } }) => {
      if (containerRef?.current) {
        const { scrollHeight, clientHeight } = containerRef.current;
        const totalScroll = scrollHeight - clientHeight / 2;
        const calculatedProgress = scrollY / totalScroll;
        setScrollYProgress(calculatedProgress);
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div ref={containerRef} className="relative bg-neutral-100">
      <div className="relative bg-neutral-950 lg:bg-neutral-100">
        <div className="lg:h-dvh flex justify-center items-center sticky z-10 inset-y-0 inset-x-0 pointer-events-none">
          <picture className="">
            <source
              src="/image/knosis/main/knosis-logo.webp"
              media="(min-width: 1024px)"
            />
            <img
              className="lg:h-dvh w-auto"
              src="/image/knosis/main/knosis-logo.webp"
              alt=""
            />
          </picture>
        </div>
        <div
          className="h-full w-full absolute top-0 z-0 bg-neutral-950 hidden lg:block"
          style={{ opacity: scrollYProgress }}
        ></div>
        <div className="peer">
          {new Array(PAGE_COUNT).fill(null).map((_, index) => (
            <div
              className={`h-dvh w-full first:hidden first:lg:h-dvh lg:first:block`}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
