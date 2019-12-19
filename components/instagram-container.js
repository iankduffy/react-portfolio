import InstagramImage from '../components/instagram-photo'
import { useState, useEffect } from 'react'
import axios from 'axios'
import instagramData from '../data/instragram-data'

const InstagramContainer = () => {
  const [data, setData] = useState([])
  // console.log(JSON.parse(JSON.stringify(instagramData)))
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`/.netlify/functions/helloworld`)
      .then(data => {
        let newData = JSON.parse(JSON.stringify(data))
        setData([newData.data])
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
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