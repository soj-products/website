import Link from "next/link";
import headerCss from './header.module.css';

export default function Header() {
  const Links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/products", text: "Products" },
    { href: "/team", text: "Team" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <nav>
      <ul className={headerCss.navList}>
        {Links.map((link) => (
          <li key={link.href} className={headerCss.navItems}>
            <Link className={headerCss.linkCss} href={link.href}>{link.text}</Link>
          </li>
        ))}
        <li className="cart"><div className="cart">cart</div></li>
      </ul>
      
    </nav>
  );
}
