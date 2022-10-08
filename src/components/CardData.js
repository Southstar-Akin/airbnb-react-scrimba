import image1 from '../images/image-12.png'
import wedpic from '../images/wedding-photography.png'
import bike from '../images/mountain-bike.png'
const pic = [image1, wedpic, bike]


const CardsList = [
  {
    id: 0,
    image: pic[0], 
    status: "",
    price: 136,
    desc: "Life lessons with Katie Zaferes",
    rating: 5.0, 
    num: 30, 
    country: "USA",
    openspots: 2,
    location: "online"
  },

  {
    image: pic[1], 
    status: "",
    price: 125,
    desc: "Learn wedding photography",
    rating: 5.0, 
    num: 30, 
    country: "USA",
    id: 1,
    openspots: 1,
    location: "online"
  },

  {
    image: pic[2], 
    status: "",
    price: 50,
    desc: "Group Mountain Biking",
    rating: 4.8, 
    num: 2, 
    country: "USA",
    id: 2,
    openspots: 12,
    location: "inperson"
  },

  {
    image: pic[0], 
    status: "",
    price: 136,
    desc: "Life lessons with Katie Zaferes",
    rating: 5.0, 
    num: 30, 
    country: "USA",
    id: 3,
    openspots: 0,
    location: "online"
  },

  {
    image: pic[1], 
    status: "",
    price: 125,
    desc: "Learn wedding photography",
    rating: 5.0, 
    num: 30, 
    country: "USA",
    id: 4,
    openspots: 3,
    location: "inperson"
  },
  
] 

export default CardsList

{    
  // image: pic[1], 
  // status: 2,
  // price: 125,
  // desc: "Learn wedding photography",
  // rating: 5.0, 
  // num: 30, 
  // country: "USA"
}