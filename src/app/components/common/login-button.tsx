"use client";

import Link from "next/link";
import { MenuItem, Box } from "@mui/material";
import { LogIn } from "lucide-react";

export default function LoginButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/auth/login" style={{ textDecoration: "none" }}>
      <MenuItem
        onClick={onClick}
        sx={{
          border: "1px solid #10b981",
          color: "#10b981",
          fontWeight: 600,
          borderRadius: 2,
          px: 3,
          py: 1.5,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s ease",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            background: "#10b981",
            color: "#ffffff",
            border: "1px solid transparent",
          },
        }}
      >
        {/* texto */}
        <span
          className="login-text"
          style={{
            transition: "opacity 0.4s ease",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          Log in
        </span>

        {/* ícone */}
        <Box
          className="login-icon"
          sx={{
            position: "absolute",
            left: "calc(45% - 40px)",
            transition: "all 0.4s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LogIn size={18} />
        </Box>

        {/* animação */}
        <style jsx global>{`
          .MuiMenuItem-root:hover .login-text {
            opacity: 0;
          }
          .MuiMenuItem-root:hover .login-icon {
            left: 50% !important;
            transform: translateX(-50%) scale(1.2);
          }
        `}</style>
      </MenuItem>
    </Link>
  );
}
