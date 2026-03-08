"use server";

import { loginSchema } from "@/schemas/login.schema";
import { LoginState } from "./types";
import z from "zod";
import { createSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/lib/users";

function getFieldErrorsFromTree(
  error: z.ZodError<z.infer<typeof loginSchema>>,
): Record<string, string[]> {
  const tree = z.treeifyError(error);
  const fieldErrors: Record<string, string[]> = {};

  for (const [fieldName, node] of Object.entries(tree.properties ?? {})) {
    if (node?.errors.length) {
      fieldErrors[fieldName] = node.errors;
    }
  }
  return fieldErrors;
}

//*
const hashPassword = (plainPassword: string) => {
  return plainPassword;
};

export const loginAction = async (
  _prevState: LoginState, formData: FormData
): Promise<LoginState> => {
  const emailInput = String(formData.get("email"));
  const passwordInput = String(formData.get("password"));

  const parsed = loginSchema.safeParse({
    email: emailInput,
    password: passwordInput,
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Revisa los campos marcados",
      errors: getFieldErrorsFromTree(parsed.error),
      values: { email: emailInput },
    };
  }

  const email = parsed.data.email.toLocaleLowerCase();

  const user = await getUserByEmail(email);

  if (!user) {
    return {
      success: false,
      message: "Tus credenciales son incorrectas",
      errors: {},
      values: { email: emailInput },
    };
  }

  const password = parsed.data.password;

  const passwordMatches = hashPassword(password);

  if (!passwordMatches) {
    return {
      success: false,
      message: "Credenciales incorrectas",
      errors: {},
      values: { email: emailInput },
    };
  }

  await createSession(user.id);
  redirect("/");
};
