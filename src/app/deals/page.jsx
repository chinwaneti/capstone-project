"use client"
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useState } from "react";

export let CartExport;

const products = [
  {
    cca3: 'benue',
    id: 1,
    name: "Fruit Combo Basket",
    image: "https://media.istockphoto.com/id/1473867574/photo/online-buying-and-delivery-red-shopping-basket-with-fresh-food.jpg?s=612x612&w=0&k=20&c=1k2OwkB47ZA3n3D-u_kx2yeo61vvtzMjt0MwvEkLzZA=",
    price: 50,
    cart: <AiOutlineShoppingCart />,
    icon: <GrFavorite size={20} style={{ color: "" }} />,
  },
  {
    cca3: 'ogun',
    id: 2,
    name: "Vegetable Combo Basket",
    image: "https://media.istockphoto.com/id/186697750/photo/shopping-basket-with-food.jpg?s=612x612&w=0&k=20&c=dj6-B3jISW3p3V2OhH7MaFIz9v0qCBZvD4a6PzGrBR4=",
    price: 200,
    cart: <AiOutlineShoppingCart />,
    icon: <GrFavorite size={20} style={{ color: "" }} />,
  },
  {
    cca3: '',
    id: 3,
    name: "Drink Deals",
    image: "https://media.istockphoto.com/id/525814788/photo/orange-crate-with-glass-soda-bottles.jpg?s=612x612&w=0&k=20&c=-9goeqttZNjUxQF-Ga2CrxoKOJnOoM1HaZOqKtcVapY=",
    price: 100,
    cart: <AiOutlineShoppingCart />,
    icon: <GrFavorite size={20} style={{ color: "" }} />,
  },
  {
    cca3: 'yola',
    id: 4,
    name: "Cleaning Stuff Combo",
    image: "https://media.istockphoto.com/id/1486313161/photo/banner-natural-medicine-organic-cosmetics-cosmetic-product-research-organic-skin-care.jpg?s=612x612&w=0&k=20&c=ZxZFUei3Qfqo5QY4wbIH0Xy5lYtaAE_DK-R60tbThvs=",
    price: 100,
    cart: <AiOutlineShoppingCart />,
    icon: <GrFavorite size={20} style={{ color: "" }} />,
  },
  {
    cca3: 'adama',
    id: 5,
    name: "Bread and Drink Combo",
    image: "https://media.istockphoto.com/id/75406440/photo/food-in-a-shopping-basket.jpg?s=612x612&w=0&k=20&c=L0-oR5eegFavHFUq88I2NFY8y_7zdZEUJOd7VYnmaVU=",
    price: 100,
    cart: <AiOutlineShoppingCart />,
    icon: <GrFavorite size={20} style={{ color: "" }} />,
  },
  {
    cca3: 'abia',
    id: 6,
    name: "Baked Foods Combo Basket",
    image: "https://media.istockphoto.com/id/1141610112/photo/macaroons-basket.jpg?s=612x612&w=0&k=20&c=Pm7FDHAYWvYu2chNqA8Z2sHaIEqViuWzkH8oGa0QEHg=",
    price: 40,
    cart: <AiOutlineShoppingCart />,
    icon: <GrFavorite size={20} style={{ color: "" }} />,
  },
];

CartExport = products.slice();

export default function Page() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCartHandler = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotalPrice((prevTotal) => prevTotal + item.price * 1);
    console.log(item.name);
    console.log(item.price);
    console.log("Total Price:", totalPrice);
  };

  const data = products.map((product) => (
    <section key={product.name} className="rounded-lg bg-gray-100 p-5 shadow-black">
      <div className="ml-[90%]">{product.icon}</div>
      <div>
        <Image
          src={product.image}
          alt="newPic"
          width={200}
          height={200}
          title={`Grab AWOOF ${product.name}`}
          className="hover:shadow-xl hover:shadow-black"
        />
      </div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div className="" onClick={() => addToCartHandler(product)}>
        {product.cart}
      </div>
    </section>
  ));

  return (
    <div className="bg-grey-50">
      <div>
      </div>
      <div className="flex md:space-x-60 space-x-32">
        <Link href="/">
          <IoIosArrowBack size={30} className=" md:ml-5 mb-4" />
        </Link>
        <h2 className="font-bold">Combo Deals</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">{data}</div>
    </div>
  );
}
