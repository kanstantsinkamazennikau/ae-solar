"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  ABOUT_IN_NUMBERS,
  ABOUT_OUR_HISTORY,
} from "@/app/[locale]/utils/constants";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OurHistory() {
  const [count, setCount] = useState("");
  let refs = useRef([]);

  const container = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const containers = gsap.utils.toArray("#con");
  //   containers.forEach((container) => {
  //     gsap.to(container!, {
  //       autoAlpha: 1,
  //       ease: "power1.in",
  //       scrollTrigger: {
  //         //@ts-ignore
  //         trigger: container,
  //         pin: true,
  //         scrub: true,
  //       },
  //     });
  //   });
  // const ctx = gsap.context(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#statAnimationTrigger",
  //       start: "top bottom",
  //       toggleActions: "play none none none",
  //     },
  //   });
  //   const myObj = { val: 0 };

  //   tl.to(myObj, {
  //     val: 0,
  //     duration: 3,
  //     ease: "power3.out",
  //     onUpdate: () => {
  //       setCount(Number(myObj.val).toFixed(0));
  //     },
  //   });
  // });
  // return () => ctx.kill();
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    createAnimation();
  }, []);

  const createAnimation = () => {
    console.log(refs);

    //@ts-ignore
    refs.current.forEach((container) => {
      gsap.to(container, {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: container,
          // pin: true,
          scrub: true,
          markers: true,
          // start: `center`,

          // end: `+=${window.innerHeight / 1.5}`,
        },
      });
    });
    // gsap.to(refs.current, {
    //   autoAlpha: 1,
    //   ease: "power1.in",
    //   scrollTrigger: {
    //     trigger: ".container",
    //     pin: true,
    //     scrub: true,
    //   },
    // });
  };

  const test = [
    "sdfsdfs",
    "sfsfsfsfsf",
    "sdfsfsfsdfsdf",
    "sfdfsfsfsdfsfsdf",
    "sdfsdeqwfs",
    "wqeqw",
    "qweqwssda",
    "dasdc",
  ];

  return (
    <BasicWidthContainer>
      <TwoTierHeading
        tierOneHeading={ABOUT_OUR_HISTORY}
        tierTwoHeading={ABOUT_IN_NUMBERS}
        align="left"
        size="small"
        reverseColor
      />
      <div ref={container}>
        {test.map((text) => (
          <div
            ref={(el) => {
              //@ts-ignore
              refs.current.push(el);
            }}
            key={text}
            className="opacity-50"
          >
            {text}
          </div>
        ))}
      </div>
    </BasicWidthContainer>
  );
}

// function Test({ text }: { text: string }) {
//   const container = useRef(null);
//   useEffect( () => {

//     gsap.registerPlugin(ScrollTrigger);

//     createAnimation();

//   }, [])

//   const createAnimation = () => {

//     gsap.to(refs.current, {

//       scrollTrigger: {

//           trigger: container.current,

//           scrub: true,

//           start: `top`,

//           end: `+=${window.innerHeight / 1.5}`,

//       },

//       opacity: 1,

//       ease: "none",

//       stagger: 0.1

//   })

// }

//   return <div ref={container}>{text}</div>;
// }
