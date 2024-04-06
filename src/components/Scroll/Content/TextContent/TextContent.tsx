import InView from '@/components/Animate/InView';
import { FadeDirectionEnum } from '@/types/animate/animate.enum';

const TextContent = () => {
  return (
    <div className="p-10 md:p-20">
      <div>
        <InView>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          pariatur soluta ratione officia veritatis optio ad esse dolorum
          architecto, sunt exercitationem, necessitatibus odit quidem veniam
          assumenda sit quos nostrum consequuntur.
        </InView>
      </div>
      <div>
        <InView direction={FadeDirectionEnum.LeftToRight}>
          LeftToRight Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Repellat pariatur soluta ratione officia veritatis optio ad esse
          dolorum architecto, sunt exercitationem, necessitatibus odit quidem
          veniam assumenda sit quos nostrum consequuntur.
        </InView>
      </div>
      <div>
        <InView direction={FadeDirectionEnum.RightToLeft}>
          RightToLeft Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Repellat pariatur soluta ratione officia veritatis optio ad esse
          dolorum architecto, sunt exercitationem, necessitatibus odit quidem
          veniam assumenda sit quos nostrum consequuntur.
        </InView>
      </div>
    </div>
  );
};

export default TextContent;
