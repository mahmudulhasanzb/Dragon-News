import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/RightSideBar';

const getCategories = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
  );
  const data = await res.json();
  return data.data.news_category;
};

const getNewsByCategoryId = async category_id => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();

  const news = await getNewsByCategoryId('03');
  console.log(news);

  return (
    <div className="grid grid-cols-12 gap-4 my-[60px]">
      {/* left side bar */}
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null} />
      </div>

      {/* all news */}
      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        All News
        {
          news.map(n => {
            return <div key={n._id}>{n.title}</div>
          })
        }
      </div>

      {/* right side bar */}
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}
