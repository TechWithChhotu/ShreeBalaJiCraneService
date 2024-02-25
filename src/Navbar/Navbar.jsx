import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { GrMap } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const navigation = [
  {
    name: "Get Quote",
    href: "/contact",
    current: true,
    Icon: <RiContactsFill />,
  },
  {
    name: "Call Now",
    href: "tel:9540869087",
    current: false,
    Icon: <IoIosCall />,
  },
  {
    name: "Get Direction",
    href: "https://www.google.co.in/maps/search/Shared+route+From+(25.1991424,85.5214962)+to+SHREE+BALAJI+CRANE+SERVICE,+D.T.O,+OFFICE+KE+PURAB,+NH+20,+HANUMAAN+NAGAR,+Bihar+Sharif,+Bihar+803101+via+Gas+Godown+Rd./@25.1887177,85.5067011,17z?entry=ttu",
    current: false,
    Icon: <GrMap />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow sticky  z-[9999] top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-blue-500 max-sm:absolute right-0 text-2xl rounded-md px-3 py-2 font-medium uppercase max-sm:text-lg ">
                    <Link to={"/"}>Shree Balaji Crane Service</Link>
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to={navigation[0].href}
                      className={classNames(
                        "text-blue-400 text-lg rounded-md px-3 py-2 font-medium flex gap-2 items-center"
                      )}
                      aria-current={navigation[0].current ? "page" : undefined}
                    >
                      {navigation[0].Icon}
                      {navigation[0].name}
                    </Link>

                    <Link
                      to={navigation[1].href}
                      className={classNames(
                        "text-blue-400 text-lg rounded-md px-3 py-2 font-medium flex gap-2 items-center"
                      )}
                      aria-current={navigation[1].current ? "page" : undefined}
                    >
                      {navigation[1].Icon}
                      {navigation[1].name}
                    </Link>

                    <Link
                      to="https://www.google.co.in/maps/search/Shared+route+From+(25.1991424,85.5214962)+to+SHREE+BALAJI+CRANE+SERVICE,+D.T.O,+OFFICE+KE+PURAB,+NH+20,+HANUMAAN+NAGAR,+Bihar+Sharif,+Bihar+803101+via+Gas+Godown+Rd./@25.1887177,85.5067011,17z?entry=ttu"
                      className={classNames(
                        "text-blue-400 text-lg rounded-md px-3 py-2 font-medium flex gap-2 items-center"
                      )}
                      aria-current={navigation.current ? "page" : undefined}
                    >
                      {navigation[2].Icon}
                      {navigation[2].name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
