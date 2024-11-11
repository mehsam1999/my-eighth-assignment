import { Helmet } from "react-helmet";

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className="bg-banner">
                    <div className="md:container mx-auto px-2 md:py-10">
                        <div className="flex flex-col justify-center items-center text-center">
                            <h1 className="text-white lg:text-3xl font-semibold ">Statistics</h1>
                            <p className="text-gray-200 mt-4 text-xs lg:text-[1rem] leading-relaxed">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <p className="text-3xl text-gray-800 font-extrabold">Page Not Found</p>
            </div>
            
        </div>
    );
};

export default Statistics;