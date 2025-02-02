"use client";

import { useContactForm } from "@/hooks/useContactForm";

export default function ResponsiveForm() {
  const { register, handleReactHookSubmit, errors, onSubmit, submitting } = useContactForm();

  return (
    <section
      id="contact-form"
      className="text-center bg-white dark:bg-stone-900 shadow-md rounded-lg p-8 lg:p-12 my-12 mx-auto max-w-3xl"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-stone-700 dark:text-stone-200 mb-6">
        Contacto
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Póngase en contacto con nosotros completando el formulario.
      </p>
      <form
        onSubmit={handleReactHookSubmit(onSubmit)}
        className="space-y-6"
      >
        <div>
          <input
            {...register("name")}
            placeholder="Nombre"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-400 dark:bg-stone-800 dark:text-white dark:border-stone-700"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Correo Electrónico"
            type="email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-400 dark:bg-stone-800 dark:text-white dark:border-stone-700"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register("message")}
            placeholder="Mensaje"
            rows={4}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-400 dark:bg-stone-800 dark:text-white dark:border-stone-700"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-orange-300 hover:bg-orange-400 text-white py-3 rounded-lg transition duration-150"
        >
          {submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}