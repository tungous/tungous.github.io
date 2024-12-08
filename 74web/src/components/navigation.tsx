import { useState } from "react";
import logo from "../assets/sf-logo-web.png";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  setLogo: (value: boolean) => void;
  isLogoClicked: boolean;
  setIsWorkClicked: (value: boolean) => void;
  isWorkClicked: boolean;
  setIsCreativesClicked: (value: boolean) => void;
  isCreativesClicked: boolean;
}

const Navigation = ({
  setLogo,
  isLogoClicked,
  setIsWorkClicked,
  isWorkClicked,
  setIsCreativesClicked,
  isCreativesClicked,
}: NavigationProps) => {
  const navItems = ["Home", "Work", "Creatives", "About"];
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [showCollective, setShowCollective] = useState(false);

  const handleAboutClick = () => {
    if (isAboutClicked) {
      setIsAboutClicked(false);
      setTimeout(() => {
        setShowCollective(false);
      }, 1000);
    } else {
      setIsAboutClicked(true);
      setShowCollective(true);
    }
  };

  return (
    <div className="min-h-screen flex w-1/2">
      <div className="flex-col px-6 pt-[70%]">
        <img src={logo} alt="logo" className="h-4 w-4 cursor-pointer" />
        <div
          className="text-white cursor-pointer font-semibold"
          onClick={() => setLogo(!isLogoClicked)}
        >
          <p className="flex gap-1">
            Seventyfour
            <AnimatePresence mode="wait">
              {(showCollective || isLogoClicked) && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  is a collective of creatives
                </motion.span>
              )}
            </AnimatePresence>
          </p>
        </div>
        <nav className="flex flex-col pt-10">
          {navItems.map((item) => (
            <div key={item} className="w-fit">
              <p
                className="text-white w-fit underline decoration-white transition-all duration-500 hover:decoration-black cursor-pointer"
                onClick={() => {
                  if (item === "About") {
                    handleAboutClick();
                  } else if (item == "Work") {
                    setIsWorkClicked(!isWorkClicked);
                  } else if (item == "Creatives") {
                    setIsCreativesClicked(!isCreativesClicked);
                  }
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </nav>
        <AnimatePresence mode="wait">
          {isAboutClicked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <p>
                Founded by{" "}
                <a href="https://www.tungous.com/" className="underline">
                  Thanh Tung Mai{" "}
                </a>{" "}
                & Thanh Long Pham Based in Prague
                <br />
                <a
                  href="https://www.instagram.com/seventyfour.collective"
                  className="underline"
                >
                  @seventyfour.collective{" "}
                </a>
                <br />
                collective@seventyfour.work
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navigation;
