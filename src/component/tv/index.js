import { useEffect, useState } from "react"
import { api } from "../../utiles/api"
import textDots from "../../utiles/text"
import renTitle from "../../utiles/rendetTitle"
import { Style } from "../../style/globalStyle"
export default function Tv() {
    const[movie ,setMovie] = useState([])
    async function getApi() {
       const response = await api.get("/trending/tv/week" ,{
        params:{api_key:"f37eb1e5c885b9a492659f52dd92b99e"}
       })
       setMovie((await response).data.results)
    }
    function renderFarm() {
        return movie.map((item , i)=>{
            const {poster_path ,vote_count,vote_average ,overview} = item
            return <li className="list" key={i}>
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                        <p className="title">{textDots(renTitle(item) , 15)}</p>
                        <p className="vote-count">vote count:{vote_count}</p>
                        <p className="vote-average">vote average:{vote_average}</p>
                        <p className="description">des:{textDots(overview , 15)}</p>
                    </li>
        })
    }

    useEffect(()=>{
        getApi() 
    },[])

    return (<Style> <h1 className="main-title">trending TV </h1>
                <ul className="info">{renderFarm()}</ul>
            </Style>
            )
}