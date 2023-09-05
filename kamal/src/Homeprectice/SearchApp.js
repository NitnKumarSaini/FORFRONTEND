import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function SearchApp() {
const [value , setvalue]= useState();
const [input , setInput]= useState("india")

const handleinput = useRef(null)

useEffect(()=>{

  api()

},[input])

async function api(){
     const news = await axios.get(`https://newsapi.org/v2/everything?q=${input}&from=2023-08-21&sortBy=publishedAt&apiKey=c6ffa1933bbb4f0eabe9134ccfeebad3`);
     return setvalue(news.data.articals);

}

async function handleclick(e){
setInput(handleinput.current.value)


}


  return (
    <>
    <input ref={handleinput} type="text" />
    <input type='button' onClick={handleclick}>Search</input>
    {
value.map((li)=>{




})


    }
    
    
    
    </>
  )
}

export default SearchApp