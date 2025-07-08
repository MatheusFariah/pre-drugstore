"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen border-r bg-gray-100 p-4">
      <nav className="flex flex-col gap-4 text-gray-800 font-medium">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/users">Usuário</Link>
        <Link href="/dashboard/settings">Configurações</Link>
      </nav>
    </aside>
  );
}
