"use client";

import { CustomFilterProps } from "@/types";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = () => {};

  return (
    <div className=" w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className=" relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className=" block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              className="ml-4 object-contain"
              width={20}
              height={20}
              alt="chevron"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-emerald-400 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
