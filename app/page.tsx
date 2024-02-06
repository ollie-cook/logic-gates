import ANDGate from "./components/ANDGate";
import Network from "@/app/utils/constants/Network";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <ANDGate transistorWidth={128} network={Network} />
    </main>
  );
}
