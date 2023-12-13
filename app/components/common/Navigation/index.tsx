"use client";

import BasicWidthContainer from "@/app/components/common/BasicWidthContainer";
import Button from "@/app/components/common/Button";
import Logo from "@/app/components/common/Logo";
import NavLink from "@/app/components/common/Navigation/NavLink";
import {
  HEADER_CONTACT_US,
  HEADER_NAV_LINKS_ARRAY,
} from "@/app/utils/constants";
import { useState } from "react";

export default function Navigation() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [subMenuHeading, setSubMenuHeading] = useState("");

  const onSubMenuHeadingClick = (subMenuHeader: string) => {
    setSubMenuHeading(subMenuHeader);
  };

  const onLinkClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <BasicWidthContainer>
      <nav className="flex h-[120px] items-center justify-between relative z-40 font-normal">
        <Logo />

        {/* DESKTOP NAV */}
        <ul className="gap-8 md:flex hidden">
          {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
            <NavLink key={navLink.url} {...navLink} />
          ))}
        </ul>
        <div className="gap-8 md:flex hidden">
          <Button onClick={() => console.log("contact us")} small>
            {HEADER_CONTACT_US}
          </Button>
        </div>

        {/* MOBILE NAV */}
        <>
          <div
            className="text-3xl md:hidden block cursor-pointer z-50 relative"
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-yellow-600"></div>
              <div className="w-8 h-0.5 bg-yellow-600"></div>
              <div className="w-8 h-0.5 bg-yellow-600"></div>
            </div>
          </div>
          <div
            className={`
        md:hidden bg-red-700 fixed w-full top-0 overflow-y-auto bottom-0 py-24 px-4
        duration-500 ${isHamburgerMenuOpen ? "left-0" : "left-[-100%]"}
        `}
          >
            <ul>
              {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
                <NavLink
                  key={navLink.url}
                  subMenuHeading={subMenuHeading}
                  onSubMenuHeadingClick={onSubMenuHeadingClick}
                  onLinkClick={onLinkClick}
                  {...navLink}
                />
              ))}
            </ul>

            <div className="gap-8 md:flex hidden">
              <Button onClick={() => console.log("contact us")} small>
                {HEADER_CONTACT_US}
              </Button>
            </div>
          </div>
        </>
      </nav>
    </BasicWidthContainer>
  );
}

//STICKY NAVIGATION

// // <main className="flex flex-col items-center">
// <div className="w-full sticky top-0 z-40 flex justify-center flex-col">
//   {/* NAV */}
//   <div className="w-full flex justify-center bg-black">
//     <nav className="flex h-[90px] items-center justify-between font-normal max-w-[1320px] w-full mx-5 ">
//       <Logo />

//       {/* DESKTOP NAV */}
//       <ul className="gap-8 md:flex hidden">
//         {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
//           <NavLink key={navLink.url} {...navLink} />
//         ))}
//       </ul>
//       <div className="gap-8 md:flex hidden">
//         <Button
//           label={HEADER_CONTACT_US}
//           onClick={() => console.log("contact us")}
//           small
//         />
//       </div>

//       {/* MOBILE NAV */}
//       <>
//         <div
//           className="text-3xl md:hidden block cursor-pointer z-50 relative"
//           onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
//         >
//           <div className="space-y-2">
//             <div className="w-8 h-0.5 bg-yellow-600"></div>
//             <div className="w-8 h-0.5 bg-yellow-600"></div>
//             <div className="w-8 h-0.5 bg-yellow-600"></div>
//           </div>
//         </div>
//         <div
//           className={`
//             md:hidden
//             bg-red-700
//             fixed
//             w-full
//             top-0
//             overflow-y-auto
//             bottom-0
//             py-24
//             px-4
//             duration-500
//             ${isHamburgerMenuOpen ? "left-0" : "left-[-100%]"}
//     `}
//         >
//           <ul>
//             {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
//               <NavLink
//                 key={navLink.url}
//                 subMenuHeading={subMenuHeading}
//                 onSubMenuHeadingClick={onSubMenuHeadingClick}
//                 onLinkClick={onLinkClick}
//                 {...navLink}
//               />
//             ))}
//           </ul>

//           <div className="gap-8 md:flex hidden">
//             <Button
//               label={HEADER_CONTACT_US}
//               onClick={() => console.log("contact us")}
//               small
//             />
//           </div>
//         </div>
//       </>
//     </nav>
//   </div>
//   {/* SUBNAV */}
//   <div
//     className="
//     w-full
//     flex
//     justify-center
//     bg-sub-navigation-black
//     h-[40px]
//     backdrop-blur-[50px]
//     border-b
//     border-solid
//     border-sub-navigation-border"
//   >
//     SUBNAV
//   </div>
// </div>
