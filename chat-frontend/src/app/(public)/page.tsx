import { cookies } from "next/headers";
import ChatLayout from "./page copy";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
      <div className="w-full h-full">
        {/* max-w-5xl */}
        <div className="z-10 border rounded-lg w-full h-full text-sm flex overflow-hidden">
          <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
        </div>
      </div>
    </main>
  );
}
