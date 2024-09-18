'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { SearchIcon, ShoppingBagIcon } from "lucide-react"

export function Homepage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">ShopEase</h1>
          <Button size="icon" variant="ghost">
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input className="pl-8" placeholder="Search products..." type="search" />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="p-4">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {["Electronics", "Clothing", "Books", "Home & Garden", "Toys", "Sports", "Beauty"].map((category) => (
                <Button key={category} variant="outline" className="flex-shrink-0">
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
        <section className="p-4">
          <h2 className="text-lg font-semibold mb-2">Featured Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="bg-white rounded-lg shadow overflow-hidden">
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
                  <p className="text-sm text-gray-500">$19.99</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}