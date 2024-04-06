import { FadeDirectionEnum } from '@/types/animate/animate.enum';
import { buildInteractionObserverThreshold } from '@/utils/animate/threshold';
import { useInView, animated } from '@react-spring/web';
import { HTMLAttributes, useCallback, useMemo } from 'react';

interface IProps extends HTMLAttributes<any> {
  direction?: FadeDirectionEnum;
}

const InView = ({ children, direction }: IProps) => {
  const bottomToTop = useMemo(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    []
  );

  const leftToRight = useMemo(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    []
  );

  const rightToLeft = useMemo(
    () => ({
      from: {
        opacity: 0,
        x: 120,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    []
  );

  const getConfig = useCallback(() => {
    if (direction === FadeDirectionEnum.BottomToTop) return bottomToTop;
    if (direction === FadeDirectionEnum.LeftToRight) return leftToRight;
    if (direction === FadeDirectionEnum.RightToLeft) return rightToLeft;
    return bottomToTop;
  }, [direction, rightToLeft, leftToRight, bottomToTop]);

  const [parentRef, parentSprings] = useInView(
    () => ({
      ...getConfig(),
    }),
    {
      // rootMargin: '-10% 0px 0% 0%',
      amount: buildInteractionObserverThreshold(5),
    }
  );
  return (
    <animated.div ref={parentRef} style={parentSprings}>
      {children}
    </animated.div>
  );
};

export default InView;
