"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  url: string;
};

type DropdownMenuProps = {
  title: string;
  url: string;
  products?: Product[];
};

export const DropdownMenu = ({ title, url, products }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <li
      className="cursor-pointer relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parent menu item */}
      <Link
        href={url || "/"}
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
      >
        {title}
      </Link>

      {/* Submenu */}
      {products && isOpen && (
        <ul
          className="absolute w-48 bg-white dark:bg-gray-800 shadow-md rounded p-1 mt-2 z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {products.map((product) => (
            <li key={product.id} className="text-lg">
              <Link
                href={product.url}
                className="block w-full px-2 py-1 rounded text-foreground dark:text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
