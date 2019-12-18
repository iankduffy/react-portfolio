import InstagramImage from '../components/instagram-photo'
import {useState} from 'react'
import axios from 'axios'

const FullWidthLink = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const data = await axios.get(`/.netlify/functions/helloworld`)
  
    setData(data)
  }
  
  fetchData()

  return (
    <div className="container--fluid u-mar-t-md container__row">
      {Array(4).fill(<InstagramImage/>)}
    </div>
  )
}
  
export default FullWidthLink;