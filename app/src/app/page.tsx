import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Category, Product } from "@/lib/types";
import CategorySlider from "./_components/category-slider";
import Link from "next/link";

export default async function Component() {
  const categories: Category[] = await fetch(
    "http://localhost:3001/categoria"
  ).then((res) => res.json());

  console.log(categories);

  const featuredProducts: Product[] = await fetch(
    "http://localhost:3001/produto?disponibilidade=true&limit=4"
  ).then((res) => res.json());
  console.log(featuredProducts);

  return (
    <div className="flex h-screen flex-col bg-neutral-100 text-gray-800">
      <main className="flex-1 overflow-auto">
        <section className="p-4">
          <h2 className="mb-2 text-lg font-semibold">Categories</h2>
          <ScrollArea className="-mx-4 w-screen whitespace-nowrap rounded-md">
            <div className="-mx-4 flex w-max space-x-4 px-6 py-4">
              {categories.map((category) => (
                <Link href={`/categoria/${category.id}`} key={category.id}>
                  <Button
                    key={category.nome}
                    variant="default"
                    className="flex-shrink-0"
                  >
                    {category.nome}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </section>
        <section className="p-4">
          <h2 className="mb-2 text-lg font-semibold">Produtos em destaque</h2>
          <div className="grid grid-cols-2 gap-4">
            {featuredProducts.map((product) => (
              <Link href={`/produto/${product.id}`} key={product.id}>
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg bg-white shadow"
                >
                  <img
                    alt={product.descricao}
                    className="h-48 w-full object-cover"
                    height="200"
                    src={product.imagem}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{product.descricao}</h3>
                    <p className="text-sm text-gray-800">
                      {product.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {categories.map((category) => (
          <CategorySlider
            key={category.id}
            idCategoria={category.id}
            nomeCategoria={category.nome}
          />
        ))}
      </main>
    </div>
  );
}
