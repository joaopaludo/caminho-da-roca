"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Star } from "lucide-react";

// This would typically come from an API or database
const product = {
  id: 1,
  name: "Wireless Noise-Cancelling Headphones",
  price: 299.99,
  description:
    "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancelling technology, these headphones provide an immersive listening experience whether you're commuting, working, or relaxing at home.",
  features: [
    "Active noise cancellation",
    "40-hour battery life",
    "Comfortable over-ear design",
    "Bluetooth 5.0 connectivity",
    "Built-in microphone for calls",
  ],
  specs: [
    "Weight: 250g",
    "Drivers: 40mm",
    "Frequency response: 20Hz - 20kHz",
    "Impedance: 32 ohms",
    "Sensitivity: 110 dB/mW",
  ],
  reviews: [
    { id: 1, rating: 5, comment: "Best headphones I've ever owned!" },
    { id: 2, rating: 4, comment: "Great sound quality, but a bit pricey." },
    { id: 3, rating: 5, comment: "The noise cancellation is phenomenal." },
  ],
};

export default function SingleProductView() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Image
            src="/placeholder.svg"
            alt={product.name}
            width={500}
            height={500}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src="/placeholder.svg"
                alt={`${product.name} thumbnail ${i}`}
                width={100}
                height={100}
                className="h-24 w-24 cursor-pointer rounded-md shadow ring-primary hover:ring-2"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-500">(4.8 out of 5 stars)</span>
          </div>
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-md border">
              <Button variant="ghost" size="icon" onClick={decrementQuantity}>
                -
              </Button>
              <span className="px-4">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={incrementQuantity}>
                +
              </Button>
            </div>
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Tabs defaultValue="features" className="mt-12">
        <TabsList>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="features">
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc space-y-2 pl-5">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specs">
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc space-y-2 pl-5">
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardContent className="pt-6">
              {product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="mb-4 border-b pb-4 last:border-b-0"
                >
                  <div className="mb-2 flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
