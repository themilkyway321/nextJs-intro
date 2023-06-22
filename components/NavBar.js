import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
const router = useRouter();
  return (
    <nav>
      {/* <img src="/box.svg" /> */}
        <div>
          <Link  href="/">Home</Link>
          <img className="line" src ="/line.svg" />
        </div>
      <div>
        <Link href="/about">About</Link>
        <img src ="/line.svg" />
      </div>
      <style jsx global>{`
      nav {
       display: flex;
       justify-content:space-between;
       
      }
      nav div a {
        font-size:40px;
        color:black;
        text-decoration:none;
      }
      nav div {
        margin:0 20px;
        display:flex;
        flex-direction:column;
        text-align:center;
      }
      .line {
        width:120px
      }
      
      `}</style>
    </nav>
  );
}