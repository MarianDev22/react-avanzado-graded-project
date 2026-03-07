import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-sm">
      <Link
        href="/"
        className="text-2xl font-extrabold text-teal-700 tracking-tight"
      >
        Market<span className="text-teal-500">Ads</span>
      </Link>

      <div className="flex items-center gap-8 font-medium text-slate-600">
        <Link href="/" className="hover:text-teal-600 transition-colors">
          Inicio
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-teal-600 transition-colors"
        >
          Mis Anuncios
        </Link>

        <Link
          href="/login"
          className="bg-rose-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-rose-600 transition-all shadow-md active:scale-95"
        >
          Entrar
        </Link>
      </div>
    </nav>
  );
};
