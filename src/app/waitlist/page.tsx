import WaitlistPageClient from "@/components/WaitlistPageClient";

export default function WaitlistPage({
  searchParams,
}: {
  searchParams: { success?: string; error?: string };
}) {
  const params = searchParams ?? {};
  return <WaitlistPageClient params={params} />;
}
