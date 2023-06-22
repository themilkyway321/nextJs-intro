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
              <div className="booklist">
                <h4 className="title">{v.display_name}</h4>
              </div>
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
      position: relative;
     width: 300px;
      text-align: center;
      /* overflow:hidden; */
    }
    .booklist{
      background: url(/box.svg) no-repeat top left;
      background-size:cover;
      position: absolute;
      height: 100px;
    /* height: 150px; */
      top: 50%;
      
      border: 1px solid red;
     /* position: absolute; */
     /* top:50%; */
     /* lef///t: 20%; */
     /* left:5/0%; */
     transform: translateY(-50%);                                                                   
     /* font-size:5rem; */
     /* color: white; */
     /* z-index: 2; */
     /* text-align: center; */
}


 



    .title {
     padding: 20px;
     padding-right:50px;
      font-size:20px;
      /* width: 200px; */
      /* height: 100px; */
      text-align: center;
     
      
    }
    `}</style>
    
    </>
  );
}