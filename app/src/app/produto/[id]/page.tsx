import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/lib/types";

export default async function SingleProductView(props: {
  params: { id: string };
}) {
  const product: Product = await fetch(
    `http://localhost:3001/produto/${props.params.id}`
  ).then((res) => res.json());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Image
            src={product.imagem}
            alt={product.descricao}
            width={500}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.nome}</h1>
          <p className="text-2xl font-bold">
            {product.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="text-gray-600">{product.descricao}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-md border">
              <Button variant="ghost" size="icon">
                -
              </Button>
              <span className="px-4">0</span>
              <Button variant="ghost" size="icon">
                +
              </Button>
            </div>
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao carrinho
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
