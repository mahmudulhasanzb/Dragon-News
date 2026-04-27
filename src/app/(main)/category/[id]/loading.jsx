import React from 'react';

const Loadingpage = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      News by cateogory logadinf
      <Loading>
        <span className="loading-dots loading-xl"></span>
      </Loading>
    </div>
  );
};

export default Loadingpage;
