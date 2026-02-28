import ClientPage from "./ClientPage"
import axios from "axios"
import React from "react"

export const API = "https://69a1c45f2e82ee536fa22b00.mockapi.io/product/";

export async function generateStaticParams() {
    try {
        const res = await axios.get(API)
        const products =  res.data
        return products.map((product) => ({id: String(product.id)}))
    } catch (error) {
        console.log("Failed to generate static params:", error.message)
        return []
    }
}

export default function Page() {
  return <ClientPage />;
}