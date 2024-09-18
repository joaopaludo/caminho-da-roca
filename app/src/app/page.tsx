import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { SearchIcon, ShoppingBagIcon } from "lucide-react";

export default function Component() {
  const categories = [
    {
      name: "Electronics",
      products: ["Smartphone", "Laptop", "Headphones", "Smartwatch"],
    },
    { name: "Clothing", products: ["T-Shirt", "Jeans", "Dress", "Jacket"] },
    {
      name: "Books",
      products: ["Fiction", "Non-Fiction", "Biography", "Cookbook"],
    },
    {
      name: "Home & Garden",
      products: ["Plant Pot", "Cushion", "Lamp", "Rug"],
    },
    {
      name: "Toys",
      products: ["Board Game", "Action Figure", "Puzzle", "Stuffed Animal"],
    },
  ];

  return (
    <div className="flex h-screen flex-col bg-neutral-100 text-gray-800">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Caminho da Roça</h1>
          <Button size="icon" variant="ghost">
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="sr-only">Carrinho</span>
          </Button>
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-800" />
            <Input
              className="pl-8"
              placeholder="Search products..."
              type="search"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="p-4">
          <h2 className="mb-2 text-lg font-semibold">Categories</h2>
          <ScrollArea className="-mx-4 w-screen whitespace-nowrap rounded-md">
            <div className="-mx-4 flex w-max space-x-4 px-6 py-4">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="default"
                  className="flex-shrink-0"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </section>
        <section className="p-4">
          <h2 className="mb-2 text-lg font-semibold">Featured Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((product) => (
              <div
                key={product}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <img
                  alt={`Product ${product}`}
                  className="h-48 w-full object-cover"
                  height="200"
                  src={`/placeholder.svg?height=200&width=200`}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Product {product}</h3>
                  <p className="text-sm text-gray-800">$19.99</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {categories.map((category) => (
          <section key={category.name} className="p-4">
            <h2 className="mb-2 text-lg font-semibold">{category.name}</h2>
            <ScrollArea className="w-full whitespace-nowrap pb-4">
              <div className="flex space-x-4">
                {category.products.map((product) => (
                  <Card
                    key={product}
                    className="w-[150px] flex-shrink-0 snap-start snap-always"
                  >
                    <CardContent className="p-0">
                      <img
                        alt={product}
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
                        <h3 className="text-sm font-medium">{product}</h3>
                        <p className="text-xs text-gray-500">$19.99</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </section>
        ))}
      </main>
    </div>
  );
}
