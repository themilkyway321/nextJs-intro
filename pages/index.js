import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Home({results}) {
const router = useRouter();
const [books, setBooks] =useState([]);
useEffect(()=>{
  (async()=>{
    const {results} = await (await fetch(`https://books-api.nomadcoders.workers.dev/lists`)).json();
    setBooks(results);
  })()
},[])

  return (
   <>
      <h1>The New York Times Best Seller Explorer</h1>
      <div className="containter">
          {books?.map((v)=>(
            <div className="box">
                <h4 className="title">{v.display_name}</h4>
                
              <img className="book-img" src="box.svg" />
              
            </div>
          ))}
    </div>
    <style jsx>{`
       .containter {
        position: relative;
        border: 1px solid red;
        display: flex;
        flex-wrap:wrap;
        align-content:flex-start;
        width: 1000px;
        gap:40px;
        padding:20px;
       }
    .box{
      border: 1px solid yellow;
      height: 100px;
      line-height:100px;
      position: relative;
      padding-left:10px;
      padding-right:30px;
      margin:10px 30px;
      /* line-height:100px */
      /* max-width:300px; */
    }
    .book-img{
      
      position: absolute;
      top: 0;
      left:0;
      width: inherit;
      height: inherit;
      object-fit: cover;
      object-position:left;
      
      
      border: 1px solid red;
      
      /* width:inherit; */
      /* height: inherit; */
    }
   
    



    `}</style>
    
    </>
  );
}