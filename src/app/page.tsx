"use client";

import { useEffect, useRef, useCallback } from "react";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]); // 섹션 요소들을 담을 ref 배열 생성
  const currentSectionIndex = useRef(0); // 현재 섹션의 index ref
  const isScrolling = useRef(false); // 스크롤 확인 ref

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 섹션 이동 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const scrollToSection = useCallback((index: number) => {
    const target = sectionsRef.current[index];
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 : 스크롤 발생 시 특정 섹션의 인덱스 전달
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault(); // passive: false 옵션을 사용했기 때문에 기본 스크롤 동작을 막을 수 있다.

      if (isScrolling.current) return; // 스크롤 중이면 함수 실행 중지

      console.log(event.deltaY);
      const direction = event.deltaY > 0 ? 1 : -1; // 위/아래중 어디로 이동하는지 판단
      const newIndex = currentSectionIndex.current + direction;

      if (newIndex >= 0 && newIndex < sectionsRef.current.length) {
        currentSectionIndex.current = newIndex; // currentSectionIndex를 ref의 current로 업데이트
        scrollToSection(currentSectionIndex.current);

        isScrolling.current = true; // 스크롤 잠금 시작

        // 0.8초 후 스크롤 잠금 해제
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    },
    [scrollToSection]
  );

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 : 마우스 휠 사용 시 함수 실행
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="h-screen">
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="h-screen bg-blue-500 flex items-center justify-center pt-24"
      >
        <h1 className="text-white text-4xl">First Screen</h1>
      </section>
      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="h-screen bg-green-500 flex items-center justify-center pt-24"
      >
        <h1 className="text-white text-4xl">Second Screen</h1>
      </section>
      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="h-screen bg-red-500 flex items-center justify-center pt-24"
      >
        <h1 className="text-white text-4xl">Third Screen</h1>
      </section>
      <section
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        className="h-screen bg-yellow-500 flex items-center justify-center pt-24"
      >
        <h1 className="text-white text-4xl">Fourth Screen</h1>
      </section>
    </div>
  );
}
