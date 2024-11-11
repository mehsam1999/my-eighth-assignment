import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 Not found | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="text-5xl font-bold text-banner">404</h1>
            <p className="text-2xl text-gray-600">Page Not Found</p>
            <p className="text-lg mt-4">Oops! The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="mt-6 btn bg-banner text-white rounded-full">
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
