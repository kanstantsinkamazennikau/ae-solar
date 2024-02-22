"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      let pauseRatio = 0.1;
      let snapPauseRatio = pauseRatio / (pauseRatio * 2 + 1);
      let snapPanelRatio = 1 / (panels.length - 1) / (pauseRatio * 2 + 1);
      let snapValues = panels.map(
        (panel, i) => snapPauseRatio + i * snapPanelRatio
      );
      snapValues.unshift(0);
      snapValues.push(1);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: snapValues,
          //@ts-ignore
          end: () => "+=" + slider!.current!.offsetWidth,
          markers: true,
        },
      });
      tl.to(
        panels,
        {
          xPercent: -100 * (panels.length - 1),
          duration: 1,
          ease: "none",
        },
        pauseRatio
      );
      tl.to({}, { duration: pauseRatio });

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          //@ts-ignore
          trigger: panel,
          containerAnimation: tl,
          start: "left center",
          end: "right center",
          onToggle: (self) => {
            if (self.isActive) {
              console.log("enter panel index:", i);
            }
          },
        });
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App overflow-hidden" ref={component}>
      <div ref={slider} className="containerr">
        <div className="panel w-screen h-screen bg-red-700 flex justify-center items-center">
          <div>ONE</div>
        </div>
        <div className="panel w-screen h-screen bg-orange-700 flex justify-center items-center">
          <div>ONE</div>
        </div>
        <div className="panel w-screen h-screen bg-purple-700 flex justify-center items-center">
          <div>ONE</div>
        </div>
      </div>
    </div>
  );
}
