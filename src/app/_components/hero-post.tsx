"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  coverImage: string;
  slug: string;
};

export function HeroPost({ title, coverImage, slug }: Props) {
  const [fontSize, setFontSize] = useState(56); // 초기 font-size를 vw로 설정
  const [isReady, setIsReady] = useState(false); // 폰트 계산 완료 여부
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const container = titleRef.current?.parentElement;
      const titleElement = titleRef.current;

      if (container && titleElement) {
        let newFontSize = fontSize;

        // 폰트 사이즈 줄이기 로직
        while (
          titleElement.scrollHeight > container.clientHeight && // 텍스트가 컨테이너를 넘으면
          newFontSize > 1 // 최소 폰트 크기 제한
        ) {
          newFontSize -= 1; // 폰트 크기 1씩 감소
          titleElement.style.fontSize = `${newFontSize}vw`;
        }

        setFontSize(newFontSize); // 최종 폰트 크기 저장
        setIsReady(true); // 계산 완료 상태로 설정
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize); // 화면 크기 변경 시 폰트 크기 재조정
    return () => window.removeEventListener("resize", adjustFontSize);
  }, [fontSize]);

  return (
    <Link href={`/posts/${slug}`}>
      <div className="flex items-center w-full h-full relative">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="object-cover"
          fill
        />

        <h3
          ref={titleRef}
          className={`font-black leading-[0.92] mix-blend-difference text-orange-600 break-keep absolute inset-0 flex items-center justify-center  ${
            isReady ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
          style={{
            fontSize: `${fontSize}vw`,
            letterSpacing: `calc(-${fontSize}vw*0.01)`,
          }}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
