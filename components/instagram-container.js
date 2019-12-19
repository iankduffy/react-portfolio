import InstagramImage from '../components/instagram-photo'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import instagramData from '../data/instragram-data'

const InstagramContainer = () => {
  const [data, setData] = useState([])
  // console.log(JSON.parse(JSON.stringify(instagramData)))
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/.netlify/functions/helloworld`)
      // const res = axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=$1906409028.b570245.7f5a7328e69b495d80ea715740b84c8e&fields=id,caption,media_type,media_url,permalink&count=4`)
      let newData = JSON.parse(JSON.stringify(res))
      setData(newData.data)
      console.log(data)
    }

    fetchData()
  }, []);
  // console.log(instagramData)

  return (
    <div className="container--fluid u-mar-t-md container__row">
      { data.forEach((post) => {<InstagramImage post={post}/>}) }
    </div>
  )
}
  
export default InstagramContainer;