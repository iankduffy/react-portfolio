import InstagramImage from '../components/instagram-photo'
import {useState} from 'react'
import axios from 'axios'

const InstagramContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => fetchData(), []);

  const fetchData = async () => {
    const data = await axios.get(`/.netlify/functions/helloworld`)
    console.log(data)
    setData(data)
  }
  
  fetchData()

  return (
    <div className="container--fluid u-mar-t-md container__row">
      {Array(4).fill(<InstagramImage/>)}
    </div>
  )
}
  
export default InstagramContainer;