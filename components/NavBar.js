import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
const router = useRouter();
  return (
    <nav>
      {/* <img src="/box.svg" /> */}
        <div className="nav-box">
          <Link  href="/">Home</Link>
          <img className="line" src ="/line.svg" />
        </div>
      <div className="nav-box">
        <Link href="/about">About</Link>
        <img  className="line" src ="/line.svg" />
      </div>
      <style jsx global>{`
      nav {
       display: flex;
       padding: 10px 20px;
       margin: 5px 10px 0 10px;
       justify-content:space-between;
       border:1px solid #000;
       border-radius: 15% 15% 10% 10%;
      }
      .nav-box a {
        font-size:40px;
        color:black;
        text-decoration:none;
        transition:0.2s;
      }
      .nav-box {
        margin:0 20px;
        display:flex;
        flex-direction:column;
        text-align:center;
      }
      .line {
        width:120px;
        transition:0.2s;
      }
      .nav-box:hover a{
        color: #e74c3c;
      }
      .nav-box:hover .line {
        filter: invert(36%) sepia(25%) saturate(4484%) hue-rotate(340deg) brightness(97%) contrast(86%);
      }
      
      `}</style>
    </nav>
  );
}