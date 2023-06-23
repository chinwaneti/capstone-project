import React from 'react'
import {LuPlus} from 'react-icons/lu'
import Image from 'next/image'
import { BiCartAdd } from 'react-icons/bi'



const item  =[
    {
      "id": 1,
      "name": "Vegetables",
      box:   '10% 0ff',
      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80",
      "items": [
        {"names1": "Carrots", "image": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "price": 1.99},
        {"names2": "Broccoli", "image": "https://images.unsplash.com/photo-1565849541238-a094440cba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80", "price": 2.49},
        {"names3": "Lettuce", "image": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 0.99},
        {"names4": "Tomatoes", "image": "https://images.unsplash.com/photo-1507732052797-d22258ac2f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", "price": 1.49},
        {"names5": "Bell peppers", "image": "https://images.unsplash.com/photo-1621953723422-6023013f659d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", "price": 1.29}
      ]
    }]

   const item1 = [{
      "id": 2,
      "name": "Fruits",
      box:   '20% 0ff',
      icons:  <BiCartAdd size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1452693051753-f0acd4cfe723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2VkJTIwZnJ1aXRzJTIwbWFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names1": "Apples", "image1": "https://images.unsplash.com/photo-1477830530828-c849c4b9bf2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", "price1": 2.99},
        {"names2": "Bananas", "image2": "https://images.unsplash.com/photo-1566393028639-d108a42c46a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80", "price2": 1.49},
        {"names3": "Oranges", "image3": "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "price3": 3.99},
        {"names4": "Grapes", "image4": "https://images.unsplash.com/photo-1615485925763-86786288908a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80", "price4": 4.99},
        {"names5": "Strawberries", "image5": "https://images.unsplash.com/photo-1610725664338-2be2cb450798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80", "price5": 2.99}
      ]
    }]
    const item2 =[{
      "id": 3,
      box:   '5% 0ff',
      "name": "Milk & Eggs",

      icons:  <BiCartAdd size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1617049092088-8771a80edde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "items": [
        {"names": "Milk", "image": "https://images.unsplash.com/photo-1651840480396-8fc0d537e376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "price": 2.99},
        {"names": "Eggs", "image": "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.99}
      ]
    }]
    const item3 =[{
      "id": 4,
      "name": "Drinks",
      box:   '20% 0ff',
      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=957&q=80",
      "names": "Water",
         "image1": "https://images.unsplash.com/photo-1560847468-5eef330f455a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          "price0": 0.99,
        "names": "Juice", 
        "image2": "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
         "price1": 2.49,
        "names": "Soda",
         "image3": "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
          "price2": 1.49,
        "names": "Tea",
         "image4": "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", 
         "price3": 1.99,
        "names": "Coffee",
         "image5": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", 
         "price4": 2.99}
      ]
    
    const item4 =[{
        box:   '20% 0ff',
        "id": 5,

      "name": "Cakes",
      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names": "Chocolate cake", "image": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 12.99},
        {"names": "Vanilla cake", "image": "https://images.unsplash.com/photo-1629389861081-43cc4f172b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", "price": 10.99},
        {"names": "Cheesecake", "image": "https://images.unsplash.com/photo-1550597621-b0ca7da62231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 15.99},
        {"names": "Red velvet cake", "image": "https://images.unsplash.com/photo-1614707269211-474b2510b3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 14.99},
        {"names": "Carrot cake", "image": "https://images.unsplash.com/photo-1576618148332-a18871379090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm90JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 11.99}
      ]
    }]
    const item5 =[{
      "id": 6,
      box:   '5% 0ff',

      "name": "Ice-cream",
      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1571778127658-9275961ee810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlY3JlYW1zfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names": "Vanilla", "image": "https://images.unsplash.com/photo-1614014077943-840960ce6694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZhbmlsbGElMjBpY2VjcmVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 4.99},
        {"names": "Chocolate", "image": "https://images.unsplash.com/photo-1597648152428-f883fbc9c873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHZhbmlsbGElMjBpY2VjcmVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 4.99},
        {"names": "Strawberry", "image": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZhbmlsbGElMjBpY2VjcmVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 4.99},
        {"names": "Mint chocolate chip", "image": "https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWludCUyMGljZWNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 5.99},
        {"names": "Cookie dough", "image": "https://images.unsplash.com/photo-1489069313310-63735a4f3010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tpZSUyMGRvdWdoJTIwaWNlY3JlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 5.99}
      ]
    }]
    const item6 =[{
      "id": 7,
      box:   '5% 0ff',

      "name": "Bakery",
      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      "items": [
        {"names": "Bread", "image": "https://images.unsplash.com/photo-1592029780368-c1fff15bcfd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpY2VkJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 3.99},
        {"names": "Bagels", "image": "https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJhZ2Vsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.99},
        {"names": "Croissants", "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 2.49},
        {"names": "Muffins", "image": "https://images.unsplash.com/photo-1585665187093-a3511c2fe57a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.49},
        {"names": "Pies", "image": "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 8.99}
      ]
    }]
    const item7 =[{
      "id": 8,
      "name": "Snacks",
      box:   '10% 0ff',

      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxzbmFja3MlMjBpbiUyMGElMjBiYXNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names": "Chips", "image": "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaXBzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 2.99},
        {"names": "Pretzels", "image": "https://images.unsplash.com/photo-1568836068593-a12f99bbf2d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByZXR6ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 1.99},
        {"names": "Popcorn", "image": "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcGNvcm4lMjBudXRzJTIwY3JhY2tlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 3.49},
        {"names": "Nuts", "image": "https://images.unsplash.com/photo-1508061235804-9436954f042f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcGNvcm4lMjBudXRzJTIwY3JhY2tlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 4.99},
        {"names": "Crackers", "image": "https://images.unsplash.com/photo-1615294209152-571969a7fbfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JhY2tlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 2.49}
      ]
    }]
    const item8 =[{
      "id": 9,
      "name": "Grain",icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,

      "image": "https://images.unsplash.com/photo-1656156849534-a5c704ac8bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdyYWlucyUyMGluJTIwYmFza2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names": "Rice", "image": "https://images.unsplash.com/photo-1594813593170-547b5eaf5bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 3.99},
        {"names": "Pasta", "image": "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 2.49},
        {"names": "Bread crumbs", "image": "https://images.unsplash.com/photo-1598785244280-7a428600d053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxicmVhZCUyMGNydW1ic3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.99},
        {"names": "Oats", "image": "https://images.unsplash.com/photo-1587790032594-babe1292cede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG9hdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 3.49},
        {"names": "Quinoa", "image": "https://images.unsplash.com/photo-1606767417260-07f88613b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHF1aW5vYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 4.99}
      ]
    }]
    const item9 =[{
      "id": 10,
      box:   '25% 0ff',

      "name": "Cheese",icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,

      "image": "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names": "Cheddar", "image": "https://images.unsplash.com/photo-1625084561257-f92e85048507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNoZWRkYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 5.99},
        {"names": "Mozzarella", "image": "https://images.unsplash.com/photo-1674526498355-e20c280bc6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1venphcmVsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 4.99},
        {"names": "Swiss", "image": "https://images.unsplash.com/photo-1683314573422-649a3c6ad784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHN3aXNzJTIwY2hlZXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 6.99},
        {"names": "Parmesan", "image": "https://images.unsplash.com/photo-1666304790423-3ce5314c3bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHF1ZXNvJTIwcGFybWVzYW5vfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 7.99},
        {"names": "Feta", "image": "https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmV0YSUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 3.99}
      ]
    }]
    const item10=[{
      "id": 11,
      box:   '10% 0ff',
      "name": "Cleaning Stuff",
      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNsZWFuaW5nJTIwc3R1ZmZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names": "All-purpose cleaner", "image": "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fEFsbCUyMHB1cnBvc2UlMjBjbGVhbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 3.99},
        {"names": "Dish soap", "image": "https://images.unsplash.com/photo-1624372635310-01d078c05dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERpc2glMjBzb2FwfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 2.49},
        {"names": "Laundry detergent", "image": "https://images.unsplash.com/photo-1605634591626-d22e59984842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGxhdW5kcnklMjBkZXRlcmdlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 5.99},
        {"names": "Window cleaner", "image": "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdpbmRvdyUyMGNsZWFuZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 2.99},
        {"names": "Bathroom cleaner", "image": "", "price": 3.49}
      ]
    }]
    const item11 =[{
      "id": 12,
      "name": "Biscuit",
      box:   '20% 0ff',
      icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>,
      "image": "https://plus.unsplash.com/premium_photo-1668698358039-9e7e94dbdfac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlzY3VpdHMlMjBpbiUyMGJhc2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "items": [
        {"names": "Digestive", "image": "https://images.unsplash.com/photo-1588856062859-561c223f0cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGRpZ2VzdGl2ZSUyMGJpc2N1aXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", "price": 2.99},
        {"names": "Oreo", "image": "https://images.unsplash.com/photo-1599629954294-14df9ec8bc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3Jlb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 1.99},
        {"names": "Shortbread", "image": "https://images.unsplash.com/photo-1573829832525-f4189bd2a47d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3J0YnJlYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 3.49},
        {"names": "Gingerbread", "image": "https://images.unsplash.com/photo-1607875674513-99c57e4a9c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpbmdlcmJyZWFkJTIwYmlzY3VpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", "price": 2.49},
        {"names": "Chocolate Chip", "image": "https://images.unsplash.com/photo-1464195085758-89f3e55e821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY29sYXRlJTIwY2hpcHMlMjBiaXNjdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "price": 2.99}
      ]
    }
  ]
   const pop = item3.map(it=>(
  <section key={it.id} className='bg-gray-200 rounded-lg h-32 p-0 mx-auto'>
  <div>{it.name}</div>
  <div><Image src={it.image} alt='pics' width={100} height={80} className='mx-auto mt-6'/></div>
  <div><Image src={it.image1} alt='pics' width={100} height={80}/></div>
  <div><Image src={it.image2} alt='pics' width={100} height={80}/></div>
  <div><Image src={it.image3} alt='pics' width={100} height={80}/></div>
  <div><Image src={it.image4} alt='pics' width={100} height={80}/></div>
  <div><Image src={it.image5} alt='pics' width={100} height={80}/></div>

  <div>{it.box}</div>
    <div>{it.icons}</div>
  </section>
   ))






export default function page() {
  return (
    <div className=''>
    <div className='grid grid-cols-3 gap-3'>{pop}</div>
    </div>
  )
}


