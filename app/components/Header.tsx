import React from "react";
import Image from "next/image";
import data from "../demo_data/header.json";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="flex px-8 justify-between h-20 items-center border-b dark:border-gray-800">
      <div className="hidden md:block md:w-1/3">
        <Image
          src="/"
          alt="Site logo"
          sizes="100vw"
          height={0}
          width={0}
          priority={true}
        />
      </div>

      <nav className="w-full md:w-2/3 flex justify-between items-center">
        <ul className="flex gap-x-8 text-2xl">
          {data.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group"
            >
              <Link href={item.url || "/"}>{item.title}</Link>
              {item.products && (
                <ul className="absolute w-40 bg-white dark:bg-gray-800 shadow-md rounded p-2 mt-2 z-10 hidden group-hover:block">
                  {item.products.map((product, index) => (
                    <li key={index} className="text-lg py-1">
                      <Link
                        href={product.url}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="ml-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
