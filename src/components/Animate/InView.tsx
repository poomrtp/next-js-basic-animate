import { buildInteractionObserverThreshold } from '@/utils/animate/threshold';
import { useInView, animated } from '@react-spring/web';
import { HTMLAttributes } from 'react';

const InView = ({ children }: HTMLAttributes<any>) => {
  const [parentRef, parentSprings] = useInView(
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
    {
      rootMargin: '0% 0px -20% 0%',
      amount: buildInteractionObserverThreshold(),
    }
  );
  return (
    <animated.div ref={parentRef} style={parentSprings}>
      {children}
    </animated.div>
  );
};

export default InView;
