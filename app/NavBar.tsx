"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

const NavBar = () => {
  const path = usePathname();
  const navLinks = [
    {
      title: "Dashboard",
      link: "/",
    },
    {
      title: "Issues",
      link: "/issues",
    },
  ];
  return (
    <>
      <nav className="flex h-16 items-center space-x-6 px-5 border-b-2">
        <Link href={"/"}>
          <FaBug />
        </Link>
        <div>
          <ul className="flex  space-x-6">
            {navLinks.map(({ title, link }) => (
              <li
                className={classNames({
                  "text-zinc-900": link === path,
                  "text-zinc-500": link !== path,
                  "hover:text-zinc-800 transition-all": true,
                })}
                key={link}
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
