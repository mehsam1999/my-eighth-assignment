import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    const { category } = useParams();
    const gadgets = useLoaderData();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (category && category !== "All Products") {
            const filteredByCategory = [...gadgets].filter(gadget => gadget.category === category);
            setProduct(filteredByCategory);
        }
        else if(category === "All Products"){
            setProduct(gadgets);
        }
        else {
            setProduct(gadgets.slice(0,9));
        }
    }, [gadgets, category]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {product.length > 0 ? (
                product.map(gadget => (
                    <Gadget key={gadget.product_id} gadget={gadget} />
                ))
            ) : (
                <p className="text-3xl font-bold mx-4">No data found</p>
            )}
        </div>
    );
};

export default GadgetCards;
