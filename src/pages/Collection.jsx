import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        }
        else {
            setCategory(prev => [...prev, e.target.value]);
        }
    }

    const toggleSubCategory = (e) => {

        if (subCategory.includes(e.target.value)) {
            subCategory(prev => prev.filter(item => item !== e.target.value));
        }
        else {
            subCategory(prev => [...prev, e.target.value]);
        }
    }

    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    useEffect(() => {
        console.log(category, subCategory);
    }, [category, subCategory])

    const categories = ["Men", "Women", "Kids"];
    const types = ["Topwear", "Bottomwear", "Winterwear"];

    return (
        <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t mb-10">

            {/* Filter Sidebar */}
            <div className="min-w-[240px]">
                {/* Mobile toggle */}
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2 sm:hidden font-semibold"
                >
                    FILTERS
                    <img
                        src={assets.dropdown_icon}
                        className={`h-4 transition-transform duration-300 ${showFilter ? "rotate-90" : ""}`}
                        alt="dropdown"
                    />
                </p>

                {/* Filters container */}
                <div
                    className={`border border-gray-300 rounded-md p-4 mt-6 transition-all duration-300 ${showFilter ? "block" : "hidden"} sm:block`}
                >
                    {/* Categories */}
                    <div className="mb-6">
                        <p className="mb-2 text-sm font-medium">CATEGORIES</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            {categories.map((cat) => (
                                <label
                                    key={cat}
                                    className="flex items-center gap-2 cursor-pointer hover:text-black"
                                >
                                    <input onChange={toggleCategory} type="checkbox" value={cat} className="h-4 w-4 rounded border-gray-400" />
                                    {cat.toUpperCase()}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Types */}
                    <div>
                        <p className="mb-2 text-sm font-medium">TYPE</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            {types.map((type) => (
                                <label
                                    key={type}
                                    className="flex items-center gap-2 cursor-pointer hover:text-black"
                                >
                                    <input onChange={toggleSubCategory} type="checkbox" value={type} className="h-4 w-4 rounded border-gray-400" />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex-1 flex flex-col gap-6">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Title text1="ALL" text2="COLLECTIONS" />
                    <div className="w-full sm:w-auto">
                        <select className="w-full sm:w-auto border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition">
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item) => (
                        <ProductItem
                            key={item._id}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Collection;