import { useInView, animated } from '@react-spring/web';

const Content = () => {
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
      rootMargin: '-40% 0%',
    }
  );
  return (
    <animated.div ref={parentRef} style={parentSprings}>
      <div className="h-[120dvh] w-full p-40">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div>
                <h2>INFORMATION</h2>
              </div>
              <div>VIEW ALL</div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Content;
