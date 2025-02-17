"use client";
import { useState } from "react";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};
export default function Productimage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);
  return fill ? (
    <Image
      src={product.image}
      alt={product.title}
      fill
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl  grayscale"
          : "scale-100 blur-0  grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      alt={product.title}
      width={400}
      height={700}
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl  grayscale"
          : "scale-100 blur-0  grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
