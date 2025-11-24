import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ICommon } from "@types";
import clsx from "clsx";

interface IProps {
  labelE?: React.ReactNode;
  options?: ICommon.IOption[];
  classOption?: string;
  classActiveOption?: string;
  classHighlight?: string;
  onChange: (ot: ICommon.IOption) => void;
  selected?: ICommon.IOption;
}

export default function Dropdown({
  labelE = "Options",
  options = [
    { id: 0, label: "option 1", value: "value 1" },
    { id: 1, label: "option 2", value: "value 2" }
  ],
  classOption,
  classActiveOption = "text-red-500",
  classHighlight = "text-black",
  onChange,
  selected
}: IProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        {String(labelE) ? (
          <div className="flex items-center gap-3">
            {labelE}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        ) : (
          labelE
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right shadow-lg ring-1 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option.id}>
                {({ active: isHighlight }) => (
                  <div
                    onClick={() => onChange(option)}
                    className={clsx(
                      isHighlight && classHighlight,
                      "cursor-pointer",
                      classOption,
                      selected?.id === option.id && classActiveOption
                    )}
                  >
                    {option.label}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
