import React from "react";
import Image from "next/image";
import data from "../demo_data/header.json";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { DropdownMenu } from "./DropdownMenu";

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
          {data.map((item) =>
            item.products ? (
              <DropdownMenu
                key={item.id}
                title={item.title}
                url={item.url || "/"}
                products={item.products}
              />
            ) : (
              <li
                key={item.id}
                className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-600 transition-all duration-300"
              >
                <Link href={item.url || "/"}>{item.title}</Link>
              </li>
            )
          )}
        </ul>

        <div className="ml-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
