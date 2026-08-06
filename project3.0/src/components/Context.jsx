import React, { createContext, useState } from 'react'

export const contextData=createContext()

const Context = (props) => {

  const [mensFashion, setMensFashion] = useState([
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "T-Shirts",
    price: 599,
    state: "normal",
    image: "https://www.pro5usa.com/cdn/shop/files/ChatGPTImage2026_7_8_10_45_12_664b40bc-4790-4002-885f-199ee544ae81_1000x.png?v=1783535352"
  },
  {
    id: 2,
    name: "Slim Fit Blue Jeans",
    category: "Jeans",
    price: 1499,
    state: "normal",
    image: "https://www.jackjones.in/cdn/shop/files/901654901_g0.jpg?v=1745348285&width=2048"
  },
  {
    id: 3,
    name: "Black Hoodie",
    category: "Hoodies",
    price: 1799,
    state: "trending",
    image: "https://www.dripmylook.in/cdn/shop/files/43faf63a49e7ca60aa5da2c5e3a00f866acdfa99_xl-1.jpg?v=1731052933&width=3840"
  },
  {
    id: 4,
    name: "Cotton Polo Shirt",
    category: "Polos",
    price: 899,
    state: "trending",
    image: "https://cdn02.nnnow.com/web-images/large/styles/Z7PW4Y1OQZ9/1758713746053/5.jpg"
  },
  {
    id: 5,
    name: "Grey Joggers",
    category: "Joggers",
    price: 1299,
    state: "normal",
    image: "https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/14814214-2615117868015129.jpg&format=webp&auto=avif"
  },
  {
    id: 6,
    name: "Formal White Shirt",
    category: "Shirts",
    price: 1399,
    state: "special",
    image: "https://imagescdn.louisphilippe.com/img/app/product/9/962928-17224804.jpg"
  },
  {
    id: 7,
    name: "Navy Chinos",
    category: "Pants",
    price: 1599,
    state: "normal",
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2290968/2018/10/10/50c09894-c97f-4edd-8e44-5acdb35764cb1539154717627-Roadster-Men-Navy-Blue-Slim-Fit-Basic-Chinos-654153915471535-1.jpg"
  },
  {
    id: 8,
    name: "Denim Jacket",
    category: "Jackets",
    price: 2499,
    state: "normal",
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/10948614/2025/2/15/c5f225d0-e38e-43cf-9c74-4034bc0561bd1739614460637-LOCOMOTIVE-Men-Blue-Solid-Denim-Jacket-4281739614460141-1.jpg"
  },
  {
    id: 9,
    name: "Oversized Graphic Tee",
    category: "T-Shirts",
    price: 799,
    state: "trending",
    image: "https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/14814588-1475297961101709.jpg&format=webp&auto=avif"
  },
  {
    id: 10,
    name: "Casual Check Shirt",
    category: "Shirts",
    price: 1199,
    state: "normal",
    image: "https://blackberrys.com/cdn/shop/files/Linen-Casual-Natural-Check-Shirt-Yori_ES013975A2_image1.jpg?v=1738673694"
  },
  {
    id: 11,
    name: "Olive Cargo Pants",
    category: "Cargo",
    price: 1899,
    state: "special",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHmem6C6ZYRSg20n2VeM0PQE2yTXZG8BWYgnKu0jEow&s=10"
  },
  {
    id: 12,
    name: "Leather Belt",
    category: "Accessories",
    price: 699,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2SlOwH6FjXdYqikTqgYqnFaJSZaC96ENR0MtX8bZcA&s=10"
  },
  {
    id: 13,
    name: "Sports Cap",
    category: "Accessories",
    price: 499,
    state: "discount",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2quBkDq5wU2Uo5PT1ds3Xx9dDDTAU8AKY-N8E_wY2aE-tDUaNvRckSU&s=10"
  },
  {
    id: 14,
    name: "Running Shorts",
    category: "Shorts",
    price: 899,
    state: "normal",
    image: "https://contents.mediadecathlon.com/p2788785/4020e161104d6788c02e352f96b9d708/p2788785.jpg"
  },
  {
    id: 15,
    name: "Premium Sweatshirt",
    category: "Sweatshirts",
    price: 1999,
    state: "normal",
    image: "https://m.media-amazon.com/images/I/514taa3JtYL._AC_UY1100_.jpg"
  },
  {
    id: 16,
    name: "Black Formal Trousers",
    category: "Pants",
    price: 1699,
    state: "normal",
    image: "https://pantproject.com/cdn/shop/files/DSC6066_7cb89f33-37a7-4975-a82c-7d4fd3ff892e.jpg?v=1748333695&width=1080"
  },
  {
    id: 17,
    name: "Bomber Jacket",
    category: "Jackets",
    price: 2999,
    state: "special",
    image: "https://www.jackjones.in/cdn/shop/files/901832101_g0_e30909d0-0be3-4001-9489-e3f0812ccd79.jpg?v=1758709220&width=2048"
  },
  {
    id: 18,
    name: "Striped Casual Shirt",
    category: "Shirts",
    price: 1299,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6wb29kmwHz6tW5XuC4VjRIvjQa-xRjtI-UKkNnEdFoZ8BoP9Hi7KBMj8&s=10"
  },
  {
    id: 19,
    name: "Relaxed Fit Jeans",
    category: "Jeans",
    price: 1599,
    state: "normal",
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/31798528/2024/12/7/264ae7c9-6409-4f47-aa62-08f8e546f82a1733549523325-DENIMLOOK-Men-Relaxed-Fit-Stretchable-Jeans-9461733549522928-1.jpg"
  },
  {
    id: 20,
    name: "Zip-Up Hoodie",
    category: "Hoodies",
    price: 1899,
    state: "normal",
    image: "https://contents.mediadecathlon.com/p3084053/abb031d518d67d9c0900a3e0fb34388e/p3084053.jpg"
  },
  {
    id: 21,
    name: "Basic Black T-Shirt",
    category: "T-Shirts",
    price: 499,
    state: "normal",
    image: "https://www.cotstyle.com/cdn/shop/files/RN01_384991_S_Black.jpg?v=1685428877"
  },
  {
    id: 22,
    name: "Linen Summer Shirt",
    category: "Shirts",
    price: 1499,
    state: "normal",
    image: "https://cottonfolk.in/cdn/shop/files/Men_s_collarless_summer_shirt_in_aqua.jpg?v=1748415278&width=2048"
  },
  {
    id: 23,
    name: "Khaki Chinos",
    category: "Pants",
    price: 1499,
    state: "normal",
    image: "https://imagescdn.peterengland.com/img/app/product/9/931687-11833861.jpg"
  },
  {
    id: 24,
    name: "Athletic Track Pants",
    category: "Track Pants",
    price: 1399,
    state: "discount",
    image: "https://m.media-amazon.com/images/I/71zEyWwT9YL._AC_UY1100_.jpg"
  },
  {
    id: 25,
    name: "Flannel Shirt",
    category: "Shirts",
    price: 1599,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqtsm3TA9Mcc_Cpets_5VxngO1etOplhM6M6PDyer7XTWWh3C-NT-rOw&s=10"
  },
  {
    id: 26,
    name: "Cargo Shorts",
    category: "Shorts",
    price: 999,
    state: "normal",
    image: "https://assets.ajio.com/medias/sys_master/root/20240324/ftE9/65ff808505ac7d77bbd4c6c6/-473Wx593H-467043456-grey-MODEL.jpg"
  },
  {
    id: 27,
    name: "Puffer Jacket",
    category: "Jackets",
    price: 3499,
    state: "trending",
    image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410500688011/Dz2gdqb0bG-410500688011_1.jpg"
  },
  {
    id: 28,
    name: "Crew Neck Sweater",
    category: "Sweaters",
    price: 1799,
    state: "normal",
    image: "https://levi.in/cdn/shop/files/001R30005_1_Front.jpg?v=1731411092"
  },
  {
    id: 29,
    name: "Leather Wallet",
    category: "Accessories",
    price: 999,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCymsCONNJMYOIMq1KOruWdOVf8zgoByvKLvjW3VbUrgGiltt_95GcyHQe&s=10"
  },
  {
    id: 30,
    name: "Oxford Formal Shirt",
    category: "Shirts",
    price: 1699,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2R9M-1HE0FP1_n-mkk77J4UBM_kCF0mS4YNL3ULHeF4kuVR47WlsgXwr4&s=10"
  },
  {
    id: 31,
    name: "Distressed Denim Jeans",
    category: "Jeans",
    price: 1899,
    state: "normal",
    image: "https://m.media-amazon.com/images/I/7182JqofIdL._AC_SR175,263_QL70_.jpg"
  },
  {
    id: 32,
    name: "Printed Polo Shirt",
    category: "Polos",
    price: 1099,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_36Xv4_8r3kHNzYN7Qh-TkJbtYAQzIjTKJf3nZSmE_3evdi39HrDzKye&s=10"
  },
  {
    id: 33,
    name: "Compression Gym Tee",
    category: "Sportswear",
    price: 899,
    state: "normal",
    image: "https://m.media-amazon.com/images/I/51kocitPHfL._AC_UY1100_.jpg"
  },
  {
    id: 34,
    name: "Winter Wool Coat",
    category: "Coats",
    price: 4999,
    state: "special",
    image: "https://cdn.woollen-wear.in/cache/data/coat/men-coats-2324/24511-cinnamon/24511-cinnamon-front-300x382.jpg"
  },
  {
    id: 35,
    name: "Cotton Vest",
    category: "Innerwear",
    price: 399,
    state: "normal",
    image: "https://ramrajcotton.in/cdn/shop/files/3_c25849f6-ddf9-44bb-b056-1295e0df991d.jpg?v=1784183999&width=1080"
  },
  {
    id: 36,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2499,
    state: "normal",
    image: "https://m.media-amazon.com/images/I/71NqN1YxBfL._AC_UY1000_.jpg"
  },
  {
    id: 37,
    name: "Formal Leather Shoes",
    category: "Footwear",
    price: 3299,
    state: "discount",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8boDnKQ9ZBQf18OWphPVotLVmBcgWU6zP2mfZwMbYntfz4uWfHSZbS4&s=10"
  },
  {
    id: 38,
    name: "Canvas Slip-On Shoes",
    category: "Footwear",
    price: 1799,
    state: "normal",
    image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/C51643s.jpg?im=Resize,width=750"
  },
  {
    id: 39,
    name: "Analog Wrist Watch",
    category: "Accessories",
    price: 2799,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvurC9Y1GfKH3GnmdPeffSc-UYOV4HHSFGZp6ZPDDsdwB3-qTyUnhZyc0&s=10"
  },
  {
    id: 40,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 1199,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnFDSKeDCi3RMWG2DI0_tb8bKY2exyrHHjBkAbUyG3neXcEnbSQF0JliB&s=10"
  }
]);
  const [womensFashion,setWomensFashion] = useState([
  {
    id: 1,
    name: "Classic White Crop Tee",
    category: "Tops",
    price: 649,
    state: "normal",
    image: "https://images.meesho.com/images/products/504487094/kch7t_512.webp?width=512"
  },
  {
    id: 2,
    name: "High Rise Skinny Jeans",
    category: "Jeans",
    price: 1599,
    state: "normal",
    image: "https://m.media-amazon.com/images/I/71JN9Yb7ZBL._AC_UY1100_.jpg"
  },
  {
    id: 3,
    name: "Oversized Lavender Hoodie",
    category: "Hoodies",
    price: 1899,
    state: "trending",
    image: "https://m.media-amazon.com/images/I/41U3+aczCbL.jpg"
  },
  {
    id: 4,
    name: "Ribbed Polo Top",
    category: "Tops",
    price: 949,
    state: "normal",
    image: "https://www.forevernew.co.in/cdn/shop/files/30479207_F.jpg?v=1784095579"
  },
  {
    id: 5,
    name: "Beige Lounge Joggers",
    category: "Joggers",
    price: 1399,
    state: "normal",
    image: "https://m.media-amazon.com/images/I/41RTTwvhjkL.jpg"
  },
  {
    id: 6,
    name: "Silk Office Blouse",
    category: "Blouses",
    price: 1499,
    state: "special",
    image: "https://m.media-amazon.com/images/I/81mD9i2Dl3L._AC_UY1100_.jpg"
  },
  {
    id: 7,
    name: "Cream Wide Leg Trousers",
    category: "Pants",
    price: 1699,
    state: "normal",
    image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/6/96d7360JK4PKLSKN1_1.jpg?rnd=20200526195200&tr=w-512"
  },
  {
    id: 8,
    name: "Light Blue Denim Jacket",
    category: "Jackets",
    price: 2599,
    state: "normal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DLZKjAYAJPKyBf3iH3QC0wd-J8nXRj6Gtru9E6BuvQZSGqAHThJi-iZ&s=10"
  },
  {
    id: 9,
    name: "Pastel Graphic Tee",
    category: "Tops",
    price: 849,
    state: "trending",
    image: "https://m.media-amazon.com/images/I/71jNO7kt7uL._AC_UY1100_.jpg"
  },
  {
    id: 10,
    name: "Plaid Casual Shirt",
    category: "Shirts",
    price: 1249,
    state: "normal",
    image: "https://static.cilory.com/781368-thickbox_default/navy-tartan-checkered-flannel-casual-shirt.jpg.webp"
  },
  {
    id: 11,
    name: "Olive Cargo Trousers",
    category: "Cargo",
    price: 1949,
    state: "normal",
    image: "https://www.veromoda.in/cdn/shop/files/901825201_g0_98c0dd8d-c5e9-448e-b3d6-721a2bbb02e1.jpg?v=1760351048&width=2048"
  },
  {
    id: 12,
    name: "Classic Leather Handbag",
    category: "Accessories",
    price: 1799,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,handbag"
  },
  {
    id: 13,
    name: "Minimalist Baseball Cap",
    category: "Accessories",
    price: 549,
    state: "discount",
    image: "https://images.unsplash.com/featured/?women,cap"
  },
  {
    id: 14,
    name: "Active Running Shorts",
    category: "Shorts",
    price: 949,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,running,shorts"
  },
  {
    id: 15,
    name: "Soft Fleece Sweatshirt",
    category: "Sweatshirts",
    price: 2049,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,sweatshirt"
  },
  {
    id: 16,
    name: "Straight Fit Office Pants",
    category: "Pants",
    price: 1749,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,office,pants"
  },
  {
    id: 17,
    name: "Cropped Bomber Jacket",
    category: "Jackets",
    price: 3099,
    state: "special",
    image: "https://images.unsplash.com/featured/?women,bomber,jacket"
  },
  {
    id: 18,
    name: "Striped Linen Shirt",
    category: "Shirts",
    price: 1349,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,striped,shirt"
  },
  {
    id: 19,
    name: "Relaxed Mom Jeans",
    category: "Jeans",
    price: 1699,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,mom,jeans"
  },
  {
    id: 20,
    name: "Zip Front Hoodie",
    category: "Hoodies",
    price: 1949,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,zip,hoodie"
  },
  {
    id: 21,
    name: "Basic Black Tank Top",
    category: "Tops",
    price: 549,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,tank,top"
  },
  {
    id: 22,
    name: "Summer Floral Blouse",
    category: "Blouses",
    price: 1549,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,floral,blouse"
  },
  {
    id: 23,
    name: "Khaki Wide Pants",
    category: "Pants",
    price: 1549,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,khaki,pants"
  },
  {
    id: 24,
    name: "Performance Leggings",
    category: "Leggings",
    price: 1499,
    state: "discount",
    image: "https://images.unsplash.com/featured/?women,leggings"
  },
  {
    id: 25,
    name: "Checked Flannel Shirt",
    category: "Shirts",
    price: 1649,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,flannel,shirt"
  },
  {
    id: 26,
    name: "Denim Mini Skirt",
    category: "Skirts",
    price: 1099,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,denim,skirt"
  },
  {
    id: 27,
    name: "Quilted Puffer Jacket",
    category: "Jackets",
    price: 3599,
    state: "trending",
    image: "https://images.unsplash.com/featured/?women,puffer,jacket"
  },
  {
    id: 28,
    name: "Knitted Crew Sweater",
    category: "Sweaters",
    price: 1849,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,sweater"
  },
  {
    id: 29,
    name: "Elegant Crossbody Bag",
    category: "Accessories",
    price: 1899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,crossbody,bag"
  },
  {
    id: 30,
    name: "Classic Oxford Blouse",
    category: "Blouses",
    price: 1749,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,oxford,blouse"
  },
  {
    id: 31,
    name: "Ripped Boyfriend Jeans",
    category: "Jeans",
    price: 1949,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,boyfriend,jeans"
  },
  {
    id: 32,
    name: "Printed Summer Top",
    category: "Tops",
    price: 1149,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,printed,top"
  },
  {
    id: 33,
    name: "Performance Gym Tank",
    category: "Sportswear",
    price: 949,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,gym,tank"
  },
  {
    id: 34,
    name: "Long Wool Overcoat",
    category: "Coats",
    price: 5199,
    state: "special",
    image: "https://images.unsplash.com/featured/?women,wool,coat"
  },
  {
    id: 35,
    name: "Cotton Camisole",
    category: "Innerwear",
    price: 449,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,camisole"
  },
  {
    id: 36,
    name: "Chunky White Sneakers",
    category: "Footwear",
    price: 2599,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,white,sneakers"
  },
  {
    id: 37,
    name: "Classic Block Heels",
    category: "Footwear",
    price: 3399,
    state: "discount",
    image: "https://images.unsplash.com/featured/?women,heels"
  },
  {
    id: 38,
    name: "Canvas Slip-On Flats",
    category: "Footwear",
    price: 1849,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,flats"
  },
  {
    id: 39,
    name: "Rose Gold Wrist Watch",
    category: "Accessories",
    price: 2899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,watch"
  },
  {
    id: 40,
    name: "Cat Eye Sunglasses",
    category: "Accessories",
    price: 1299,
    state: "normal",
    image: "https://images.unsplash.com/featured/?women,cat-eye,sunglasses"
  }
]);
  const [kidsFashion,setKidsFashion] = useState([
  {
    id: 1,
    name: "Superhero Graphic T-Shirt",
    category: "T-Shirts",
    price: 399,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,tshirt"
  },
  {
    id: 2,
    name: "Stretch Denim Jeans",
    category: "Jeans",
    price: 799,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,jeans"
  },
  {
    id: 3,
    name: "Dinosaur Print Hoodie",
    category: "Hoodies",
    price: 999,
    state: "trending",
    image: "https://images.unsplash.com/featured/?kids,hoodie"
  },
  {
    id: 4,
    name: "Rainbow Cotton Top",
    category: "Tops",
    price: 499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,top"
  },
  {
    id: 5,
    name: "Soft Cotton Joggers",
    category: "Joggers",
    price: 699,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,joggers"
  },
  {
    id: 6,
    name: "Party Wear Dress",
    category: "Dresses",
    price: 1299,
    state: "special",
    image: "https://images.unsplash.com/featured/?kids,dress"
  },
  {
    id: 7,
    name: "School Uniform Pants",
    category: "Pants",
    price: 799,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,pants"
  },
  {
    id: 8,
    name: "Blue Denim Jacket",
    category: "Jackets",
    price: 1399,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,denim,jacket"
  },
  {
    id: 9,
    name: "Cartoon Print Tee",
    category: "T-Shirts",
    price: 449,
    state: "trending",
    image: "https://images.unsplash.com/featured/?kids,cartoon,tshirt"
  },
  {
    id: 10,
    name: "Checked Casual Shirt",
    category: "Shirts",
    price: 699,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,shirt"
  },
  {
    id: 11,
    name: "Cargo Shorts",
    category: "Shorts",
    price: 649,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,cargo,shorts"
  },
  {
    id: 12,
    name: "Cute Backpack",
    category: "Accessories",
    price: 899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,backpack"
  },
  {
    id: 13,
    name: "Baseball Cap",
    category: "Accessories",
    price: 349,
    state: "discount",
    image: "https://images.unsplash.com/featured/?kids,cap"
  },
  {
    id: 14,
    name: "Sports Shorts",
    category: "Shorts",
    price: 499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,sports,shorts"
  },
  {
    id: 15,
    name: "Warm Fleece Sweatshirt",
    category: "Sweatshirts",
    price: 899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,sweatshirt"
  },
  {
    id: 16,
    name: "School Formal Trousers",
    category: "Pants",
    price: 849,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,trousers"
  },
  {
    id: 17,
    name: "Puffer Winter Jacket",
    category: "Jackets",
    price: 1699,
    state: "special",
    image: "https://images.unsplash.com/featured/?kids,puffer,jacket"
  },
  {
    id: 18,
    name: "Striped Polo Shirt",
    category: "Polos",
    price: 649,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,polo"
  },
  {
    id: 19,
    name: "Elastic Waist Jeans",
    category: "Jeans",
    price: 849,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,elastic,jeans"
  },
  {
    id: 20,
    name: "Zip-Up Hoodie",
    category: "Hoodies",
    price: 1049,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,zip,hoodie"
  },
  {
    id: 21,
    name: "Basic Cotton Tee",
    category: "T-Shirts",
    price: 349,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,cotton,tshirt"
  },
  {
    id: 22,
    name: "Floral Summer Dress",
    category: "Dresses",
    price: 1199,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,summer,dress"
  },
  {
    id: 23,
    name: "Comfort Fit Leggings",
    category: "Leggings",
    price: 549,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,leggings"
  },
  {
    id: 24,
    name: "Track Pants",
    category: "Track Pants",
    price: 749,
    state: "discount",
    image: "https://images.unsplash.com/featured/?kids,track,pants"
  },
  {
    id: 25,
    name: "Flannel Shirt",
    category: "Shirts",
    price: 749,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,flannel,shirt"
  },
  {
    id: 26,
    name: "Pleated Skirt",
    category: "Skirts",
    price: 699,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,skirt"
  },
  {
    id: 27,
    name: "Quilted Jacket",
    category: "Jackets",
    price: 1799,
    state: "trending",
    image: "https://images.unsplash.com/featured/?kids,quilted,jacket"
  },
  {
    id: 28,
    name: "Knitted Sweater",
    category: "Sweaters",
    price: 899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,sweater"
  },
  {
    id: 29,
    name: "Mini Crossbody Bag",
    category: "Accessories",
    price: 699,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,bag"
  },
  {
    id: 30,
    name: "School Blazer",
    category: "Blazers",
    price: 1499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,blazer"
  },
  {
    id: 31,
    name: "Printed Overalls",
    category: "Overalls",
    price: 1099,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,overalls"
  },
  {
    id: 32,
    name: "Animal Print Sweatshirt",
    category: "Sweatshirts",
    price: 899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,animal,sweatshirt"
  },
  {
    id: 33,
    name: "Sports Jersey",
    category: "Sportswear",
    price: 649,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,sportswear"
  },
  {
    id: 34,
    name: "Winter Wool Coat",
    category: "Coats",
    price: 1999,
    state: "special",
    image: "https://images.unsplash.com/featured/?kids,winter,coat"
  },
  {
    id: 35,
    name: "Cotton Pajama Set",
    category: "Sleepwear",
    price: 799,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,pajamas"
  },
  {
    id: 36,
    name: "Velcro Sneakers",
    category: "Footwear",
    price: 999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,sneakers"
  },
  {
    id: 37,
    name: "School Shoes",
    category: "Footwear",
    price: 1199,
    state: "discount",
    image: "https://images.unsplash.com/featured/?kids,school,shoes"
  },
  {
    id: 38,
    name: "Canvas Slip-On Shoes",
    category: "Footwear",
    price: 899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,canvas,shoes"
  },
  {
    id: 39,
    name: "Digital Kids Watch",
    category: "Accessories",
    price: 699,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,watch"
  },
  {
    id: 40,
    name: "Character Sunglasses",
    category: "Accessories",
    price: 449,
    state: "normal",
    image: "https://images.unsplash.com/featured/?kids,sunglasses"
  }
]);
  const [elec, setElec] = useState([
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    category: "Audio",
    price: 2499,
    state: "trending",
    image: "https://images.unsplash.com/featured/?wireless,earbuds"
  },
  {
    id: 2,
    name: "Noise Cancelling Headphones",
    category: "Audio",
    price: 4999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?headphones"
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 1999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?bluetooth,speaker"
  },
  {
    id: 4,
    name: "Smart Watch Pro",
    category: "Wearables",
    price: 3999,
    state: "special",
    image: "https://images.unsplash.com/featured/?smartwatch"
  },
  {
    id: 5,
    name: "Fitness Smart Band",
    category: "Wearables",
    price: 1499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?fitness,band"
  },
  {
    id: 6,
    name: "Gaming Mouse RGB",
    category: "Computer Accessories",
    price: 999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?gaming,mouse"
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    category: "Computer Accessories",
    price: 2999,
    state: "trending",
    image: "https://images.unsplash.com/featured/?mechanical,keyboard"
  },
  {
    id: 8,
    name: "1080p Webcam",
    category: "Computer Accessories",
    price: 1699,
    state: "normal",
    image: "https://images.unsplash.com/featured/?webcam"
  },
  {
    id: 9,
    name: "27-inch IPS Monitor",
    category: "Monitors",
    price: 12999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?computer,monitor"
  },
  {
    id: 10,
    name: "USB-C Docking Station",
    category: "Computer Accessories",
    price: 3499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?usb-c,dock"
  },
  {
    id: 11,
    name: "1TB External SSD",
    category: "Storage",
    price: 6999,
    state: "special",
    image: "https://images.unsplash.com/featured/?external,ssd"
  },
  {
    id: 12,
    name: "128GB USB Flash Drive",
    category: "Storage",
    price: 899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?usb,flash,drive"
  },
  {
    id: 13,
    name: "Wi-Fi 6 Router",
    category: "Networking",
    price: 4499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?wifi,router"
  },
  {
    id: 14,
    name: "Wireless Charger",
    category: "Mobile Accessories",
    price: 1299,
    state: "discount",
    image: "https://images.unsplash.com/featured/?wireless,charger"
  },
  {
    id: 15,
    name: "20,000mAh Power Bank",
    category: "Mobile Accessories",
    price: 1999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?powerbank"
  },
  {
    id: 16,
    name: "65W Fast Charger",
    category: "Mobile Accessories",
    price: 1499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?phone,charger"
  },
  {
    id: 17,
    name: "Premium USB-C Cable",
    category: "Mobile Accessories",
    price: 499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?usb-c,cable"
  },
  {
    id: 18,
    name: "Action Camera 4K",
    category: "Cameras",
    price: 14999,
    state: "trending",
    image: "https://images.unsplash.com/featured/?action,camera"
  },
  {
    id: 19,
    name: "Mirrorless Camera",
    category: "Cameras",
    price: 54999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?mirrorless,camera"
  },
  {
    id: 20,
    name: "Camera Tripod",
    category: "Photography",
    price: 1999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?camera,tripod"
  },
  {
    id: 21,
    name: "Drone with 4K Camera",
    category: "Drones",
    price: 34999,
    state: "special",
    image: "https://images.unsplash.com/featured/?drone"
  },
  {
    id: 22,
    name: "Gaming Controller",
    category: "Gaming",
    price: 2999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?gaming,controller"
  },
  {
    id: 23,
    name: "VR Headset",
    category: "Gaming",
    price: 24999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?vr,headset"
  },
  {
    id: 24,
    name: "Laptop Cooling Pad",
    category: "Laptop Accessories",
    price: 1499,
    state: "discount",
    image: "https://images.unsplash.com/featured/?laptop,cooling,pad"
  },
  {
    id: 25,
    name: "15.6-inch Laptop Backpack",
    category: "Laptop Accessories",
    price: 1899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?laptop,backpack"
  },
  {
    id: 26,
    name: "LED Desk Lamp",
    category: "Home Electronics",
    price: 999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?desk,lamp"
  },
  {
    id: 27,
    name: "Smart LED Bulb",
    category: "Smart Home",
    price: 799,
    state: "trending",
    image: "https://images.unsplash.com/featured/?smart,bulb"
  },
  {
    id: 28,
    name: "Smart Plug",
    category: "Smart Home",
    price: 999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?smart,plug"
  },
  {
    id: 29,
    name: "Home Security Camera",
    category: "Smart Home",
    price: 3499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?security,camera"
  },
  {
    id: 30,
    name: "Portable Mini Projector",
    category: "Projectors",
    price: 8999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?mini,projector"
  },
  {
    id: 31,
    name: "32-inch Smart TV",
    category: "Televisions",
    price: 17999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?smart,tv"
  },
  {
    id: 32,
    name: "Android TV Box",
    category: "Entertainment",
    price: 2499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?android,tv,box"
  },
  {
    id: 33,
    name: "Electric Kettle",
    category: "Home Appliances",
    price: 1599,
    state: "normal",
    image: "https://images.unsplash.com/featured/?electric,kettle"
  },
  {
    id: 34,
    name: "Air Fryer XL",
    category: "Home Appliances",
    price: 6499,
    state: "special",
    image: "https://images.unsplash.com/featured/?air,fryer"
  },
  {
    id: 35,
    name: "Robot Vacuum Cleaner",
    category: "Home Appliances",
    price: 15999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?robot,vacuum"
  },
  {
    id: 36,
    name: "Digital Alarm Clock",
    category: "Home Electronics",
    price: 899,
    state: "normal",
    image: "https://images.unsplash.com/featured/?digital,clock"
  },
  {
    id: 37,
    name: "Portable Mini Fan",
    category: "Home Electronics",
    price: 699,
    state: "discount",
    image: "https://images.unsplash.com/featured/?portable,fan"
  },
  {
    id: 38,
    name: "Wireless Presentation Clicker",
    category: "Office Electronics",
    price: 1299,
    state: "normal",
    image: "https://images.unsplash.com/featured/?presentation,remote"
  },
  {
    id: 39,
    name: "Portable SSD 2TB",
    category: "Storage",
    price: 11999,
    state: "normal",
    image: "https://images.unsplash.com/featured/?portable,ssd"
  },
  {
    id: 40,
    name: "USB RGB Light Bar",
    category: "Computer Accessories",
    price: 1499,
    state: "normal",
    image: "https://images.unsplash.com/featured/?rgb,light"
  }
]);
  const [living, setLiving] = useState([
  { id: 1, name: "Modern Fabric Sofa", category: "Furniture", price: 24999, state: "normal", image: "https://images.unsplash.com/featured/?sofa" },
  { id: 2, name: "Wooden Coffee Table", category: "Furniture", price: 6499, state: "normal", image: "https://images.unsplash.com/featured/?coffee-table" },
  { id: 3, name: "Queen Size Bed Frame", category: "Bedroom", price: 18999, state: "special", image: "https://images.unsplash.com/featured/?bed" },
  { id: 4, name: "Memory Foam Mattress", category: "Bedroom", price: 12999, state: "normal", image: "https://images.unsplash.com/featured/?mattress" },
  { id: 5, name: "Bedside Table", category: "Bedroom", price: 3499, state: "normal", image: "https://images.unsplash.com/featured/?bedside-table" },
  { id: 6, name: "Bookshelf", category: "Furniture", price: 5499, state: "normal", image: "https://images.unsplash.com/featured/?bookshelf" },
  { id: 7, name: "Dining Table Set", category: "Dining", price: 22999, state: "trending", image: "https://images.unsplash.com/featured/?dining-table" },
  { id: 8, name: "Dining Chair", category: "Dining", price: 2999, state: "normal", image: "https://images.unsplash.com/featured/?dining-chair" },
  { id: 9, name: "Decorative Wall Mirror", category: "Decor", price: 2499, state: "normal", image: "https://images.unsplash.com/featured/?wall-mirror" },
  { id: 10, name: "Canvas Wall Art", category: "Decor", price: 1999, state: "normal", image: "https://images.unsplash.com/featured/?wall-art" },
  { id: 11, name: "Indoor Plant Pot", category: "Decor", price: 899, state: "normal", image: "https://images.unsplash.com/featured/?plant-pot" },
  { id: 12, name: "Ceramic Flower Vase", category: "Decor", price: 1299, state: "discount", image: "https://images.unsplash.com/featured/?vase" },
  { id: 13, name: "LED Floor Lamp", category: "Lighting", price: 3999, state: "normal", image: "https://images.unsplash.com/featured/?floor-lamp" },
  { id: 14, name: "Pendant Ceiling Light", category: "Lighting", price: 4999, state: "normal", image: "https://images.unsplash.com/featured/?ceiling-light" },
  { id: 15, name: "Luxury Curtain Set", category: "Curtains", price: 2999, state: "normal", image: "https://images.unsplash.com/featured/?curtains" },
  { id: 16, name: "Window Blinds", category: "Curtains", price: 3599, state: "normal", image: "https://images.unsplash.com/featured/?window-blinds" },
  { id: 17, name: "Soft Area Rug", category: "Rugs", price: 4499, state: "special", image: "https://images.unsplash.com/featured/?rug" },
  { id: 18, name: "Cotton Cushion Set", category: "Decor", price: 999, state: "normal", image: "https://images.unsplash.com/featured/?cushions" },
  { id: 19, name: "Luxury Throw Blanket", category: "Bedroom", price: 1599, state: "normal", image: "https://images.unsplash.com/featured/?blanket" },
  { id: 20, name: "Storage Cabinet", category: "Storage", price: 8999, state: "normal", image: "https://images.unsplash.com/featured/?cabinet" },
  { id: 21, name: "Kitchen Organizer", category: "Kitchen", price: 1299, state: "normal", image: "https://images.unsplash.com/featured/?kitchen-organizer" },
  { id: 22, name: "Dish Drying Rack", category: "Kitchen", price: 999, state: "normal", image: "https://images.unsplash.com/featured/?dish-rack" },
  { id: 23, name: "Knife Holder Set", category: "Kitchen", price: 1699, state: "normal", image: "https://images.unsplash.com/featured/?knife-set" },
  { id: 24, name: "Bathroom Shelf", category: "Bathroom", price: 1399, state: "discount", image: "https://images.unsplash.com/featured/?bathroom-shelf" },
  { id: 25, name: "Laundry Basket", category: "Laundry", price: 899, state: "normal", image: "https://images.unsplash.com/featured/?laundry-basket" },
  { id: 26, name: "Foldable Drying Stand", category: "Laundry", price: 1899, state: "normal", image: "https://images.unsplash.com/featured/?drying-rack" },
  { id: 27, name: "Premium Recliner Chair", category: "Furniture", price: 17999, state: "trending", image: "https://images.unsplash.com/featured/?recliner" },
  { id: 28, name: "Office Study Desk", category: "Office", price: 7499, state: "normal", image: "https://images.unsplash.com/featured/?study-desk" },
  { id: 29, name: "Ergonomic Office Chair", category: "Office", price: 9999, state: "normal", image: "https://images.unsplash.com/featured/?office-chair" },
  { id: 30, name: "Wooden Shoe Rack", category: "Storage", price: 3999, state: "normal", image: "https://images.unsplash.com/featured/?shoe-rack" },
  { id: 31, name: "Wall Clock", category: "Decor", price: 1499, state: "normal", image: "https://images.unsplash.com/featured/?wall-clock" },
  { id: 32, name: "Floating Wall Shelf", category: "Storage", price: 1799, state: "normal", image: "https://images.unsplash.com/featured/?wall-shelf" },
  { id: 33, name: "Luxury Bean Bag", category: "Furniture", price: 2999, state: "normal", image: "https://images.unsplash.com/featured/?bean-bag" },
  { id: 34, name: "Designer Chandelier", category: "Lighting", price: 14999, state: "special", image: "https://images.unsplash.com/featured/?chandelier" },
  { id: 35, name: "Scented Candle Set", category: "Decor", price: 799, state: "normal", image: "https://images.unsplash.com/featured/?candles" },
  { id: 36, name: "Luxury Bedsheet Set", category: "Bedroom", price: 2199, state: "normal", image: "https://images.unsplash.com/featured/?bedsheet" },
  { id: 37, name: "Decorative Lantern", category: "Decor", price: 1299, state: "discount", image: "https://images.unsplash.com/featured/?lantern" },
  { id: 38, name: "Foldable Stool", category: "Furniture", price: 999, state: "normal", image: "https://images.unsplash.com/featured/?stool" },
  { id: 39, name: "Kitchen Storage Containers", category: "Kitchen", price: 1499, state: "normal", image: "https://images.unsplash.com/featured/?storage-containers" },
  { id: 40, name: "Luxury Door Mat", category: "Decor", price: 899, state: "trending", image: "https://images.unsplash.com/featured/?door-mat" }
]);
  const [sports, setSports] = useState([
  { id: 1, name: "Professional Football", category: "Football", price: 999, state: "normal", image: "https://images.unsplash.com/featured/?football" },
  { id: 2, name: "Cricket Bat", category: "Cricket", price: 2499, state: "trending", image: "https://images.unsplash.com/featured/?cricket-bat" },
  { id: 3, name: "Cricket Ball Set", category: "Cricket", price: 599, state: "normal", image: "https://images.unsplash.com/featured/?cricket-ball" },
  { id: 4, name: "Tennis Racket", category: "Tennis", price: 3499, state: "normal", image: "https://images.unsplash.com/featured/?tennis-racket" },
  { id: 5, name: "Badminton Racket", category: "Badminton", price: 1699, state: "normal", image: "https://images.unsplash.com/featured/?badminton-racket" },
  { id: 6, name: "Basketball", category: "Basketball", price: 1199, state: "normal", image: "https://images.unsplash.com/featured/?basketball" },
  { id: 7, name: "Volleyball", category: "Volleyball", price: 899, state: "normal", image: "https://images.unsplash.com/featured/?volleyball" },
  { id: 8, name: "Table Tennis Paddle", category: "Table Tennis", price: 999, state: "discount", image: "https://images.unsplash.com/featured/?table-tennis" },
  { id: 9, name: "Yoga Mat", category: "Fitness", price: 899, state: "trending", image: "https://images.unsplash.com/featured/?yoga-mat" },
  { id: 10, name: "Resistance Bands", category: "Fitness", price: 699, state: "normal", image: "https://images.unsplash.com/featured/?resistance-bands" },
  { id: 11, name: "Adjustable Dumbbells", category: "Fitness", price: 6999, state: "special", image: "https://images.unsplash.com/featured/?dumbbells" },
  { id: 12, name: "Skipping Rope", category: "Fitness", price: 399, state: "normal", image: "https://images.unsplash.com/featured/?jump-rope" },
  { id: 13, name: "Push Up Bars", category: "Fitness", price: 799, state: "normal", image: "https://images.unsplash.com/featured/?push-up-bars" },
  { id: 14, name: "Foam Roller", category: "Recovery", price: 999, state: "normal", image: "https://images.unsplash.com/featured/?foam-roller" },
  { id: 15, name: "Sports Water Bottle", category: "Accessories", price: 499, state: "normal", image: "https://images.unsplash.com/featured/?sports-bottle" },
  { id: 16, name: "Running Shoes", category: "Footwear", price: 4499, state: "normal", image: "https://images.unsplash.com/featured/?running-shoes" },
  { id: 17, name: "Training Gloves", category: "Fitness", price: 799, state: "normal", image: "https://images.unsplash.com/featured/?gym-gloves" },
  { id: 18, name: "Sports Backpack", category: "Accessories", price: 1599, state: "normal", image: "https://images.unsplash.com/featured/?sports-backpack" },
  { id: 19, name: "Boxing Gloves", category: "Boxing", price: 1999, state: "trending", image: "https://images.unsplash.com/featured/?boxing-gloves" },
  { id: 20, name: "Punching Bag", category: "Boxing", price: 5999, state: "special", image: "https://images.unsplash.com/featured/?punching-bag" },
  { id: 21, name: "Swimming Goggles", category: "Swimming", price: 699, state: "normal", image: "https://images.unsplash.com/featured/?swimming-goggles" },
  { id: 22, name: "Swimming Cap", category: "Swimming", price: 399, state: "normal", image: "https://images.unsplash.com/featured/?swimming-cap" },
  { id: 23, name: "Cycling Helmet", category: "Cycling", price: 1799, state: "normal", image: "https://images.unsplash.com/featured/?cycling-helmet" },
  { id: 24, name: "Bicycle Pump", category: "Cycling", price: 699, state: "discount", image: "https://images.unsplash.com/featured/?bicycle-pump" },
  { id: 25, name: "Camping Tent", category: "Outdoor", price: 7999, state: "normal", image: "https://images.unsplash.com/featured/?camping-tent" },
  { id: 26, name: "Sleeping Bag", category: "Outdoor", price: 2499, state: "normal", image: "https://images.unsplash.com/featured/?sleeping-bag" },
  { id: 27, name: "Hiking Backpack", category: "Outdoor", price: 3499, state: "normal", image: "https://images.unsplash.com/featured/?hiking-backpack" },
  { id: 28, name: "Fishing Rod", category: "Fishing", price: 2799, state: "normal", image: "https://images.unsplash.com/featured/?fishing-rod" },
  { id: 29, name: "Archery Bow Set", category: "Archery", price: 6999, state: "special", image: "https://images.unsplash.com/featured/?archery-bow" },
  { id: 30, name: "Sports Stopwatch", category: "Accessories", price: 899, state: "normal", image: "https://images.unsplash.com/featured/?stopwatch" },
  { id: 31, name: "Gym Duffel Bag", category: "Accessories", price: 1699, state: "normal", image: "https://images.unsplash.com/featured/?gym-bag" },
  { id: 32, name: "Sports Cap", category: "Accessories", price: 499, state: "normal", image: "https://images.unsplash.com/featured/?sports-cap" },
  { id: 33, name: "Exercise Bench", category: "Fitness", price: 8999, state: "normal", image: "https://images.unsplash.com/featured/?workout-bench" },
  { id: 34, name: "Treadmill", category: "Fitness Equipment", price: 34999, state: "special", image: "https://images.unsplash.com/featured/?treadmill" },
  { id: 35, name: "Shin Guards", category: "Football", price: 799, state: "normal", image: "https://images.unsplash.com/featured/?shin-guards" },
  { id: 36, name: "Knee Support", category: "Fitness", price: 699, state: "normal", image: "https://images.unsplash.com/featured/?knee-support" },
  { id: 37, name: "Ankle Weights", category: "Fitness", price: 999, state: "discount", image: "https://images.unsplash.com/featured/?ankle-weights" },
  { id: 38, name: "Frisbee Disc", category: "Outdoor", price: 499, state: "normal", image: "https://images.unsplash.com/featured/?frisbee" },
  { id: 39, name: "Sports Whistle", category: "Accessories", price: 299, state: "normal", image: "https://images.unsplash.com/featured/?whistle" },
  { id: 40, name: "Agility Training Ladder", category: "Fitness", price: 1499, state: "trending", image: "https://images.unsplash.com/featured/?agility-ladder" }
]);

  return (
    <div>
      <contextData.Provider value={{mensFashion,setMensFashion,womensFashion,setWomensFashion,kidsFashion,setKidsFashion,elec,setElec,living,setLiving,sports,setSports}}>
        {props.children}
      </contextData.Provider>
    </div>
  )
}

export default Context
