'use client';
import { useRef, useState } from 'react';
import {
  useScroll,
  animated,
  useSpring,
  useChain,
  useSpringRef,
  config,
} from '@react-spring/web';

import Image from 'next/image';
import Content from './Content';

export default function Hero() {
  const [isActiveContent, setIsActiveContent] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '0%', opacity: 0 },
    to: {
      size: isActiveContent ? '100%' : '0%',
      background: 'rgba(255,255,255,0.7)',
      opacity: isActiveContent ? 1 : 0,
    },
  });

  const transApi = useSpringRef();

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([springApi, springApi], [0.1, isActiveContent ? 0.1 : 0.1]);

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.01) {
        return setIsActiveContent(true);
      }
      return setIsActiveContent(false);
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div className="relative flex flex-col h-[120dvh] justify-center items-center">
      <div className="h-dvh w-full fixed top-0 -z-10">
        <Image
          className={`h-dvh w-full object-cover  pointer-events-none transition-all duration-200 ${
            isActiveContent ? 'visible' : 'visible'
          }`}
          src="/image/culenasm/main/culenasm-band.jpeg"
          alt=""
          width={1443}
          height={911}
          quality={100}
        />
      </div>
      <animated.div
        style={{
          ...rest,
          width: size,
          height: size,
        }}
        className="sticky top-0 inset-0 backdrop-blur-lg duration-100"
      >
        <Content />
        <div className="min-h-dvh w-full "></div>
      </animated.div>
    </div>
  );
}
