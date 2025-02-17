/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { counties } from "@/lib/data/CountryData";
import {
  ChevronDown,
  ChevronRight,
  Filter,
  Search,
  ArrowUpDown,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons/faSquareArrowUpRight";

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
  const [showFilters, setShowFilters] = useState<Record<string, boolean>>({});

  const handleToggle = (countyName: string) => {
    setExpanded((prev) => ({ ...prev, [countyName]: !prev[countyName] }));
    setShowFilters((prev) => ({ ...prev, [countyName]: !prev[countyName] }));
  };

  const handleSearchChange = (countyName: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [countyName]: value }));
  };

  return (
    <div className="mx-auto max-w-7xl px-10 mt-20">
      {counties.map((county: CountyData) => {
        const isExpanded = expanded[county.name] || false;
        const displayFilters = showFilters[county.name] || false;
        const searchTerm = searchTerms[county.name] || "";

        const filteredItems = county.items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <div key={county.name} className="mb-6 pb-4">
            <div className="flex items-center flex-wrap justify-between">
              <h2 className="text-xl font-semibold">{county.name}</h2>

              <div className="flex items-center space-x-2">
                {isExpanded && (
                  <>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className=" border  border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        value={searchTerm}
                        onChange={(e) =>
                          handleSearchChange(county.name, e.target.value)
                        }
                      />
                      <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>

                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>

                    <Button variant="outline" size="sm">
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </>
                )}

                <Button
                  variant="default"
                  className="bg-slate-50 hover:bg-[#FF5A3C] text-black"
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

            {/* Cards Grid */}
            {isExpanded && (
              <>
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {filteredItems.map((item) => (
                      <div
                        key={item.name}
                        className="border bg-[#F3F3F3] p-4 rounded-xl border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={600}
                          height={400}
                          className="object-cover rounded-xl w-full h-[85%]"
                        />
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-lg font-bold">{item.name}</p>
                          <Button className="h-8 w-8 bg-slate-50 hover:bg-[#FF5A3C] text-black border border-gray-300 rounded-md">
                            <FontAwesomeIcon icon={faSquareArrowUpRight} />
                          </Button>
                        </div>
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
  );
};

export default CountiesPage;
