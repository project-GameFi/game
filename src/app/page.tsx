// 'use client';

import dynamic from "next/dynamic";
const GameContainer = dynamic(() => import('@/components/GameContainer'), { ssr: false });


export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center ">

      <GameContainer />

    </main >
  );
}
