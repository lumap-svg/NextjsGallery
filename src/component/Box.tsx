import { FC, ReactNode } from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Box: FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={` flex items-center justify-center h-20 bg-black ${className}`}
    >
      {children}
      {/* <div className={`${className} h-20 flex items-center justify-center`}>
        box page
      </div> */}
    </div>
  );
};

export default Box;
