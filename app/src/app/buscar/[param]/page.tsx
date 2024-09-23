import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Product } from "@/lib/types";
import Link from "next/link";

export default async function CategoryProducts(props: {
  params: { param: string };
}) {
  const products: Product[] = await fetch(
    `http://localhost:3001/produto?descricao_like=${props.params.param}`
  ).then((res) => res.json());

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <Link href="/">
            <div className="container mx-auto flex items-center px-4 py-4">
              <ChevronLeft className="mr-2 h-6 w-6" />
              Busca - {decodeURI(props.params.param)}
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4">
                    <img
                      alt={product.nome}
                      className="mb-4 h-48 w-full rounded object-cover"
                      height="200"
                      src={product.imagem}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "contain",
                      }}
                      width="300"
                    />
                    <h2 className="text-lg font-semibold">
                      {product.descricao}
                    </h2>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-lg font-bold">
                        {product.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Adicionar ao carrinho</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
