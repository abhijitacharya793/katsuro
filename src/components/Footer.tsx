"use client";
import React, { useState } from "react";
import { useEffect } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  // SCROLL TO TOP BUTTON VISIBILITY.
  const [showScrollButton, setShowScrollButton] = useState(false); // SHOW/HIDE SCROLL TO TOP BUTTON

  const handleScroll = () => {
    if (window.scrollY > 300) {
      // SHOW BUTTON AFTER SCROLLING DOWN 300px
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };
  // ADD EVENT LISTENER FOR SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL TO TOP FUNCTION
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer top */}
      <div className="lg:max-w-screen-lg mx-auto pb-20">
        <div className="lg:flex items-center justify-center py-4">
          <div className="lg:h-44 lg:w-1/3 flex items-center lg:justify-start justify-center">
            <a
              target="_blank"
              href="https://www.instagram.com/cafeafterhours?igsh=eHd4bDdoazRneXh4&utm_source=qr"
              className="text-white underline"
            >
              #CafeAfterHours
            </a>
          </div>
          <div className="lg:h-44 lg:w-1/3 flex items-center justify-center">
            <Image
              className="h-36 lg:h-96"
              src="/logo1.svg"
              width={250}
              height={250}
              alt="logo"
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="lg:h-44 lg:w-1/3 flex items-center lg:justify-end justify-center"
          >
            <a
              href="https://www.instagram.com/cafeafterhours?igsh=eHd4bDdoazRneXh4&utm_source=qr"
              target="_blank"
            >
              <Image
                alt=""
                width={100}
                height={100}
                src="/insta.svg"
                className="h-5 w-5 mx-4"
              />
            </a>
            <a href="https://www.facebook.com/CafeAfterHours" target="_blank">
              <Image
                alt=""
                width={100}
                height={100}
                src="/facebook.svg"
                className="h-5 w-5 mx-4"
              />
            </a>
            <a href="mailto:Cafeafterhours@gmail.com" target="_blank">
              <Image
                alt=""
                width={100}
                height={100}
                src="/email.svg"
                className="h-5 w-5 mx-4"
              />
            </a>
            {/* <a
              href="https://www.instagram.com/cafe_after_hours/"
              target="_blank"
            >
              <Image
                alt=""
                width={100}
                height={100}
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/655afe9f73021a4d4bc26a34_social-white-icon-3.svg"
                className="h-5 w-5 mx-4"
              />
            </a> */}
            {/* <a
              href="https://www.instagram.com/cafe_after_hours/"
              target="_blank"
            >
              <Image
                alt=""
                width={100}
                height={100}
                src="/pintrest.svg"
                className="h-5 w-5 mx-4"
              />
            </a> */}
          </motion.div>
        </div>
        <div className="lg:flex items-center justify-center text-white pb-2">
          <div className="lg:w-1/3 flex lg:flex-row flex-col items-center lg:justify-start justify-center py-4 lg:py-0">
            <p className="w-18 py-1 border-t border-b border-yellow-600 text-sm font-light text-center">
              CONTACT
            </p>
            <p className="text-sm show_mobile text-center py-2">
              <span className="text-app-yellow">
                <a href="tel:+919810252704">+91 98102 52704</a> /{" "}
                <a href="tel:+919810363405">+91 98103 63405</a>
              </span>
              <br />
              1st Floor, City Centre Mall, Sector 12, Dwarka
              <br />
              New Delhi - 110075
            </p>
          </div>
          <div className="lg:w-1/3 lg:flex items-center justify-center text-center mx-10 lg:mx-0 py-4 lg:py-0">
            {/* Join our mailing list for updates, Get news & offers events.
            <div className="show_mobile">
              <form className="flex items-center border border-white">
                <input
                  className="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 focus:outline-none"
                  type="email"
                  placeholder="Email"
                  aria-label="YEmail"
                />
                <AppButton
                  color={"border-white"}
                  fill={"bg-white"}
                  text={"Subscribe"}
                  fontcolor={"text-app-purple"}
                  hover_color={"hover:border-app-yellow"}
                  hover_fill={"hover:bg-app-yellow"}
                  hover_fontcolor={"hover:text-app-purple"}
                />
              </form>
            </div> */}
          </div>
          <div className="lg:w-1/3 flex lg:flex-row flex-col items-center lg:justify-end justify-center py-4 lg:py-0">
            <p className="w-30 py-1 border-t border-b border-yellow-600 text-sm font-light text-center uppercase">
              Opening hours
            </p>
            <p className="text-sm font-light text-center show_mobile py-2">
              <span className="text-app-yellow font-bold">All Days: </span>
              12:00 pm to 1:00 am
              {/* <br />
              <span className="text-app-yellow font-bold">Sat - Sun: </span>
              12:00 pm to 1:00 am */}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center text-white hide_mobile">
          <div className="w-1/3 flex items-center justify-start">
            <p className="text-sm ">
              <span className="text-app-yellow">
                <a href="tel:+919810252704">+91 98102 52704</a> /{" "}
                <a href="tel:+919810363405">+91 98103 63405</a>
              </span>
              <br />
              1st Floor, City Centre Mall, Sector 12, Dwarka
              <br />
              New Delhi - 110075
              <br />
              <span className="text-app-yellow">
                <a href="mailto:cafeafterhours@gmail.com">
                  cafeafterhours@gmail.com
                </a>
              </span>
            </p>
          </div>
          <div className="w-1/3 flex items-center justify-center text-center">
            {/* <div className="">
              <form className="flex items-center border border-white">
                <input
                  className="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 focus:outline-none"
                  type="email"
                  placeholder="Email"
                  aria-label="YEmail"
                />
                <AppButton
                  color={"border-white"}
                  fill={"bg-white"}
                  text={"Subscribe"}
                  fontcolor={"text-app-purple"}
                  hover_color={"hover:border-app-yellow"}
                  hover_fill={"hover:bg-app-yellow"}
                  hover_fontcolor={"hover:text-app-purple"}
                />
              </form>
            </div> */}
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <p className="text-sm font-light text-right">
              <span className="text-app-yellow font-bold">All Days: </span>
              12:00 pm to 1:00 am
              {/* <span className="text-app-yellow font-bold">Sat - Sun: </span>
              12:00 pm to 1:00 am */}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="lg:max-w-screen-lg mx-auto copyright-block">
        <div className="container mx-auto">
          <div className="flex items-center justify-center py-4">
            <div className="opacity-100 transform-none">
              <p className="text-sm text-white">
                © Copyright - Café After Hours | Designed by{" "}
                <a
                  href="https://www.victorflow.com/"
                  target="_blank"
                  className="underline"
                >
                  TechnoMettle
                </a>
                {/* - Powered by
                <a
                  href="https://webflow.com/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Webflow
                </a> */}
              </p>
            </div>
            <div className="flex space-x-4">
              {/* <a
                href="/style-guide"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Styleguide
              </a>
              <a
                href="/licenses"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Licenses
              </a>
              <a
                href="https://tasteat-template.webflow.io/401"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Protected
              </a>
              <a
                href="https://tasteat-template.webflow.io/404"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Not Found
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* FLOATING SCROLL TO TOP BUTTON */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-app-yellow text-white rounded-full py-3 px-5 shadow-lg hover:bg-yellow-400"
        >
          ↑
        </button>
      )}
    </>
  );
}
