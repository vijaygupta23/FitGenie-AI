import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold">
              FitGenie
              <span className="text-[#00E5A8]">AI</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              AI-powered fitness platform helping users achieve their goals
              through personalized workouts, nutrition plans and smart coaching.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#features">Features</a>
              </li>

              <li>
                <a href="#programs">Programs</a>
              </li>

              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/faq" onClick={() => window.scrollTo(0, 0)}>
                  FAQ
                </Link>
              </li>

              <li>
                <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
                  Blog
                </Link>
              </li>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Contact
              </Link>
              <li></li>
    
              {/* <li>
                <a href="#">Support</a>
              </li> */}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/vijaygupta23"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00E5A8] hover:text-black transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/laxvijaygupta2000/"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00E5A8] hover:text-black transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/im_vijaygupta_17/"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00E5A8] hover:text-black transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">
            © 2026 FitGenie AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
