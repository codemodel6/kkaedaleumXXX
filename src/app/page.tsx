"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
    let isScrolling = false; // 스크롤 잠금 플래그

    const scrollToSection = (index: number) => {
      const target = sections[index];
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop,
          behavior: "smooth",
        });
      }
    };

    const handleScroll = (event: WheelEvent) => {
      // 기본 스크롤 동작을 막음
      event.preventDefault();

      if (isScrolling) return; // 스크롤 중이면 함수 실행 중지

      const direction = event.deltaY > 0 ? 1 : -1;
      const newIndex = currentSectionIndex + direction;

      if (newIndex >= 0 && newIndex < sections.length) {
        currentSectionIndex = newIndex;
        scrollToSection(currentSectionIndex);

        // 스크롤 잠금 시작
        isScrolling = true;

        // 스크롤이 완료된 후 잠금 해제 (0.8초 후)
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    // wheel 이벤트를 감지하여 스크롤 처리
    window.addEventListener("wheel", handleScroll, { passive: false });

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
      <section className="h-screen bg-yellow-500 flex items-center justify-center pt-24">
        <h1 className="text-white text-4xl">Fourth Screen</h1>
      </section>
    </div>
  );
}
