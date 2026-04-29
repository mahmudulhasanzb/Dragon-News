import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { CiShare2, CiBookmark } from 'react-icons/ci';
import { IoIosStar } from 'react-icons/io';

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return (
    <div className="card bg-base-100 shadow-sm max-w-4xl mx-auto">
      <div className="card-body">
        {/* author info */}
        <div className="flex justify-between items-center bg-slate-200 p-4">
          <div className="flex gap-1 items-center">
            {news.author?.img && (
              <Image
                src={news.author.img}
                alt={news.author?.name || 'Author'}
                height={40}
                width={40}
                className="rounded-full object-cover"
              />
            )}
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

        <figure className="relative w-full h-[400px]">
          {news.image_url && (
            <Image
              src={news.image_url}
              fill
              alt={news.title}
              className="object-cover rounded-xl"
              priority
            />
          )}
        </figure>
        <p>{news.details}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="flex items-center gap-2">
              <IoIosStar className="text-lg text-yellow-500" />
              {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-2">
              <FaEye className="text-lg" /> {news.total_view}
            </h2>
          </div>
          <Link href={`/category/${news.category_id}`}>
            <button className="btn btn-secondary">
              See other news of this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
