import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/lib/types";
import Link from "next/link";

const CategorySlider = async (props: {
  idCategoria: number;
  nomeCategoria: string;
}) => {
  const products: Product[] = await fetch(
    `http://localhost:3001/produto?idCategoria_eq=${props.idCategoria}`
  ).then((res) => res.json());

  if (products.length === 0) {
    return null;
  }

  return (
    <section key={props.idCategoria} className="p-4">
      <h2 className="mb-2 text-lg font-semibold">{props.nomeCategoria}</h2>
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex space-x-4">
          {products.map((product) => (
            <Link href={`/produto/${product.id}`} key={product.id}>
              <Card className="w-[150px] flex-shrink-0 snap-start snap-always">
                <CardContent className="p-0">
                  <img
                    alt={product.descricao}
                    className="h-[100px] w-full rounded-t-lg object-cover"
                    height="100"
                    src={`/placeholder.svg?height=100&width=150`}
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <div className="p-2">
                    <h3 className="text-sm font-medium">{product.nome}</h3>
                    <p className="text-xs text-gray-500">
                      {product.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default CategorySlider;
