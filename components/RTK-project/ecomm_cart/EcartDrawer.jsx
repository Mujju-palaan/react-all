"use client";
import React from "react";
import { Button, Drawer, Box } from "@mui/material";
import Ecart_SideBar from "./Ecart_SideBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const drawerWidth = 370;

export default function EcartDrawer() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const EcommCarts = useSelector((state) => state.EcommCarts.EcommCarts);
  const totalItems = EcommCarts.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div>
      <Box sx={{ display: "flex", cursor: "pointer" }}>
        <div className="relative text-2xl cursor-pointer">
          <button className="cursor-pointer" onClick={handleDrawerOpen}>
            <AiOutlineShoppingCart />
          </button>

          {/* Cart Count Badge */}
          <span
            className="
                absolute -top-2 -right-2
                flex items-center justify-center
                h-4 w-4
                rounded-full
                bg-red-600
                text-xs font-bold text-white
              "
          >
            {totalItems}
          </span>
        </div>

        <Drawer
          variant="persistent"
          anchor="right"
          open={open}
          // sx={{
          //   width: drawerWidth,
          //   "& .MuiDrawer-paper": {
          //     width: drawerWidth,
          //   },
          // }}
        >
          <div className="flex justify-between p-2 border-b shadow-xl w-95">
            <div><h1 className="text-xl font-semibold">Shopping Cart</h1></div>
            <div className="justify-end text-end">
              <Button onClick={handleDrawerClose}>❌</Button>
            </div>
          </div>

          <Ecart_SideBar />
        </Drawer>
      </Box>
    </div>
  );
}
