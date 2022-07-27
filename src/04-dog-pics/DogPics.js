import axios from "axios"
import { useState } from "react";

export default function DogPics () {

  const [imageUrl, setImageUrl] = useState("https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg");

  // API: https://dog.ceo/dog-api/
   const apiDogHandler = async() => {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    setImageUrl(res.data.message);

  }

  return (
    <div className='dog-pics'>
      <img src={imageUrl} />
      <button onClick={apiDogHandler}>🐶</button>
    </div>
  )
}
