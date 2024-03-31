import { HTMLAttributes } from 'react';

const Navigation = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${className || ''} py-4 flex flex-wrap gap-4`} {...props}>
      {children}
    </div>
  );
};

export default Navigation;
