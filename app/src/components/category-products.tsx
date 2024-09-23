'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { SearchIcon, ShoppingBagIcon, FilterIcon, ChevronLeft } from "lucide-react"

// This would typically come from an API or database
const products = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, rating: 4.5 },
  { id: 2, name: "Bluetooth Speaker", price: 59.99, rating: 4.2 },
  { id: 3, name: "Smartwatch", price: 199.99, rating: 4.7 },
  { id: 4, name: "Noise-Cancelling Headphones", price: 249.99, rating: 4.8 },
  { id: 5, name: "Portable Charger", price: 39.99, rating: 4.4 },
  { id: 6, name: "Wireless Mouse", price: 29.99, rating: 4.3 },
  { id: 7, name: "Bluetooth Keyboard", price: 49.99, rating: 4.1 },
  { id: 8, name: "Tablet", price: 299.99, rating: 4.6 },
]

const sortOptions = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Highest Rated' },
]

export function CategoryProductsComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState('price-asc')
  const [priceRange, setPriceRange] = useState([0, 300])

  const filteredAndSortedProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating-desc':
          return b.rating - a.rating
        default:
          return 0
      }
    })

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#" className="flex items-center text-xl font-bold">
            <ChevronLeft className="h-6 w-6 mr-2" />
            Electronics
          </Link>
          <Button size="icon" variant="ghost">
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="pl-8"
                placeholder="Search products..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="font-semibold mb-2">Price Range</h2>
                <Slider
                  min={0}
                  max={300}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAndSortedProducts.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4">
                    <img
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                      height="200"
                      src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(product.name)}`}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">Rating: {product.rating}/5</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}