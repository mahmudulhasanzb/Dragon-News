import { redirect } from 'next/navigation'

const defaul_category_id = "01"

const Home = async () => {
  redirect(`/category/${defaul_category_id}`)
}

export default Home;