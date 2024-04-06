import { useEffect, useState, type ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

export const NavbarComponent = ({ children }: NavbarProps) => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <>
      <nav
        className={`sticky left-0 top-0 right-0 z-20 w-screen flex justify-between bg-white ${
          !top && `shadow-lg`
        }`}
      >
        {children}
      </nav>
    </>
  );
};
