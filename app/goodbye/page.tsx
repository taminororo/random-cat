'use client'  //Next.jsの仕様
import React, { useState } from 'react';
import Button from '../../component/Button'; // Buttonコンポーネントをインポート


export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>      
          <p>You clicked {count} times</p>      
          <Button onClick={() => setCount(count + 1)}>
            Click me
          </Button> 
        </div>
      </main>
    </div>
  );
}
