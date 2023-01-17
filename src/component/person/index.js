import { useEffect, useState } from "react"
import { api } from "../../utiles/api"
import { Style } from "./style"
export default function Person() {
    const[movie , setMovie] = useState([])
    async function getApi() {
        const response = await api.get("/trending/person/week" , {
            params:{api_key:"f37eb1e5c885b9a492659f52dd92b99e"}
        })
        setMovie(response.data.results)
    }
    function renderFarm() {
       return movie.map(function(item , i) {
        const {original_name , profile_path , popularity} = item
        return <li className="list" key={i}>
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${profile_path}`}/>
            <p className="original_name">{original_name}</p>
            <p className="popularity">popularity:{popularity}</p>
        </li>

        })
    }
    useEffect(()=>{
        getApi()
    },[])

    return (
    <Style>
        <h1 className="main-title"> trending PERSON</h1>
            <ul className="info person">{renderFarm()}</ul>
    </Style>
    ) 
}