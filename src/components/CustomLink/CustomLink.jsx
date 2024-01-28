import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length == 1,
  });

  return (
    <Link
      to={to}
      {...props}
      className={
        match
          ? 'text-neutral-700 text-[16px] rounded-none border-b-2 border-b-neutral-700 border-solid hover:neutral-900 px-4 mx-2'
          : 'text-neutral-400 text-[16px] rounded-none border-b-neutral-300 border-solid hover:border-b-2 hover:text-neutral-700 px-4 mx-2'
      }
    >
      {children}
    </Link>
  );
};

export default CustomLink;
