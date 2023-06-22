import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Home() {
const router = useRouter();
const [data, setData] =useState([]);

  return (
    <div className="containter">
      <h1>Hello</h1>

    <style jsx>{`
    .container {
        display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
    }
    
    `}</style>
    </div>
  );
}