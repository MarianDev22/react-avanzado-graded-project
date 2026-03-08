"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type AdOrder = "asc" | "desc";

interface SearchBarProps {
  initialQuery: string;
  initialOrder: AdOrder;
  initialPrice: number;
}

const SearchBar = ({
  initialQuery,
  initialOrder,
  initialPrice,
}: SearchBarProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery);
  const [maxPrice, setMaxPrice] = useState<number | string>(initialPrice || "");
  const [order, setOrder] = useState(initialOrder);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    if (maxPrice !== "" && Number(maxPrice) > 0) {
      params.set("maxPrice", String(maxPrice));
    } else {
      params.delete("maxPrice");
    }

    if (order) {
      params.set("order", order);
    } else {
      params.delete("order");
    }

    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`);
  }

  function handleClick() {
    setQuery("");
    setMaxPrice("");
    setOrder("asc");
    router.replace(pathname);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 p-4 rounded-xl mb-8 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">
            Buscar
          </label>
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">
            Precio Max ($)
          </label>
          <input
            type="number"
            value={maxPrice === 0 ? "" : maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">
            Orden
          </label>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value as AdOrder)}
            className="border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 outline-none bg-white"
          >
            <option value="desc">Más nuevos</option>
            <option value="asc">Más antiguos</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-teal-600 text-white p-2 rounded-lg font-bold hover:bg-teal-700 transition-colors"
          >
            Filtrar
          </button>
          <button
            type="reset"
            onClick={handleClick}
            className="px-4 border border-slate-300 rounded-lg hover:bg-slate-50"
          >
            Borrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
