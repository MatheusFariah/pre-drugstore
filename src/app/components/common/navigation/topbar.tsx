"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Divider,
  Typography,
  Box,
  ListItemIcon,
  Badge,
} from "@mui/material";
import { User, Info, HelpCircle, Phone, X } from "lucide-react";
import LoginButton from "../login-button";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // simulação de usuário NÃO logado
  const user = {
    name: "John Doe",
    email: "john@example.com",
    logged: false,
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-end py-2 px-4 md:px-10">
        <IconButton onClick={handleClick}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Box
                sx={{
                  backgroundColor: user.logged ? "#16a34a" : "#dc2626",
                  borderRadius: "50%",
                  width: 12,
                  height: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={8} color="white" />
              </Box>
            }
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#e5e7eb",
              }}
            >
              <User size={20} color="#6b7280" />
            </Avatar>
          </Badge>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 6,
            sx: {
              borderRadius: 4,
              mt: 1,
              px: 1,
              py: 1,
              minWidth: 240,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {/* HEADER */}
          {user.logged && (
            <Box px={2} py={1}>
              <Typography variant="subtitle1" fontWeight={600}>
                {user.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ wordBreak: "break-all" }}
              >
                {user.email}
              </Typography>
            </Box>
          )}

          <Divider sx={{ my: 1 }} />

          {/* MENU ITEMS */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <User size={18} />
            </ListItemIcon>
            <Link href="/profile" className="w-full block">
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Info size={18} />
            </ListItemIcon>
            <Link href="/about" className="w-full block">
              About
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HelpCircle size={18} />
            </ListItemIcon>
            <Link href="/help" className="w-full block">
              Help
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Phone size={18} />
            </ListItemIcon>
            <Link href="/contact" className="w-full block">
              Contact
            </Link>
          </MenuItem>

          <Divider sx={{ my: 1 }} />

          <LoginButton onClick={handleClose} />
        </Menu>
      </div>
    </header>
  );
}
