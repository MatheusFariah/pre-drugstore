// app/components/common/navigation/footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div
        className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        © {new Date().getFullYear()} ApolloFarm. Todos os direitos reservados.
      </div>
    </footer>
  );
}
