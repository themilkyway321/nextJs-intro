import MetaHead from "@/components/MetaHead";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Detail(){
  const router = useRouter();
  const [encodeName] = router.query.id || [];
  const name = router.query.title || "";
  const [rank,setRank] = useState([]);
  useEffect(()=>{
    (async()=>{
      const {results} = await( await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${encodeName}`)).json();
      setRank(results.books?.slice(0,10));
     
    })();
  },[]);
  const pathname = usePathname();
  // console.log(router);
  console.log(rank);
  console.log(encodeName);
  
  return (
    <>
  <section>
    <MetaHead metaTitle="Top 10 Best Sellers" />
   <div className="items-inner">
      <h2>{name}</h2>
      <div className="items">
      {!rank && <h4 className="loading">Loading...</h4>}
        {rank?.map((item)=>(
          <div className="item" key={item.rank}>
              <span>{item.rank}</span>
            <div className="item-box">
              <div className="photo">
                <img src={item.book_image} />
             </div>
              <div className="detail">
                <h2>{`${item.title}`.length> 21 ? `${item.title}`.slice(0,21) +"..." : `${item.title}`}</h2>
                <h3>{item.author}</h3>
                <Link href={`${item.amazon_product_url}`}>BUY NOW <span className="arrow">→</span></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
   </div>
  </section>
  <style jsx global>{`
  .items-inner {
  width: 1200px;
  margin: 50px auto;
}
.items-inner > h2 {
  text-align:center;
  font-size:25px;
  font-weight:bold;
  margin: 40px 0;
}
.items {
  display: flex;
  gap: 20px;
  flex-wrap:wrap;
  align-content:flex-start;
  
}
.item {
  width: 240px;
  height:450px;

  /* padding: 10px; */
  margin: 20px 10px;
}
.item > span {
  border-radius: 3px;
  background-color:crimson;
  color:#fff;
  font-size:20px;
  display: inline-block;
  width: 30px;
  height:30px;
  text-align:center;
  margin-bottom:1px;
}
.item-box {
  width: 100%;
  height:100%;
  overflow: hidden;
  padding-bottom:20px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  position: relative;
}
.photo{
  width: inherit;
  height:300px;
}
.photo img {
  width: 100%;
  height:100%;
}
.detail {
 margin-top:13px;
 padding-left:10px;
}
.detail > h3 {
  color: royalblue;
  margin:10px 0
}

.detail > a  {
  border: 1px solid #000;
  position: absolute;
  bottom: 10px;
  font-size:14px;
  padding: 2px 30px 2px 10px;
 
  border-radius: 10% 10% 13% 10%;
  &:active{
    border: 1px solid royalblue;
  }
  &:active >.arrow{
    transform: translateX(20px);
  }
  &:hover >.arrow {
    transform: translateX(20px);
  }
}


  `}
  </style>
  </>
  );
}