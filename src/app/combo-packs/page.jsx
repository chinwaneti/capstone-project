import Image from "next/image"
import Link from "next/link"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoIosArrowBack} from 'react-icons/io'
import { GrFavorite } from 'react-icons/gr'



const details = [
  {
    "id":   1,
    "name": "fruit Combo basket",
    "image": "https://media.istockphoto.com/id/1473867574/photo/online-buying-and-delivery-red-shopping-basket-with-fresh-food.jpg?s=612x612&w=0&k=20&c=1k2OwkB47ZA3n3D-u_kx2yeo61vvtzMjt0MwvEkLzZA=",
    "price": 50,
    'cart' : <Link href='/cart'><AiOutlineShoppingCart /></Link>,
    icon: <Link href='/wishlist'><GrFavorite size={20}  style={{color: ''}}/></Link>,


  }
  ,
  {
    "id":   2,
    "name": "Vegetable Combo Basket",
    "image": 'https://media.istockphoto.com/id/186697750/photo/shopping-basket-with-food.jpg?s=612x612&w=0&k=20&c=dj6-B3jISW3p3V2OhH7MaFIz9v0qCBZvD4a6PzGrBR4=',
    "price": 200,
    'cart' : <Link href='/cart'><AiOutlineShoppingCart /></Link>,
    icon: <Link href='/wishlist'><GrFavorite size={20}  style={{color: ''}}/></Link>,


    
  },
  {
    "id":   3,
    "name": " Drink Deals",
    "image": 'https://media.istockphoto.com/id/525814788/photo/orange-crate-with-glass-soda-bottles.jpg?s=612x612&w=0&k=20&c=-9goeqttZNjUxQF-Ga2CrxoKOJnOoM1HaZOqKtcVapY=',
    "price":  100,
    'cart' : <Link href='/cart'><AiOutlineShoppingCart /></Link>,
    icon: <Link href='/wishlist'><GrFavorite size={20}  style={{color: ''}}/></Link>,


    
  },
  {
    "id":   4,
    "name": " Cleaning Stuff Combo",
    "image": 'https://media.istockphoto.com/id/1486313161/photo/banner-natural-medicine-organic-cosmetics-cosmetic-product-research-organic-skin-care.jpg?s=612x612&w=0&k=20&c=ZxZFUei3Qfqo5QY4wbIH0Xy5lYtaAE_DK-R60tbThvs=',
    "price":  100,
    'cart' : <Link href='/cart'><AiOutlineShoppingCart /></Link>,
    icon: <Link href='/wishlist'><GrFavorite size={20}  style={{color: ''}}/></Link>,


    
  },
  {
    "id":   5,
    "name": "Bread and Drink Combo",
    "image": 'https://media.istockphoto.com/id/75406440/photo/food-in-a-shopping-basket.jpg?s=612x612&w=0&k=20&c=L0-oR5eegFavHFUq88I2NFY8y_7zdZEUJOd7VYnmaVU=',
    "price":  100,
    'cart' : <Link href='/cart'><AiOutlineShoppingCart /></Link>,
    icon: <Link href='/wishlist'><GrFavorite size={20}  style={{color: ''}}/></Link>,


    
  },
  {
    "id": 6,
    "name": "Baked Foods Combo Basket",
    "image": "https://media.istockphoto.com/id/1141610112/photo/macaroons-basket.jpg?s=612x612&w=0&k=20&c=Pm7FDHAYWvYu2chNqA8Z2sHaIEqViuWzkH8oGa0QEHg=",
    "price": 40,
    'cart' : <Link href='/cart'><AiOutlineShoppingCart /></Link>,
    icon: <Link href='/wishlist'><GrFavorite size={20}  style={{color: ''}}/></Link>,

    
  }]
 const data = details.map(detail=>(
    <section key={detail.id} className="rounded-lg bg-gray-100 p-5  shadow-black">
    <div className="ml-[90%]">{detail.icon}</div>
    <div><Image src={detail.image} alt="new" width={200} height={200} title={`Grab AWOOF ${detail.name}`} className="hover:shadow-xl hover:shadow-black "/></div>
    <div>{detail.name}</div>
    <div>{detail.price}</div>
    <div>{detail.cart}</div>
    </section>
 ))


export default function page() {
  return (
    <div className="bg-grey-50">
    <div className='flex space-x-60'>
    <Link href='/'><IoIosArrowBack size={30} className='bg-gray-100 ml-5 mb-4'/></Link>
    <h2 className='font-bold'>Combo Deals</h2>
    </div>
    <div className="grid grid-cols-2 gap-3"> {data}</div>
    </div>
  )
}
