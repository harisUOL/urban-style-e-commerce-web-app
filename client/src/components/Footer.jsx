import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-8">

        {/* TOP AREA */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* BRAND AREA */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-3">
              <img
          src="/Logo.png"   // <-- replace this with your actual logo file
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
              <span className="text-yellow-400 text-xl font-extrabold">
                UrbanStyle
              </span>
            </Link>

            <p className="mt-4 text-sm text-gray-400">
              Copyright © 2025 UrbanStyle. <br /> All rights reserved.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="hover:text-white text-lg"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-white text-lg"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-white text-lg"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">About us</Link></li>
              <li><Link to="#" className="hover:text-white">Blog</Link></li>
              <li><Link to="#" className="hover:text-white">Contact us</Link></li>
              <li><Link to="#" className="hover:text-white">Pricing</Link></li>
              <li><Link to="#" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>

          {/* SUPPORT LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">Help center</Link></li>
              <li><Link to="#" className="hover:text-white">Terms of service</Link></li>
              <li><Link to="#" className="hover:text-white">Legal</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy policy</Link></li>
              <li><Link to="#" className="hover:text-white">Status</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER SIGNUP */}
          <div className="max-w-xs">
            <h3 className="text-white font-semibold mb-4">Stay up to date</h3>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded-l bg-gray-800 text-sm outline-none"
              />
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-r hover:bg-yellow-500 transition">
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
