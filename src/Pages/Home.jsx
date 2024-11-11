import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import { Helmet } from "react-helmet";


const Home = () => {
    const categories = useLoaderData();
    const { cartCount, wishlistCount } = useOutletContext(); 
    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner cartCount={cartCount} wishlistCount={wishlistCount}></Banner> 
            <div className="pt-96 text-center">
                <h1 className="text-3xl font-extrabold pb-10">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="grid grid-cols-12 gap-5 container mx-auto">
                <div className="col-span-2 border-2 rounded-2xl bg-white h-fit mb-10">
                    <Categories categories={categories}></Categories>
                </div>
                <div className="col-span-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;
