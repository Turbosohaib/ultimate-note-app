import Image from "next/image";
import Link from "next/link";

export function SideBarLink({ link, text, svg_Icon, openSideBar }) {
  return (
    <Link
      href={link}
      className={`${link === "/" && "sticky top-0"} w-full p-3 hover:bg-[#e6e6e6] transition-all duration-700 flex ${openSideBar ? "justify-center" : "justify-start"} gap-1 items-center`}
    >
      {link === "/tasks" ? (
        <svg
          width="30"
          height="26"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.646 7.435c.266.22.303.614.083.88l-3.915 4.73a.625.625 0 01-.899.066l-2.23-2.004a.625.625 0 01.835-.93l1.746 1.57 3.5-4.229a.625.625 0 01.88-.083z"
            fill="#737373"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.019 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm0 1.25a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            fill="#737373"
          ></path>
                    
        </svg>
      ) : (
        <Image src={svg_Icon} alt="SVG" />
      )}

      <div
        className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
      >
        {text}
      </div>
    </Link>
  );
}
