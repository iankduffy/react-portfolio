import InstagramImage from '../components/instagram-photo'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import instagramData from '../data/instragram-data'

const InstagramContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/.netlify/functions/helloworld`)
      setData(res)
    }

    fetchData()
  }, []);
  // console.log(instagramData)

  return (
    <div className="container--fluid u-mar-t-md container__row">
      { data ? data.map((post) => <InstagramImage post={post}/>) : "" }
    </div>
  )
}
  
export default InstagramContainer;