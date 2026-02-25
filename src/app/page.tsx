import dynamic from "next/dynamic";

const ABRedirect = dynamic(() => import("@/components/ABRedirect"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F8F8]">
      <p className="font-pretendard text-gray-500">이동 중...</p>
    </div>
  ),
});

export default function Home() {
  return <ABRedirect />;
}
