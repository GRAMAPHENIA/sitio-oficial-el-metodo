import { useForm as useReactHookForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormValues } from "../utils/validation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function 
useContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit: handleReactHookSubmit,
    formState: { errors },
    reset,
  } = useReactHookForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/meojdnnl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Correo enviado",
          description: "Tu mensaje ha sido enviado con éxito.",
          // status: "success",
        });
        reset(); // Limpiar formulario
      } else {
        const result = await response.json();
        toast({
          title: "Error",
          description: result.error || "Hubo un problema al enviar el correo.",
          // status: "error",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el correo.",
        // status: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    register,
    handleReactHookSubmit,
    errors,
    onSubmit,
    submitting,
  };
}
