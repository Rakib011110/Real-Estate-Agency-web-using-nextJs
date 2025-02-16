"use client";
import { Button } from "@/components/ui/button";
import { counties } from "@/lib/data/CountryData";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export type CardItem = {
  name: string;
  image: string;
};

export type CountyData = {
  name: string;
  items: CardItem[];
};

const CountiesPage = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

  const handleToggle = (countyName: string) => {
    setExpanded((prev) => ({ ...prev, [countyName]: !prev[countyName] }));
  };
  const handleSearchChange = (countyName: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [countyName]: value }));
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        {counties.map((county: CountyData) => {
          const isExpanded = expanded[county.name] || false;
          const searchTerm = searchTerms[county.name] || "";

          // Filter items based on search
          const filteredItems = county.items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          return (
            <div key={county.name} className="border-b mb-6 pb-4">
              {/* County Title & Actions */}
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{county.name}</h2>
                <div className="flex items-center space-x-2">
                  {/* Show search only if there are items */}
                  {county.items.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                          value={searchTerm}
                          onChange={(e) =>
                            handleSearchChange(county.name, e.target.value)
                          }
                        />
                        <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  )}

                  {/* Expand/Collapse Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggle(county.name)}>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Cards (Visible if expanded) */}
              {isExpanded && (
                <>
                  {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                      {filteredItems.map((item) => (
                        <div
                          key={item.name}
                          className="border border-gray-200 rounded-md shadow-sm p-2">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={200}
                            className="object-cover w-full h-auto rounded"
                          />
                          <p className="mt-2 text-sm font-medium">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 text-gray-500">No results found.</p>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountiesPage;
