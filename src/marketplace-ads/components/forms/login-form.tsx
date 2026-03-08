"use client";

import { useActionState, useState } from "react";
import { loginAction } from "@/app/login/actions";
import { initialLoginState } from "@/app/login/types";

type LoginFormProps = {
  from: string;
};

export default function LoginForm({ from }: LoginFormProps) {
  const [state, formAction] = useActionState(loginAction, initialLoginState);
  const [password, setPassword] = useState("");
  const safeState = state ?? initialLoginState;

  function getInputClassName(hasError: boolean) {
    return [
      "w-full rounded-md border px-3 py-2 text-sm transition-colors outline-none",
      "bg-white dark:bg-zinc-900",
      hasError
        ? "border-red-500 focus:ring-2 focus:ring-red-500"
        : "border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500",
    ].join(" ");
  }

  return (
    <form
      action={formAction}
      className="space-y-5 w-full max-w-md mx-auto p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-slate-100 dark:border-zinc-800"
    >
      {/* <input type="hidden" name="from" value={from} /> */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Bienvenido de nuevo
        </h2>
        <p className="text-sm text-slate-500">
          Introduce tus credenciales para acceder
        </p>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={safeState.values?.email}
          placeholder="tu@email.com"
          className={getInputClassName(Boolean(safeState.errors.email?.length))}
        />
        {safeState.errors.email?.[0] ? (
          <p className="text-xs text-red-500 mt-1">
            {safeState.errors.email[0]}
          </p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-700 dark:text-zinc-300"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          className={getInputClassName(
            Boolean(safeState.errors.password?.length),
          )}
        />
        {safeState.errors.password?.[0] ? (
          <p className="text-xs text-red-500 mt-1">
            {state.errors.password[0]}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Iniciar sersión
      </button>

      {safeState.message ? (
        <div className="p-3 rounded bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
          <p className="text-sm text-red-600 dark:text-red-400 text-center font-medium">
            {safeState.message}
          </p>
        </div>
      ) : null}
    </form>
  );
}
