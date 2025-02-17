import { ProductType } from "@/types/ProductType";
import Productimage from "./Productimage";

type ProductProps = {
  product: ProductType;
};
export default function Product({ product }: ProductProps) {
  return (
    <div className="flex flex-col shadow-lg h-96 bg-slate-800 text-gray-300 p-5">
      <div className="relative max-h-72 flex-1">
        <Productimage product={product} fill />
      </div>
      <div className="flex justify-between my-3">{product.title}</div>
      <button className="rounded-md text-white px-3.5 py-2.5 bg-teal-600 text-sm text-center">
        Adiconar ao carrinho
      </button>
    </div>
  );
}
