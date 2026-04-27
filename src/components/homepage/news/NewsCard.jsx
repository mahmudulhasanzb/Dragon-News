import Image from 'next/image';
import { CiShare2, CiBookmark, IoIosStar } from 'react-icons';
import React from 'react';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* author info */}
        <div className="flex justify-between items-center bg-slate-200 p-4">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>

        <h2 className="card-title">{news.title}</h2>

        <figure>
          <Image
            src={news.image_url}
            width={300}
            height={300}
            alt={news.title}
            className="w-full"
          />
        </figure>
        <p className="line-clamp-3">{news.details}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="flex items-center gap-2">
              <IoIosStar className="text-lg text-yellow-500" />
              {news.rating.number}
            </h2>
            <h2 className='flex items-center gap-2'>
              <FaEye className='text-lg' /> {news.total_view}
            </h2>
          </div>
          <Link href={`news/${news._id}`}>
            <button className="btn">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
