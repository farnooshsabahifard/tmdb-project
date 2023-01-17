import { useEffect, useState } from "react"
import { api } from "../../utiles/api"
import textDots from "../../utiles/text"
import renTitle from "../../utiles/rendetTitle"
import { Style } from "../../style/globalStyle"

export default function All () {
    const [movie , setMovie] = useState([])
     async function getApi() {
        const response = await api.get("/trending/all/week", {
            params:{
                 api_key:"f37eb1e5c885b9a492659f52dd92b99e"
            }
        })
        setMovie(response.data.results)
    }
    // function renderTitle(item) {
    //     if (item.hasOwnProperty("original_title")) {
    //         return item.original_title;
    //     }else return item.original_name
    // }
    // {renTitle(item)}

   function renderFarm (){
    return movie.map((item , i)=>{
        const {poster_path ,vote_count,vote_average ,overview} = item
        return <li className="list" key={i}>
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            <p className="title">{textDots(renTitle(item) , 15)}</p>
            <p className="vote-count">vote count:{vote_count}</p>
            <p className="vote-average">vote average:{vote_average}</p>
            <p className="description">des: {textDots(overview , 10)}</p>
            
        </li>
    })
   }

    useEffect(()=>{
        getApi()
    } , [])

    return (
        <Style>
            <h1 className="main-title"> trending ALL</h1>
                <ul className="info">{renderFarm()}</ul>
            
            </Style>
            )
}