import { useInView, animated } from '@react-spring/web';
import Image from 'next/image';

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
      <div className="min-h-[120dvh] w-full pt-40 p-10 md:p-20 md:pt-40 lg:p-40">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="lg:col-span-2 flex">
            <Image
              className="max-h-[480px] w-full object-cover object-top"
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974"
              alt="person sitting inside restaurant"
              sizes="(min-width: 768px), (min-width: 1280px)"
              width={1974}
              height={1481}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <Image
                className="max-h-[480px] w-full object-cover"
                src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=870"
                alt="person sitting inside restaurant"
                sizes="(min-width: 768px), (min-width: 1280px)"
                width={2070}
                height={1380}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1469"
                alt="liquor pouring on clear shot glass"
                sizes="(min-width: 768px), (min-width: 1280px)"
                width={1469}
                height={981}
              />
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Content;
