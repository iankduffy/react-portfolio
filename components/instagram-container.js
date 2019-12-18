import InstagramImage from '../components/instagram-photo'
import {useState,useEffect} from 'react'
import axios from 'axios'

const InstagramContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`/.netlify/functions/helloworld`)
      console.log(data)
      setData(data)
    }

    fetchData()
  }, []);

  return (
    <div className="container--fluid u-mar-t-md container__row">
      {data.map((post) => <InstagramImage post={post}/>)}
    </div>
  )
}
  
export default InstagramContainer;