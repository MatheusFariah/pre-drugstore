import Sidebar from "@/app/components/common/navigation/sidebar";
import Topbar from "@/app/components/common/navigation/topbar";
import Image from "next/image";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex flex-col flex-1 max-w-screen text-black relative">
        <Topbar />
        <main className="bg-gray-50 p-6 min-h-screen relative overflow-hidden">
          
          {/* Conteúdo do dashboard */}
          <h2 className="text-xl font-semibold mb-4 relative z-10">
            Dashboard do ApolloFarm
          </h2>
          <p className="relative z-10">
            Seus cards, métricas e tabelas vão aparecer aqui.
          </p>
        </main>
      </div>
    </div>
  );
}
