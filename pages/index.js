import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import MetaHead from "@/components/MetaHead";

export default function Home({results}) {
const router = useRouter();
const onClick = (name, encodeName) => {
  router.push({
    pathname: `/list/${encodeName}`,
    query: { title:name },
    })
}
const [books, setBooks] =useState([]);
useEffect(()=>{
  (async()=>{
    const {results} = await (await fetch(`https://books-api.nomadcoders.workers.dev/lists`)).json();
    setBooks(results);
  })()
},[])

  return (
   <>
       <MetaHead metaTitle="New York Times Best Seller" />
      <div className="containter">
      <div  className="big-title">  <h1>The New York Times Best Seller Explorer</h1></div>
      {!books && <h4 className="loading">Loading...</h4>}
          {books?.map((v)=>(
            <div className="box">
               <span className="box-span"></span>
                <span className="box-span"></span>
                <span className="box-span"></span>
                <div className="title" >
                  <Link 
                  key={v.list_name} 
                  href={`/list/${v.list_name_encoded}`} 
                  onClick={()=>onClick(v.list_name, v.list_name_encoded)}>
                    {v.display_name} <span className="arrow">→</span></Link>
                  </div>
                </div>
          ))}
    </div>
    <style jsx global>{`

    .box{
      max-width:500px;
      height: 125px;
      padding-right:20px;
      position: relative;
      overflow:hidden;
      margin:10px;
      &:hover > .box-span {
        border: 1px solid royalblue;
      }
    }
   .box-span{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 60% 30% 65% 35% / 40% 35% 55% 60%;

    }
   
    .box span:nth-child(1){
      transform:rotateX(30deg)
    }
    .box span:nth-child(2){
      transform:rotateY(90deg))
    }
    .box span:nth-child(3){
      transform:rotateX(130deg)
    }
  
    .title a {
      font-size:18px;
      font-weight:bold;
      display: inline-block;
      /* position: absolute; */
      transform: translate(10px, 20px);
      padding: 30px 40px 20px 20px;
      transition: 0.5s;
      &:active >.arrow{
        transform: translateX(10px);
      }
      &:hover >.arrow {
        transform: translateX(10px);
      }
    }
    
  

    `}</style>
    </>
  );
}