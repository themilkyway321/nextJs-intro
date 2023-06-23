import MetaHead from "@/components/MetaHead";
import NavBar from "@/components/NavBar";

export default function About() {
  return (<>
    <MetaHead metaTitle="About New York Times" />
      <div className="containter">
         <div  className="big-title">
          <h1>About Us</h1>
          </div>
          <p>Welcome to the official explorer for The New York Times Best Seller list explorer. We hope you enjoy your stay!</p>
    </div>
  </>);
}