import NavBar from "@/components/NavBar";
export default function App({Component, pageProps}){
  return(
    <div>
      <NavBar />
      <Component {...pageProps} />
     <span>hello</span>
     
     <style jsx global>{`
          a{
            color:yellow;
          }
      `}
      </style>
    </div>
  )
}