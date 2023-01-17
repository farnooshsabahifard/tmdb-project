import { useEffect, useState } from "react"
import { api } from "../../utiles/api"
import textDots from "../../utiles/text"
import renTitle from "../../utiles/rendetTitle"
import { Style } from "./style"

export default function MovieList (props) {
    const {byType , title ,byTime} = props
    const [movie , setMovie] = useState([])
     async function getApi() {
        const response = await api.get(`/trending/${byType}/${byTime}`, {
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
    
    function renderImage (poster_path , profile_path ) {
        if(byType==="person") {
            return `https://image.tmdb.org/t/p/w500${profile_path}`
        }else {
            return `https://image.tmdb.org/t/p/w500${poster_path}`
        }
    }

   function renderFarm (){
    return movie.map((item )=>{
        const {poster_path ,vote_count,vote_average ,overview ,profile_path} = item
        return <li className="list" key={item.id}>
            <img className="poster" src={renderImage(poster_path , profile_path )} />
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
            <h1 className="main-title"> {title}</h1>
                <ul className="movie-list">{renderFarm()}</ul>
            
            </Style>
            )
}