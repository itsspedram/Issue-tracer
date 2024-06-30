import Link from "next/link";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
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
              <li className={`text-gray-600 hover:text-gray-800 transition-all`} key={link}>
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
