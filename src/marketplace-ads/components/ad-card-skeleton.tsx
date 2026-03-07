export const AdCardSkeleton = () => {
  return (
    <article className="flex flex-col h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-pulse">
      {/*Nombre del producto*/}
      <div className="h-6 w-2/3 bg-slate-200 rounded-md mb-4"></div>
      {/*Descripción del producto*/}
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full bg-slate-100 rounded"></div>
        <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
      </div>
      {/*Precio del producto*/}
      <div className="h-5 w-16 bg-slate-200 rounded-md mt-auto"></div>
    </article>
  );
};
