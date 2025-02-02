import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(1, "El mensaje es requerido"),
});

export type FormValues = z.infer<typeof schema>;
