"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};

export default function CatPage() {
  

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  // 初期データ取得
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };

  return (
    <div className="page">
      <Link href="/hello">hello画面へ</Link>
      <button className="button" onClick={handleClick}>他のにゃんこも見る</button>
      <div className="frame">
        {loading ? (
          <p>Loading...</p>
        ) : (
          imageUrl && <img src={imageUrl} alt="ランダムな猫の画像" />
        )}
      </div>
    </div>
  );
}