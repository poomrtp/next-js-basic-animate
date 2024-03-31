'use client';
import { useRef, useState } from 'react';
import {
  useScroll,
  animated,
  useSpring,
  useChain,
  useSpringRef,
  useTransition,
  config,
} from '@react-spring/web';

import styles from './styles.module.scss';
import Image from 'next/image';
import Content from '../Content/Content';

const X_LINES = 40;

const PAGE_COUNT = 5;

const INITIAL_WIDTH = 20;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const barContainerRef = useRef<HTMLDivElement>(null!);
  const [isActiveContent, setIsActiveContent] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '0%' },
    to: {
      size: isActiveContent ? '100%' : '0%',
      background: 'unset',
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition([], {
    ref: transApi,
    trail: 1,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([springApi, springApi], [0, isActiveContent ? 0.1 : 0.6]);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollY, scrollYProgress } }) => {
      if (scrollYProgress > 0.1) {
        return setIsActiveContent(true);
      }
      return setIsActiveContent(false);
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="h-dvh max-h-dvh">
        <Image
          className={`h-dvh w-full object-cover pointer-events-none fixed top-0 left-0 transition-all duration-200`}
          src="/image/culenasm/main/culenasm-band.jpeg"
          alt=""
          width={1443}
          height={911}
          quality={100}
        />
      </div>
      <div className="h-dvh w-full bg-blue-700"></div>
      {/* <animated.div
        style={{
          ...rest,
          width: size,
          height: size,
        }}
        className="relative bottom-0 bg-white/70 backdrop-blur-lg min-h-dvh"
        // onClick={() => setIsActiveContent((prev) => !prev)}
      >
      </animated.div> */}
      <Content />
    </div>
  );
}
