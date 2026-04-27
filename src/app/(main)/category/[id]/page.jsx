import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 my-[60px]">
      {/* left side bar */}
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>

      {/* all news */}
      <div className="col-span-6">
        <h2 className="font-bold text-lg">News by category</h2>
        <div className="space-y-4 mt-6">
          {news > 0 ? (
            news.map(n => {
              return <NewsCard key={n._id} news={n}></NewsCard>;
            })
          ) : (
            <h2 className="font-bold text-4xl text-center">No News Found</h2>
          )}
        </div>
      </div>

      {/* right side bar */}
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
