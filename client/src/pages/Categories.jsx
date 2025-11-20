import { Link } from "react-router-dom";
import { FaTshirt, FaShoePrints, FaSocks, FaVestPatches } from "react-icons/fa";
import { useEffect } from "react";

const Categories = () => {

  // Fade-in animation on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-card");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
  <div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen">
    

      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-paper-fibers.png')] opacity-20 pointer-events-none"></div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-12 relative z-10">Browse Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

        {/* CATEGORY CARDS */}
        <CategoryCard
          icon={<FaTshirt className="text-3xl text-black" />}
          title="Shirts"
          link="/products?category=shirts"
          image="https://images.asos-media.com/products/asos-collective-ac-t-253-super-heavyweight-oversized-t-shirt-in-cream/208841446-1-tofu"
          subcategories={["Casual", "Graphic", "Oversized"]}
        />

        <CategoryCard
          icon={<FaSocks className="text-3xl text-black" />}
          title="Jeans"
          link="/products?category=jeans"
          image="https://images.asos-media.com/products/asos-design-straight-jeans-in-washed-black/209283562-1-washedblack?$n_750w$&wid=750&fit=constrain"
          subcategories={["Slim fit", "Straight", "Baggy"]}
        />

        <CategoryCard
          icon={<FaShoePrints className="text-3xl text-black" />}
          title="Shoes"
          link="/products?category=shoes"
          image="https://images.asos-media.com/products/new-balance-9060-unisex-trainers-in-grey/208530942-1-black"
          subcategories={["Sports", "Casual", "Winter"]}
        />

        <CategoryCard
          icon={<FaVestPatches className="text-3xl text-black" />}
          title="Jackets"
          link="/products?category=jackets"
          image="https://images.asos-media.com/products/weekday-wool-blend-coat-in-black/209530797-1-black?$n_640w$&wid=513&fit=constrain"
          subcategories={["Hooded", "Bomber", "Windbreaker"]}
        />
      </div>

    </div>
  );
};


/* CATEGORY CARD COMPONENT */
const CategoryCard = ({ title, image, link, subcategories, icon }) => (
  <Link
    to={link}
    className="group fade-card opacity-0 translate-y-6 transition-all duration-700 cursor-pointer"
  >
    {/* Card */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white 
                    group-hover:shadow-xl group-hover:-translate-y-1 transition">

      {/* Icon Tag */}
      <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full flex items-center gap-2 shadow">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition group-hover:scale-110 duration-300"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 
                      group-hover:opacity-100 transition"></div>
    </div>

    {/* Title */}
    <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-black">{title}</h3>

    {/* Subcategories */}
    <div className="text-sm text-gray-600 mt-1 flex flex-wrap gap-2">
      {subcategories.map((sub, i) => (
        <span
          key={i}
          className="bg-gray-100 px-3 py-1 rounded-full text-xs border border-gray-300 group-hover:border-black transition"
        >
          {sub}
        </span>
      ))}
    </div>

    {/* View all button */}
    <button className="mt-3 bg-black text-yellow-400 px-4 py-2 rounded-lg 
                       hover:bg-gray-800 transition shadow-sm">
      View All →
    </button>
  </Link>
);

export default Categories;
