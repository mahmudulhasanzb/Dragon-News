import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="h-[100vl] flex items-center flex-col gap-4 justify-center">
      <h3 className="text-4xl font-bold">404</h3>
      <h2 className="font-bold text-4xl text-purple-500">Page Not Found</h2>
      <p className="text-lg text-purple-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href={'/'}>
        {' '}
        <button className="btn bg-purple-500 text-white">
          Back to Home
        </button>{' '}
      </Link>
    </div>
  );
};

export default NotFound;
