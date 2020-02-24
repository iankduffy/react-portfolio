import InstagramImage from '../components/instagram-photo'
import { useState, useEffect } from 'react'
import axios from 'axios'
import instagramData from '../data/instragram-data'

const InstagramContainer = () => {
  const [images, setImages] = useState()
  // console.log(JSON.parse(JSON.stringify(instagramData)))
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`/api/instagram-images`)
      .then(res => {
        let data = JSON.parse(JSON.stringify(res))
        let images = data
        console.log(data, images)
        // setImages(images)
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
      { images !== undefined ? 
      images.map((image, i) => {
        return <InstagramImage image={image} key={i}/> }) 
     : ""}
    </div>
  )
}
  
export default InstagramContainer;