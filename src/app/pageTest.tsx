"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("실행");
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;

    const scrollToSection = (index: number) => {
      console.log(index);
      const target = sections[index];
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop,
          behavior: "smooth",
        });
      }
    };

    const handleScroll = (event: WheelEvent) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const newIndex = currentSectionIndex + direction;

      if (newIndex >= 0 && newIndex < sections.length) {
        currentSectionIndex = newIndex;
        scrollToSection(currentSectionIndex);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen">
      <section className="h-screen bg-blue-500 flex items-center justify-center pt-24">
        <h1 className="text-white text-4xl">First Screen</h1>
      </section>
      <section className="h-screen bg-green-500 flex items-center justify-center pt-24">
        <h1 className="text-white text-4xl">Second Screen</h1>
      </section>
      <section className="h-screen bg-red-500 flex items-center justify-center pt-24">
        <h1 className="text-white text-4xl">Third Screen</h1>
      </section>
      <section className="h-screen snap-start bg-yellow-500 flex items-center justify-center pt-24 transition-transform duration-700 ease-in-out">
        <h1 className="text-white text-4xl">Fourth Screen</h1>
      </section>
    </div>
  );
}
