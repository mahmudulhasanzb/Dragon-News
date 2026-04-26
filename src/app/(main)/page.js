import LeftSideBar from "@/components/homepage/news/LeftSideBar";

const getCategories = async() => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories()

  return (
    <div className="grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3">
<LeftSideBar categories={categories} activeId={null}/>
      </div>
      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        All News
      </div>
      <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        Social icons
      </div>
    </div>
  );
}
