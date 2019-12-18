import InstagramImage from '../components/instagram-photo'
import {useState} from 'react'
import axios from 'axios'

const InstagramContainer = () => {

  console.log(data)
  return (
    <div className="container--fluid u-mar-t-md container__row">
      {Array(4).fill(<InstagramImage/>)}
    </div>
  )
}

InstagramContainer.getInitialProps = async ({ req }) => {
  const res = await axios.get(`/.netlify/functions/helloworld`)
  const json = await res.json()
  
  return { data: json }
}
  
export default InstagramContainer;