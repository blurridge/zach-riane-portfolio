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
        className={`fixed top-0 left-0 right-0 z-50 w-screen flex justify-between bg-white ${
          !top && `shadow-lg`
        }`}
      >
        {children}
      </nav>
    </>
  );
};
