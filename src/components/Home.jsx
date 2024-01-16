import React, { useEffect, useState} from 'react'
import './Home.scss'
import { IoMdPlay } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import axios from 'axios'
import {BiPlay} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'

const imgUrl = "https://image.tmdb.org/t/p/original"

const Row = ({title,arr})=>{
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div>
              {arr.map((item)=>(
                <Card key={item.id} img = {`${imgUrl}/${item.poster_path}`}/>
              ))}
                
            </div>
        </div>
    )
}

const Card = ({img})=>{
    return (
        <div className='card'>
            <img src={img} alt="image" />
        </div>
    )
}

const url = 'https://api.themoviedb.org/3/movie'
const api_key="5ca1cc0b91d08521e542a4a219f4a31e";
const famous = 'popular'
const upcoming = 'upcoming'
const topRated = 'top_rated'
const nowPlaying = 'now_playing'

const Home = () => {

    const [popular,setPopular] = useState([])
    const [next,setNext] = useState([])
    const [highRated,setHighRated] = useState([])
    const [playing,setPlaying] = useState([])

    useEffect(()=>{
        
        const fetchPopular = async ()=>{
            const {data} = await axios.get(`${url}/${famous}?api_key=${api_key}`)
            setPopular(data.results)
        } 
        const fetchUpcoming = async()=>{
            const {data} = await axios.get(`${url}/${upcoming}?api_key=${api_key}`)
            setNext(data.results)
        }
        const fetchHighRated = async()=>{
            const {data} = await axios.get(`${url}/${topRated}?api_key=${api_key}`)
            setHighRated(data.results)
        }
        const fetchNowPlaying = async()=>{
            const {data} = await axios.get(`${url}/${nowPlaying}?api_key=${api_key}`)
            setPlaying(data.results)
        }
        fetchNowPlaying()
        fetchHighRated()
        fetchPopular()
        fetchUpcoming()
    },)

  return (
    <>
    <section className='home'> 
        <div className='banner'
        style={{
            // popular[0] ? `url(${`${imgUrl}/${popular[0].poster_path}`})` :
            backgroundImage:  popular[0] ? `url(${`${imgUrl}/${popular[0].poster_path}`})` : `url(https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png')` }}
        >
            <h1>{popular[0] ? popular[0].original_title : ""}</h1>
            <p>{popular[0] ? popular[0].overview : ""}</p>
            <div className='icons'>
                <button>Play<BiPlay /></button>
                <button>My Lists <AiOutlinePlus /></button>
            </div>
            
        </div>
    </section>

    <Row title = {"Popular"} arr={popular}/>
    <Row title = {"Upcoming"} arr={next} />
    <Row title = {"Top Rated"} arr={highRated} />
    <Row title = {"Now Playing"} arr={playing} />
    </>
  )
}

export default Home
