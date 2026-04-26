import Link from 'next/link';
import React from 'react'

const LeftSideBar = ({categories, activeId}) => {
  return (
    <div>
      <h2 className="font-bold text-lg  "> All Categories</h2>
      {categories.map(category => (
        <ul key={category.category_id} className="flex flex-col gap-3 mt-6">
          <li
            className={`${activeId == category.category_id && 'bg-slate-100'} p-2 rounded-md font-bold text-center text-md`}
          >
            <Link
              href={`/category/${category.category_id}`}
              className="block "
            >
              {category.category_name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default LeftSideBar