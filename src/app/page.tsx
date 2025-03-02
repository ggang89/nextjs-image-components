import Image from "next/image";
import vercel from "../../public/vercel.png";

export default function Home() {
  return (
    <div>
      <h2 className="text-center text-2xl">외부에서 가져온 이미지</h2>
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

      <h2 className="text-center text-2xl">내부 폴더 이미지 불러오기</h2>
      <Image src={vercel} alt="Vercel Logo" width={400} height={200} />

      {/* 외부에서 불러오는 이미지는 사이즈 모를 경우 */}
      {/* 이미지에 fill 속성 지정하고, div로 감싸서 style에 크기 지정해주면 오류 안남. */}
      <div
        style={{
          position: "relative",
          width: 200,
          height: 150,
        }}
      >
        <Image
          src="https://placehold.co/800x600/png"
          alt="random "
          fill
          style={{
            // 비율 모를 경우, 어느 정도 보정됨
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
