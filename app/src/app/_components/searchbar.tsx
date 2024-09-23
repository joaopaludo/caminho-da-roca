"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-4 pb-4">
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-800" />
        <Input
          className="pl-8"
          placeholder="Buscar produtos..."
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(searchTerm);

              if (searchTerm.trim().length === 0) {
                return;
              }

              e.preventDefault();
              window.location.href = `/buscar/${searchTerm}`;
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
