import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050B18] text-white overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="relative py-24 px-6">
        {/* Background Glow */}

        <div className="absolute -top-32 left-0 w-96 h-96 bg-[#00E5A8]/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <span className="inline-block bg-[#00E5A8]/10 text-[#00E5A8] px-5 py-2 rounded-full font-medium">
                Contact FitGenie AI
              </span>

              <h1 className="text-5xl lg:text-7xl font-black mt-8 leading-tight">
                Get In
                <span className="text-[#00E5A8]"> Touch</span>
              </h1>

              <p className="text-gray-400 text-lg leading-9 mt-8 max-w-xl">
                Have questions about FitGenie AI? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>

              <Link
                to="/faq"
                className="
                inline-flex
                items-center
                gap-3
                mt-10
                bg-[#00E5A8]
                text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition-all
              "
              >
                Visit FAQ
                <FaArrowRight />
              </Link>
            </div>

            {/* Right */}

            <div className="flex justify-center">
              <img
                src="/Contact.png"
                alt="Contact"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}

      <section className="px-6 pb-15">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}

            <div
              className="
              flex 
              items-center 
              gap-5 
               bg-[#0B1220] 
               border
              border-white/10
              rounded-3xl
              p-5
              h-40
              hover:border-[#00E5A8]
              transition-all
              "
            >
              <div
                className="
      w-16
      h-16
      rounded-2xl
      bg-[#00E5A8]/10
      flex
      items-center
      justify-center
      text-[#00E5A8]
      text-2xl
      shrink-0
    "
              >
                <FaEnvelope />
              </div>

              <div className="px-7">
                <h3 className="text-2xl  font-bold">Email</h3>

                <p className="text-gray-400 mt-1">support@fitgenie.ai</p>
              </div>
            </div>

            {/* Phone */}

            <div
              className="
               flex 
              items-center 
              gap-5 
               bg-[#0B1220] 
               border
              border-white/10
              rounded-3xl
              p-5
              h-40
              hover:border-[#00E5A8]
              transition-all
            "
            >
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-[#00E5A8]/10
                flex
                items-center
                justify-center
                text-[#00E5A8]
                text-2xl
              "
              >
                <FaPhoneAlt />
              </div>
              <div className="px-7">
                <h3 className="text-2xl font-bold mt-0">Phone</h3>

                <p className="text-gray-400 mt-1">+91 98765 43210</p>
              </div>
            </div>

            {/* Address */}

            <div
              className="
               flex 
              items-center 
              gap-5 
               bg-[#0B1220] 
               border
              border-white/10
              rounded-3xl
              p-5
              h-40
              hover:border-[#00E5A8]
              transition-all
            "
            >
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-[#00E5A8]/10
                flex
                items-center
                justify-center
                text-[#00E5A8]
                text-2xl
              "
              >
                <FaMapMarkerAlt />
              </div>
              <div className="px-7">
                <h3 className="text-2xl font-bold mt-0">Location</h3>

                <p className="text-gray-400 mt-1">
                  Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}

            <div
              className="
              bg-[#0B1220]
              border
              border-white/10
              rounded-3xl
              p-10
            "
            >
              <h2 className="text-4xl font-bold">Send Us A Message</h2>

              <p className="text-gray-400 mt-4">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form className="mt-10 space-y-6">
                <div>
                  <label className="text-gray-300">Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                    w-full
                    mt-3
                    bg-[#050B18]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#00E5A8]
                  "
                  />
                </div>

                <div>
                  <label className="text-gray-300">Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                    w-full
                    mt-3
                    bg-[#050B18]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#00E5A8]
                  "
                  />
                </div>

                <div>
                  <label className="text-gray-300">Subject</label>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="
                    w-full
                    mt-3
                    bg-[#050B18]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#00E5A8]
                  "
                  />
                </div>

                <div>
                  <label className="text-gray-300">Message</label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="
                    w-full
                    mt-3
                    bg-[#050B18]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    resize-none
                    outline-none
                    focus:border-[#00E5A8]
                  "
                  />
                </div>

                <button
                  className="
                  w-full
                  bg-[#00E5A8]
                  text-black
                  py-4
                  rounded-xl
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                "
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right */}

            <div
              className="
              bg-[#0B1220]
              border
              border-white/10
              rounded-3xl
              p-10
              flex
              flex-col
              justify-center
            "
            >
              <h2 className="text-4xl font-bold">Need Quick Help?</h2>

              <p className="text-gray-400 mt-6 leading-8">
                Before sending a message, you may find your answer in our
                Frequently Asked Questions.
              </p>

              <Link
                to="/faq"
                className="
                mt-10
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#00E5A8]
                text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition-all
              "
              >
                Visit FAQ
                <FaArrowRight />
              </Link>

              <div className="mt-12 border-t border-white/10 pt-10">
                <h3 className="text-2xl font-semibold">Working Hours</h3>

                <p className="text-gray-400 mt-4">Monday - Saturday</p>

                <p className="text-gray-400">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
