import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

export let newDetails
const father =[
  { 
    'cca3': "chi",
    "id":   1,
    "name": "Vegetables",
    image: "https://media.istockphoto.com/id/121111336/photo/variety-of-raw-vegetables-in-wicker-basket-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oKTl5iRYzNICMZ3rSplP-hjTvB7vqQ_0-n8bb-0Nj0w=",
    "price": 1.29,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Carrots", "image": "https://media.istockphoto.com/id/1283596872/photo/three-carrots-on-a-white-background.jpg?s=612x612&w=0&k=20&c=lQWtI0JcUR4UtWnNtkS82NAY749mYnSamMEWDuJsD0Y=", "price": 1.99},
      {"names": "Broccoli", "image": "https://media.istockphoto.com/id/519936451/photo/broccoli.jpg?s=612x612&w=0&k=20&c=Q68vuUnsTvot0Ffm0cP4IYMmh_VG7W90iU643OvVyNE=", "price": 2.49},
      {"names": "Lettuce", "image": "https://media.istockphoto.com/id/1400057550/photo/fresh-lettuce-isolated.jpg?s=612x612&w=0&k=20&c=XPX5EizLKRQxWXu2ujQd986W4cyqebiu8GNJWWLifRU=", "price": 3.99},
      {"names": "Tomatoes", "image": "https://media.istockphoto.com/id/1258142863/photo/tomatoes-isolate-on-white-background-tomato-half-isolated-tomatoes-side-view-whole-cut-slice.jpg?s=612x612&w=0&k=20&c=LXNZwfkHS3LfKvOxUpzFf1iawID63DVYEjeM7fMK-Xk=", "price": 1.49},
      {"names": "Bell peppers", "image": "https://media.istockphoto.com/id/153564958/photo/colorful-peppers.jpg?s=612x612&w=0&k=20&c=7Ce6whyOFcnTQi74emPSwAdaXEcdMQI1JVNjfeTRP-Y=", "price": 1.29},
      {"names": "Cucumber", "image": "https://media.istockphoto.com/id/967491012/photo/whole-with-slice-cucumber-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Kmeq5UlXegj7sQEGicTWbxqngB3j57JZBmOM-P_nTwU=", "price": 1.29}
    ]

  }
  ,
  {
    'cca3': "bone",
    "id":   2,
    "name": "Fruits",
    image: 'https://media.istockphoto.com/id/89481262/photo/miscellaneous-fruits-in-basket.jpg?s=612x612&w=0&k=20&c=No8vaP-juA-WkMjjQb1MX4Hyqk54HI1XUfIjiogMOmQ=',
    "price": 3.29,
    "cart": 'add to cart',
   'icon': <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
   "items": [
    {"names": "Apples", "image": "https://images.unsplash.com/photo-1477830530828-c849c4b9bf2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", "price": 2.99},
    {"names": "Bananas", "image": "https://images.unsplash.com/photo-1566393028639-d108a42c46a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80", "price": 1.49},
    {"names": "Oranges", "image": "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "price": 3.99},
    {"names": "Grapes", "image": "https://images.unsplash.com/photo-1615485925763-86786288908a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80", "price": 4.99},
    {"names": "Strawberries", "image": "https://images.unsplash.com/photo-1610725664338-2be2cb450798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80", "price": 2.99},
    {"names": "Strawberries", "image": "https://images.unsplash.com/photo-1610725664338-2be2cb450798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80", "price": 2.99}
  ]


    
  },
  {

    'cca3': "harp",
    "id": 3,
    "name": "Milk & Eggs",
    image: "https://media.istockphoto.com/id/526637971/photo/eggs-and-milk.jpg?s=612x612&w=0&k=20&c=B8KwUqTprOPl05_EA9nl3SPEz81WIGDqE-bvSc4iZvU=",
    "price": 1.25,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Milk", "image": "https://images.unsplash.com/photo-1651840480396-8fc0d537e376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "price": 2.99},
      {"names": "Eggs", "image": "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.99}
    ]

    
  },
  {
    'cca3': "deep",
    "id": 4,
    "name": "Cake",
    image: "https://media.istockphoto.com/id/182493976/photo/tuxedo-cake.jpg?s=612x612&w=0&k=20&c=SiQsJjgLpUL5KXg59vdyPsuhod3-3a-ORDtdMoKoz4A=",
    "price": 12.69,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Chocolate cake", "image": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 12.99},
      {"names": "Vanilla cake", "image": "https://images.unsplash.com/photo-1629389861081-43cc4f172b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "price": 10.99},
      {"names": "Cheesecake", "image": "https://images.unsplash.com/photo-1550597621-b0ca7da62231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 15.99},
      {"names": "Red velvet cake", "image": "https://images.unsplash.com/photo-1614707269211-474b2510b3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 14.99},
      {"names": "Carrot cake", "image": "https://images.unsplash.com/photo-1576618148332-a18871379090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm90JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 11.99}
    ]
  },
  
  {
    'cca3': "dip",
    "id": 5,
    "name": "Ice-Cream",
    image: "https://media.istockphoto.com/id/155415283/photo/an-array-of-four-types-of-ice-cream-scoops-in-a-glass-bowl.jpg?s=612x612&w=0&k=20&c=WYYDLrfWCba_1zHgCx9u5orvx9pKQJruK32SJrdKHqY=",
    "price": 3.69,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Vanilla", "image": "https://media.istockphoto.com/id/482538099/photo/ice-cream-ball.jpg?s=612x612&w=0&k=20&c=LLCKz7aSrZm2Ye9iJyyGYG27Pj2VJ1whBvY9xDvd2xQ=", "price": 4.99},
      {"names": "Chocolate", "image": "https://media.istockphoto.com/id/155419472/photo/chocolate-ice-cream.jpg?s=612x612&w=0&k=20&c=LOmh0fJbT3sNWVppPnPxJOtlAlPK4U64HU67fJ6QOR0=", "price": 4.99},
      {"names": "Strawberry", "image": "https://media.istockphoto.com/id/184094541/photo/raspberries-and-kiwi-dessert.jpg?s=612x612&w=0&k=20&c=OldCrjQWD8UmLrLtdRUPnm-QY_DhG0e36QSbfugQ_dg=", "price": 4.99},
      {"names": "Mint chocolate chip", "image": "https://media.istockphoto.com/id/140474543/photo/minty-treat.jpg?s=612x612&w=0&k=20&c=8rIxhKBPz4BRpPemLO_5F8MiCbLGSuKgtU-z4Oe84eg=", "price": 5.99},
      {"names": "Cookie dough", "image": "https://media.istockphoto.com/id/177403797/photo/scoops-frozen-yogurt-in-glass-bowl.jpg?s=612x612&w=0&k=20&c=Wle4pa-exAjKVd0uZXrHt7Eck_DhfNjSWK-3bolA_eU=", "price": 5.99}
    ]
  },
  {
    'cca3': "simp",
    "id": 5,
    "name": "Bakery",
    image: "https://media.istockphoto.com/id/1437209472/photo/sliced-wholemeal-bread-on-white-background-concept-of-healthy-food-balanced-breakfasts.jpg?s=612x612&w=0&k=20&c=Bkb3_H022chlVR7XUNkGvnEtnqOpJoNX9WJQLhEBV2o=",
    "price": 1.69,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Bread", "image": "https://images.unsplash.com/photo-1592029780368-c1fff15bcfd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpY2VkJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 3.99},
      {"names": "Bagels", "image": "https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJhZ2Vsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.99},
      {"names": "Croissants", "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 2.49},
      {"names": "Muffins", "image": "https://images.unsplash.com/photo-1585665187093-a3511c2fe57a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.49},
      {"names": "Pies", "image": "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 8.99}
    ]
  },
  {
    'cca3': "deck",
    "id": 6,
    "name": "Drinks",
    image: "https://media.istockphoto.com/id/522579945/photo/smoothie-day-time-for-healthy-drink.jpg?s=612x612&w=0&k=20&c=Sy5L5dAuWzJXZIgX1MAq-S6YdU9ApUAoTAes36m06v8=",
    "price": 1.69,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Water", "image": "https://media.istockphoto.com/id/836357552/photo/plastic-water-bottle-isolated.jpg?s=612x612&w=0&k=20&c=GKxfFlQmGQNfeay-XvExt8tJkCvXuuzBvXcshdraAD0=", "price": 0.99},
      {"names": "Juice", "image": "https://media.istockphoto.com/id/171114622/photo/glass-of-orange-juice-and-three-oranges-over-white-backdrop.jpg?s=612x612&w=0&k=20&c=R9tzhhF-wYAYm7FoVzabI1iCs9_jMopXM38j6P9HhP8=", "price": 2.49},
      {"names": "Soda", "image": "https://media.istockphoto.com/id/1050232244/photo/drink-cans-clipping-path.jpg?s=612x612&w=0&k=20&c=S5PqP-z1EPWYGXqogK7faXrSe34GsMXdNhqXrnNpEck=", "price": 1.49},
      {"names": "Tea", "image": "https://media.istockphoto.com/id/1415162224/photo/cup-of-aromatic-green-tea-with-fresh-mint-on-white-background.jpg?s=612x612&w=0&k=20&c=ejjnFX0sZsFm_xkyPBic5ux0Q6i9uhOjDUhmxYfMIVs=", "price": 1.99},
      {"names": "Coffee", "image": "https://media.istockphoto.com/id/1414822951/photo/coffee-cup.jpg?s=612x612&w=0&k=20&c=82sioRIeyACbMNTn5MOUTvYsoGdWl1RSu5QjiS6JKzY=", "price": 2.99},
      {"names": "Beer", "image": "https://media.istockphoto.com/id/525814720/photo/red-crates-with-glass-soda-bottles.jpg?s=612x612&w=0&k=20&c=PJr7xewtO2h-cPQ5Ak-AnX1KzZmDozMBSzROU9G6q-M=", "price": 2.99}
    ]
  },
  {
    'cca3': "door",
    "id": 7,
    "name": "Cheese",
    "image": "https://media.istockphoto.com/id/1398444925/photo/cheese-sauce-splashing-in-the-air-with-cheddar-cheese.jpg?s=612x612&w=0&k=20&c=aXkLVToe_eycQnjeYgMRygGFa0zP8Wcz90oM8ArwlG4=",
    "price": 4.69,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Water", "image": "https://media.istockphoto.com/id/836357552/photo/plastic-water-bottle-isolated.jpg?s=612x612&w=0&k=20&c=GKxfFlQmGQNfeay-XvExt8tJkCvXuuzBvXcshdraAD0=", "price": 0.99},
      {"names": "Juice", "image": "https://media.istockphoto.com/id/836357552/photo/plastic-water-bottle-isolated.jpg?s=612x612&w=0&k=20&c=GKxfFlQmGQNfeay-XvExt8tJkCvXuuzBvXcshdraAD0=", "price": 2.49},
      {"names": "Soda", "image": "https://media.istockphoto.com/id/1163365003/photo/gin-tonic.jpg?s=612x612&w=0&k=20&c=-9NNFt0zKxKaxMKE2C12b0xK014QSnEkCyoNgz5mqhU=", "price": 1.49},
      {"names": "Tea", "image": "https://media.istockphoto.com/id/1415162224/photo/cup-of-aromatic-green-tea-with-fresh-mint-on-white-background.jpg?s=612x612&w=0&k=20&c=ejjnFX0sZsFm_xkyPBic5ux0Q6i9uhOjDUhmxYfMIVs=", "price": 1.99},
      {"names": "Coffee", "image": "https://media.istockphoto.com/id/1414822951/photo/coffee-cup.jpg?s=612x612&w=0&k=20&c=82sioRIeyACbMNTn5MOUTvYsoGdWl1RSu5QjiS6JKzY=", "price": 2.99}
    ]
  },
  {
    'cca3': "joy",
    "id": 8,
    "name": "Cleaning Stuff",
    "image": "https://media.istockphoto.com/id/1413593078/photo/fabric-softener-bottes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=QCxoYpcZfyZT-f11HZ31QK_nKPbcuxOMlDCPci35_pQ=",
    "price": 1.59,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "All-purpose cleaner", "image": "https://media.istockphoto.com/id/686519468/photo/close-up-cleaning-brush-and-sponge.jpg?s=612x612&w=0&k=20&c=KDEmuY4dPN4G_S67wrq2UsxV8ivHorvxdbTRSf_bYmc=", "price": 3.99},
      {"names": "Dish soap", "image": "https://media.istockphoto.com/id/1263658480/photo/two-pieces-of-yellow-laundry-soap-in-transparent-plastic-packet-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=88YuL2V9fSZbL6o7kf74Tr6tnUCnGqdQPaqg9ADgzZQ=", "price": 2.49},
      {"names": "Laundry detergent", "image": "https://media.istockphoto.com/id/831888222/photo/laundry-detergent-bottle-on-white-background.jpg?s=612x612&w=0&k=20&c=Nh5ATkn7Mm0Rsz2NXtuB_WdATnK-Cpc9wYniyL8d_yw=", "price": 5.99},
      {"names": "Window cleaner", "image": "https://media.istockphoto.com/id/136183542/photo/hand-with-window-cleaning-tool.jpg?s=612x612&w=0&k=20&c=S1Uiau--gId-5tKkvKxgbySukardQ8eatFaQW8Juudc=", "price": 2.99},
      {"names": "Bathroom cleaner", "image": "https://media.istockphoto.com/id/1197919502/photo/dishwashing-sponge-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=B_nAANlhTHvhPQWbXjKf2MENU3epyTECSXQ3MTrVvyo=", "price": 3.49},
      {"names": "Disinfectant", "image": "https://media.istockphoto.com/id/184276973/photo/window-cleaner.jpg?s=612x612&w=0&k=20&c=ArolY5PRf23m4-LgDU6XtjQBRhXTT3nyyZc9kM4WS_w=", "price": 3.49}
    ]
    
  },
  {
    'cca3': "sad",
    "id": 9,
    "name": "Biscuit",
    "image": "https://media.istockphoto.com/id/174478330/photo/chocolate-chip-cookies-on-white.jpg?s=612x612&w=0&k=20&c=-apKhDbxkGwascdPauh9rI7IW0mcQpFEFtcFMtPGXlI=",
    "price": 1.99,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Digestive", "image": "https://media.istockphoto.com/id/653833138/photo/chocolate-digestive-biscuit.jpg?s=612x612&w=0&k=20&c=vB8ETD8Eo5bfoWiCTTlIIuPIjMUBs5PL3DvDf8FUWMQ=", "price": 2.99},
      {"names": "Oreo", "image": "https://media.istockphoto.com/id/1428448569/photo/chocolate-cookies-with-cream.jpg?s=612x612&w=0&k=20&c=uY-G06AIHfqM3kx6btYLL4IKeM_vBIoW9j6BLCLbSuQ=", "price": 1.99},
      {"names": "Shortbread", "image": "https://media.istockphoto.com/id/1351867298/photo/breton-puck.jpg?s=612x612&w=0&k=20&c=f1yMAFYruKmYmMlWTAZ4Fp7zrWy2KtpjyYshUoSSIxA=", "price": 3.49},
      {"names": "Gingerbread", "image": "https://media.istockphoto.com/id/1350501390/photo/gingerbread-tied-with-a-christmas-bow.jpg?s=612x612&w=0&k=20&c=NGlV00OUHtfIhSHvrxJ5H4C_93i4MkPJiMc9cVwQ1yg=", "price": 2.49},
      {"names": "Chocolate Chip", "image": "https://media.istockphoto.com/id/511503841/photo/chocolate-cookies.jpg?s=612x612&w=0&k=20&c=0LOsgeCz1WO83PPcw5I7TQhOYB8sUi9Y_s4DifAAEpY=", "price": 2.99},
      {"names": "lemon cookie", "image": "https://media.istockphoto.com/id/653833138/photo/chocolate-digestive-biscuit.jpg?s=612x612&w=0&k=20&c=vB8ETD8Eo5bfoWiCTTlIIuPIjMUBs5PL3DvDf8FUWMQ=", "price": 2.99},
    ]
  },
  {
    'cca3': "fool",
    "id": 10,
    "name": "Snacks",
    "image": "https://media.istockphoto.com/id/465150194/photo/meat-balls.jpg?s=612x612&w=0&k=20&c=9vCA9BtGfLRZHuKLkMAYB5rFX7VpfXfgKMYx0Du1ajU=",
    "price": 7.29,
    "cart": 'add to cart',
    icon: <Link href=''><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Chips", "image": "https://media.istockphoto.com/id/184637581/photo/potato-crisps.jpg?s=612x612&w=0&k=20&c=U_WXOgtGwUAr_fJJlVWFTi0d_v-FSJeV76flPdPs4k0=", "price": 2.99},
      {"names": "Pretzels", "image": "https://media.istockphoto.com/id/115984173/photo/soft-pretzel-on-white.jpg?s=612x612&w=0&k=20&c=VVY9b7300SAxKqsaNz1v_k0QnD_navkt0866QG90K64=", "price": 1.99},
      {"names": "Popcorn", "image": "https://media.istockphoto.com/id/483913153/photo/bowl-of-popcorn-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=InFy7uZc6f40eazIz6NDzUx8CVtmYlTyAVlPYXbixCA=", "price": 3.49},
      {"names": "Nuts", "image": "https://media.istockphoto.com/id/1297267207/photo/walnut-kernel-in-a-glass-plate-on-a-white-background-isolated.jpg?s=612x612&w=0&k=20&c=UTZMeYTsU9NqXK0UYqtbV3tOI5MNddvezDYdT67TQCc=", "price": 4.99},
      {"names": "Crackers", "image": "https://media.istockphoto.com/id/530650939/photo/cheese-crackers.jpg?s=612x612&w=0&k=20&c=ZvOscahW3VWQEsETOZYZczfb2ReYrQ5UJlBTZcyAezQ=", "price": 2.49}
    ]
  },
  {
    'cca3': "fools",
    "id": 11,
    "name": "Grain",
    "image": "https://media.istockphoto.com/id/1398378288/photo/breakfast-cereal-with-milk-and-berries.jpg?s=612x612&w=0&k=20&c=-2TeL3IkiWbGeRWu-v_8kP_kArz3HPQD-QdUNXwwBFw=",
    "price": 8.29,
    "cart": 'add to cart',
    icon: <Link href='/wishlist'><AiOutlineHeart  size={20}  style={{color: 'green'}}/></Link>,
    "items": [
      {"names": "Rice", "image": "https://media.istockphoto.com/id/860931464/photo/rice-in-a-bowl-on-a-white-background.jpg?s=612x612&w=0&k=20&c=UZXMVCopJgmfcSzgAs14yVxUJ8MaNIPVdWDkjXzRL6o=", "price": 3.99},
      {"names": "Pasta", "image": "https://media.istockphoto.com/id/184120573/photo/spaghetti-with-pesto-sauce.jpg?s=612x612&w=0&k=20&c=stj854S-i-VAU09RXsGdYZjYyTriqGEPdR66REEUjsE=", "price": 2.49},
      {"names": "Bread crumbs", "image": "https://media.istockphoto.com/id/168635169/photo/breadcrumbs-heap-and-roll.jpg?s=612x612&w=0&k=20&c=qbpRjFl5-nFmPh7Rmjui9MEeqQn_TcLZKCvgH-o98bI=", "price": 1.99},
      {"names": "Oats", "image": "https://media.istockphoto.com/id/1371790658/photo/bowl-of-oatmeal-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gV1xS1ZUrqLD_Q52h3D_kSh9GvLkXYr2w8UELrz5ejw=", "price": 3.49},
      {"names": "Quinoa", "image": "https://media.istockphoto.com/id/1168462285/photo/wooden-bowl-of-quinoa-seeds-isolated-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=q-bvCOMjNFbwWa7U0lfL9PCboUKArX1qMw2U6kHWYxw=", "price": 4.99}
    ]
  }]
  
  
  newDetails =father.slice()
  export default function page() {
  const data1 = father.map(cart=>(
    <section key={cart.cca3} className='h-40 w-4/5  rounded-lg  bg-white p-0 mx-auto'>
    <Link href={`/newCategories/${cart.cca3}`} title={`click to see more ${cart.name}`}>
    <Image src={cart.image} alt='pics' width={100} height={80} className='mx-auto mt-6'/>
    <div className='ml-[10%]'>{cart.icon} </div>
    <div className='ml-[10%] mt-3 font-bold'>{cart.name} </div>
</Link>
    </section>))

    
    
    
  return (
    <div className='border-solid  border-2 bg-gray-200 mb-10'>
    <div className='flex space-x-60'>
    <Link href='/'><IoIosArrowBack size={30} className='bg-gray-100 ml-5 mb-4'/></Link>
    <h2 className='font-bold'>Categories</h2>
    </div>


    <div className='grid grid-cols-3  gap-y-4 mt-5'>
    {data1}</div>
   
    </div>
  )
}