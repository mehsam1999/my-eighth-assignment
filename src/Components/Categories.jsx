/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-bordered flex flex-col items-center py-4">
            {
                categories.map(category =>(
                    <NavLink key={category.category} 
                        to={`/category/${category.category}`} 
                        role="tab" 
                        className={({isActive})=> `btn my-2 w-40 rounded-full ${isActive? ' bg-banner text-white' : ''}`}>
                        {category.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Categories;