import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    id: '1',
    title: 'something something',
  },
  {
    id: '2',
    title: 'something2 something2',
  },
  {
    id: '3',
    title: '3something3 3something3',
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto px2">
      <button className="btn btn-secondary">Latest News</button>
      <Marquee pauseOnHover speed={50} className="text-black">
        {news.map(n => (
          <span key={n.id} className="mr-10">
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
