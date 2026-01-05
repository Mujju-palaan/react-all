// app/Providers.tsx
"use client"; // 👈 Important — because Redux uses hooks (client-side only)

import { Provider } from "react-redux";
import store  from "../store";

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}