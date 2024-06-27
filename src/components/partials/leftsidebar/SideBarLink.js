import Image from "next/image";
import Link from "next/link";

export function SideBarLink({ link, text, svg_Icon, openSideBar }) {
  return (
    <Link
      href={link}
      className={`${link === "/" && "sticky top-0"} w-full p-3 hover:bg-[#e6e6e6] transition-all duration-700 flex ${openSideBar ? "justify-center" : "justify-start"} gap-1 items-center`}
    >
      <Image src={svg_Icon} alt="SVG" />
      <div
        className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
      >
        {text}
      </div>
    </Link>
  );
}
