import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* 외부에서 이미지 가져오기 */}
      {/* width, heigh 필수 지정 */}
      <Image
        alt="Next.js logo"
        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
        width={1200}
        height={400}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
