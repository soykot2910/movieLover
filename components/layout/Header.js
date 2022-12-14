import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import navData from "../../data/navbar.json";
import { BurgerMenu, CrossIcon } from "../common/SVGIcons";

const Header = () => {
  const { logo, nav_link } = navData;
  const router = useRouter(null);
  const [navOpen, setNavOpen] = useState(false);
  const [model, setModel] = useState(null);

  const path = router.pathname;
  const switchSideDrawerHandler = useCallback(function (close) {
    if (screen.width > 900) return;
    setNavOpen(true);
    document.querySelector("body").classList.add("overflow-hidden");
    if (close) {
      setNavOpen(false);
      document.querySelector("body").classList.remove("overflow-hidden");
      if (
        document
          .querySelector(".js__side-drawer")
          .classList.contains("translate-x-full")
      )
        return 0;
    }
    document
      .querySelector(".js__side-drawer")
      .classList.toggle("translate-x-full");
  }, []);

  function setSubMenuHeightHandler(model, setModel, e) {
    if (screen.width > 900) return;

    document.querySelectorAll(".js__sub-menu").forEach((el) => {
      el.style.maxHeight = "0px";
    });
    if (model !== e.target) {
      e.target.closest("li").querySelector(".js__sub-menu").style.maxHeight =
        "100vh";
      setModel(e.target);
    } else setModel(null);
  }

  useEffect(() => {
    document.querySelectorAll(".nav__item").forEach((el) => {
      if (el.getAttribute("href") === path) el.style.color = "#FF0450";
      else el.style.color = "#fff";
    });
  }, [path]);
  const headerRef = useRef(null);

  useEffect(() => {
    // const header = document.querySelector("header");
    const HeaderBG = document.querySelector(".js-color-set");

    const js_ob = document.querySelector(".js_ob");
    const navObserverCallback = (watchEntry, navObserver) => {
      if (!watchEntry[0].isIntersecting) {
        HeaderBG.classList.add("active");
      } else {
        HeaderBG.classList.remove("active");
      }
    };
    const navObserverOptions = {
      root: null,
      threshold: 1,
      rootMargin: "1px",
    };
    const navObserver = new IntersectionObserver(
      navObserverCallback,
      navObserverOptions
    );
    navObserver.observe(js_ob);
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className=" z-50 top-0 py-2 fixed w-full bg-themeBG md:bg-transparent js-color-set">
          <div className="container mx-auto">
            <nav className="flex justify-between items-center">
              <div className="">
                <a href="/" className="text-white font-bold text-2xl">
                  Movie Lover
                </a>
              </div>

              <div className="flex items-center justify-end h-[7vh] px-4 md:px-0 flex-1">
                <span
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                  className="w-6 h-6 burger lg:hidden z-[1]"
                >
                  {navOpen ? <CrossIcon /> : <BurgerMenu />}
                </span>

                <ul className="js__side-drawer lg:justify-end lg:items-center flex items-start lg:flex-row flex-nowrap flex-col lg:pt-0   fixed lg:relative lg:top-auto top-0 right-0 h-[100vh] lg:h-auto translate-x-full lg:translate-x-0 transition-transform pt-16 duration-500 px-4 lg:px-0 w-full font-semibold bg-themeBG md:bg-transparent">
                  {nav_link.map((item, idx) => (
                    <li
                      key={idx}
                      className="my-1 lg:mx-8"
                      onClick={switchSideDrawerHandler.bind(this, navOpen)}
                    >
                      <Link href={item.link}>
                        <a className="nav__item text-white lg:hover:text-[#FF0450]">
                          {item.text}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <p className="js_ob bg-white text-black"></p>
    </>
  );
};

export default Header;
