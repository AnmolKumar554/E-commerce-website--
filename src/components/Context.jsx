import React, { createContext, useState } from 'react'

export const contextData=createContext()

const Context = (props) => {

  const [mensFashion, setMensFashion] = useState([
  {
    id: 1,
    name: "classic White T-Shirt",
    category: "T-Shirts",
    price: 599,
    state: "normal",
    qty: 1,
    image: "https://www.pro5usa.com/cdn/shop/files/ChatGPTImage2026_7_8_10_45_12_664b40bc-4790-4002-885f-199ee544ae81_1000x.png?v=1783535352"
  },
  {
    id: 2,
    name: "Slim Fit Blue Jeans",
    category: "Jeans",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://www.jackjones.in/cdn/shop/files/901654901_g0.jpg?v=1745348285&width=2048"
  },
  {
    id: 3,
    name: "Black Hoodie",
    category: "Hoodies",
    price: 1799,
    state: "trending",
    qty: 1,
    image: "https://www.dripmylook.in/cdn/shop/files/43faf63a49e7ca60aa5da2c5e3a00f866acdfa99_xl-1.jpg?v=1731052933&width=3840"
  },
  {
    id: 4,
    name: "Cotton Polo Shirt",
    category: "Polos",
    price: 899,
    state: "trending",
    qty: 1,
    image: "https://cdn02.nnnow.com/web-images/large/styles/Z7PW4Y1OQZ9/1758713746053/5.jpg"
  },
  {
    id: 5,
    name: "Grey Joggers",
    category: "Joggers",
    price: 1299,
    state: "normal",
    qty: 1,
    image: "https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/14814214-2615117868015129.jpg&format=webp&auto=avif"
  },
  {
    id: 6,
    name: "Formal White Shirt",
    category: "Shirts",
    price: 1399,
    state: "special",
    qty: 1,
    image: "https://imagescdn.louisphilippe.com/img/app/product/9/962928-17224804.jpg"
  },
  {
    id: 7,
    name: "Navy Chinos",
    category: "Pants",
    price: 1599,
    state: "normal",
    qty: 1,
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2290968/2018/10/10/50c09894-c97f-4edd-8e44-5acdb35764cb1539154717627-Roadster-Men-Navy-Blue-Slim-Fit-Basic-Chinos-654153915471535-1.jpg"
  },
  {
    id: 8,
    name: "Denim Jacket",
    category: "Jackets",
    price: 2499,
    state: "normal",
    qty: 1,
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/10948614/2025/2/15/c5f225d0-e38e-43cf-9c74-4034bc0561bd1739614460637-LOCOMOTIVE-Men-Blue-Solid-Denim-Jacket-4281739614460141-1.jpg"
  },
  {
    id: 9,
    name: "Oversized Graphic Tee",
    category: "T-Shirts",
    price: 799,
    state: "trending",
    qty: 1,
    image: "https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/14814588-1475297961101709.jpg&format=webp&auto=avif"
  },
  {
    id: 10,
    name: "Casual Check Shirt",
    category: "Shirts",
    price: 1199,
    state: "normal",
    qty: 1,
    image: "https://blackberrys.com/cdn/shop/files/Linen-Casual-Natural-Check-Shirt-Yori_ES013975A2_image1.jpg?v=1738673694"
  },
  {
    id: 11,
    name: "Olive Cargo Pants",
    category: "Cargo",
    price: 1899,
    state: "special",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHmem6C6ZYRSg20n2VeM0PQE2yTXZG8BWYgnKu0jEow&s=10"
  },
  {
    id: 12,
    name: "Leather Belt",
    category: "Accessories",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2SlOwH6FjXdYqikTqgYqnFaJSZaC96ENR0MtX8bZcA&s=10"
  },
  {
    id: 13,
    name: "Sports Cap",
    category: "Accessories",
    price: 499,
    state: "discount",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2quBkDq5wU2Uo5PT1ds3Xx9dDDTAU8AKY-N8E_wY2aE-tDUaNvRckSU&s=10"
  },
  {
    id: 14,
    name: "Running Shorts",
    category: "Shorts",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://contents.mediadecathlon.com/p2788785/4020e161104d6788c02e352f96b9d708/p2788785.jpg"
  },
  {
    id: 15,
    name: "Premium Sweatshirt",
    category: "Sweatshirts",
    price: 1999,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/514taa3JtYL._AC_UY1100_.jpg"
  },
  {
    id: 16,
    name: "Black Formal Trousers",
    category: "Pants",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://pantproject.com/cdn/shop/files/DSC6066_7cb89f33-37a7-4975-a82c-7d4fd3ff892e.jpg?v=1748333695&width=1080"
  },
  {
    id: 17,
    name: "Bomber Jacket",
    category: "Jackets",
    price: 2999,
    state: "special",
    qty: 1,
    image: "https://www.jackjones.in/cdn/shop/files/901832101_g0_e30909d0-0be3-4001-9489-e3f0812ccd79.jpg?v=1758709220&width=2048"
  },
  {
    id: 18,
    name: "Striped Casual Shirt",
    category: "Shirts",
    price: 1299,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6wb29kmwHz6tW5XuC4VjRIvjQa-xRjtI-UKkNnEdFoZ8BoP9Hi7KBMj8&s=10"
  },
  {
    id: 19,
    name: "Relaxed Fit Jeans",
    category: "Jeans",
    price: 1599,
    state: "normal",
    qty: 1,
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/31798528/2024/12/7/264ae7c9-6409-4f47-aa62-08f8e546f82a1733549523325-DENIMLOOK-Men-Relaxed-Fit-Stretchable-Jeans-9461733549522928-1.jpg"
  },
  {
    id: 20,
    name: "Zip-Up Hoodie",
    category: "Hoodies",
    price: 1899,
    state: "normal",
    qty: 1,
    image: "https://contents.mediadecathlon.com/p3084053/abb031d518d67d9c0900a3e0fb34388e/p3084053.jpg"
  },
  {
    id: 21,
    name: "Basic Black T-Shirt",
    category: "T-Shirts",
    price: 499,
    state: "normal",
    qty: 1,
    image: "https://www.cotstyle.com/cdn/shop/files/RN01_384991_S_Black.jpg?v=1685428877"
  },
  {
    id: 22,
    name: "Linen Summer Shirt",
    category: "Shirts",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://cottonfolk.in/cdn/shop/files/Men_s_collarless_summer_shirt_in_aqua.jpg?v=1748415278&width=2048"
  },
  {
    id: 23,
    name: "Khaki Chinos",
    category: "Pants",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://imagescdn.peterengland.com/img/app/product/9/931687-11833861.jpg"
  },
  {
    id: 24,
    name: "Athletic Track Pants",
    category: "Track Pants",
    price: 1399,
    state: "discount",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/71zEyWwT9YL._AC_UY1100_.jpg"
  },
  {
    id: 25,
    name: "Flannel Shirt",
    category: "Shirts",
    price: 1599,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqtsm3TA9Mcc_Cpets_5VxngO1etOplhM6M6PDyer7XTWWh3C-NT-rOw&s=10"
  },
  {
    id: 26,
    name: "Cargo Shorts",
    category: "Shorts",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://assets.ajio.com/medias/sys_master/root/20240324/ftE9/65ff808505ac7d77bbd4c6c6/-473Wx593H-467043456-grey-MODEL.jpg"
  },
  {
    id: 27,
    name: "Puffer Jacket",
    category: "Jackets",
    price: 3499,
    state: "trending",
    qty: 1,
    image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410500688011/Dz2gdqb0bG-410500688011_1.jpg"
  },
  {
    id: 28,
    name: "Crew Neck Sweater",
    category: "Sweaters",
    price: 1799,
    state: "normal",
    qty: 1,
    image: "https://levi.in/cdn/shop/files/001R30005_1_Front.jpg?v=1731411092"
  },
  {
    id: 29,
    name: "Leather Wallet",
    category: "Accessories",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCymsCONNJMYOIMq1KOruWdOVf8zgoByvKLvjW3VbUrgGiltt_95GcyHQe&s=10"
  },
  {
    id: 30,
    name: "Oxford Formal Shirt",
    category: "Shirts",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2R9M-1HE0FP1_n-mkk77J4UBM_kCF0mS4YNL3ULHeF4kuVR47WlsgXwr4&s=10"
  },
  {
    id: 31,
    name: "Distressed Denim Jeans",
    category: "Jeans",
    price: 1899,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/7182JqofIdL._AC_SR175,263_QL70_.jpg"
  },
  {
    id: 32,
    name: "Printed Polo Shirt",
    category: "Polos",
    price: 1099,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_36Xv4_8r3kHNzYN7Qh-TkJbtYAQzIjTKJf3nZSmE_3evdi39HrDzKye&s=10"
  },
  {
    id: 33,
    name: "Compression Gym Tee",
    category: "Sportswear",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/51kocitPHfL._AC_UY1100_.jpg"
  },
  {
    id: 34,
    name: "Winter Wool Coat",
    category: "Coats",
    price: 4999,
    state: "special",
    qty: 1,
    image: "https://cdn.woollen-wear.in/cache/data/coat/men-coats-2324/24511-cinnamon/24511-cinnamon-front-300x382.jpg"
  },
  {
    id: 35,
    name: "Cotton Vest",
    category: "Innerwear",
    price: 399,
    state: "normal",
    qty: 1,
    image: "https://ramrajcotton.in/cdn/shop/files/3_c25849f6-ddf9-44bb-b056-1295e0df991d.jpg?v=1784183999&width=1080"
  },
  {
    id: 36,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2499,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/71NqN1YxBfL._AC_UY1000_.jpg"
  },
  {
    id: 37,
    name: "Formal Leather Shoes",
    category: "Footwear",
    price: 3299,
    state: "discount",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8boDnKQ9ZBQf18OWphPVotLVmBcgWU6zP2mfZwMbYntfz4uWfHSZbS4&s=10"
  },
  {
    id: 38,
    name: "Canvas Slip-On Shoes",
    category: "Footwear",
    price: 1799,
    state: "normal",
    qty: 1,
    image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/C51643s.jpg?im=Resize,width=750"
  },
  {
    id: 39,
    name: "Analog Wrist Watch",
    category: "Accessories",
    price: 2799,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvurC9Y1GfKH3GnmdPeffSc-UYOV4HHSFGZp6ZPDDsdwB3-qTyUnhZyc0&s=10"
  },
  {
    id: 40,
    name: "classic Sunglasses",
    category: "Accessories",
    price: 1199,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnFDSKeDCi3RMWG2DI0_tb8bKY2exyrHHjBkAbUyG3neXcEnbSQF0JliB&s=10"
  }
]);
const [womensFashion, setWomensFashion] = useState([
  {
    id: 41,
    name: "classic White Crop Tee",
    category: "Tops",
    price: 649,
    state: "normal",
    qty: 1,
    image: "https://images.meesho.com/images/products/504487094/kch7t_512.webp?width=512"
  },
  {
    id: 42,
    name: "High Rise Skinny Jeans",
    category: "Jeans",
    price: 1599,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/71JN9Yb7ZBL._AC_UY1100_.jpg"
  },
  {
    id: 43,
    name: "Oversized Lavender Hoodie",
    category: "Hoodies",
    price: 1899,
    state: "trending",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/41U3+aczCbL.jpg"
  },
  {
    id: 44,
    name: "Ribbed Polo Top",
    category: "Tops",
    price: 949,
    state: "normal",
    qty: 1,
    image: "https://www.forevernew.co.in/cdn/shop/files/30479207_F.jpg?v=1784095579"
  },
  {
    id: 45,
    name: "Beige Lounge Joggers",
    category: "Joggers",
    price: 1399,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/41RTTwvhjkL.jpg"
  },
  {
    id: 46,
    name: "Silk Office Blouse",
    category: "Blouses",
    price: 1499,
    state: "special",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/81mD9i2Dl3L._AC_UY1100_.jpg"
  },
  {
    id: 47,
    name: "Cream Wide Leg Trousers",
    category: "Pants",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/6/96d7360JK4PKLSKN1_1.jpg?rnd=20200526195200&tr=w-512"
  },
  {
    id: 48,
    name: "Light Blue Denim Jacket",
    category: "Jackets",
    price: 2599,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DLZKjAYAJPKyBf3iH3QC0wd-J8nXRj6Gtru9E6BuvQZSGqAHThJi-iZ&s=10"
  },
  {
    id: 49,
    name: "Pastel Graphic Tee",
    category: "Tops",
    price: 849,
    state: "trending",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/71jNO7kt7uL._AC_UY1100_.jpg"
  },
  {
    id: 50,
    name: "Plaid Casual Shirt",
    category: "Shirts",
    price: 1249,
    state: "normal",
    qty: 1,
    image: "https://static.cilory.com/781368-thickbox_default/navy-tartan-checkered-flannel-casual-shirt.jpg.webp"
  },
  {
    id: 51,
    name: "Olive Cargo Trousers",
    category: "Cargo",
    price: 1949,
    state: "normal",
    qty: 1,
    image: "https://www.veromoda.in/cdn/shop/files/901825201_g0_98c0dd8d-c5e9-448e-b3d6-721a2bbb02e1.jpg?v=1760351048&width=2048"
  },
  {
    id: 52,
    name: "classic Leather Handbag",
    category: "Accessories",
    price: 1799,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/613yzL9z1zL._AC_UY1000_.jpg"
  },
  {
    id: 53,
    name: "Minimalist Baseball Cap",
    category: "Accessories",
    price: 549,
    state: "discount",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/51Aym1hgTNL._AC_UY1100_.jpg"
  },
  {
    id: 54,
    name: "Active Running Shorts",
    category: "Shorts",
    price: 949,
    state: "normal",
    qty: 1,
    image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/short/p/0/h/xs-ab-sh-01-bl-activebug-original-imaha63vzcmknffj.jpeg?q=70"
  },
  {
    id: 55,
    name: "Soft Fleece Sweatshirt",
    category: "Sweatshirts",
    price: 2049,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/91iK7Me6-0L._AC_UY1100_.jpg"
  },
  {
    id: 56,
    name: "Straight Fit Office Pants",
    category: "Pants",
    price: 1749,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SKLo5hGKwTDvM-_8wqNALUfmBkDfTATOCoqSZr0El0hibHRYyQ0waik&s=10"
  },
  {
    id: 57,
    name: "Cropped Bomber Jacket",
    category: "Jackets",
    price: 3099,
    state: "special",
    qty: 1,
    image: "https://cdn.media.amplience.net/i/ego/CLN0008_CHWSEGJK08RDD661CJ_GR_25P2_base__75665?fmt=auto&qlt=default&w=auto&h=auto"
  },
  {
    id: 58,
    name: "Striped Linen Shirt",
    category: "Shirts",
    price: 1349,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qtOu8gv1Ca_YYJU3395eTKA7o292EvXabVstjl97MGNBqlOu8NNSxQo&s=10"
  },
  {
    id: 59,
    name: "Relaxed Mom Jeans",
    category: "Jeans",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTgH5MLxKU_erFdenLnaQxwBFtTfTHP3g-grfBiRb4UwmvfjxQTpO700&s=10"
  },
  {
    id: 60,
    name: "Zip Front Hoodie",
    category: "Hoodies",
    price: 1949,
    state: "normal",
    qty: 1,
    image: "https://contents.mediadecathlon.com/p2730941/6ffec7995612c09ef3bcae95b28f1543/p2730941.jpg"
  },
  {
    id: 61,
    name: "Basic Black Tank Top",
    category: "Tops",
    price: 549,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/61E5udqbb8L._AC_UY1100_.jpg"
  },
  {
    id: 62,
    name: "Summer Floral Blouse",
    category: "Blouses",
    price: 1549,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/81SCR6lzMaL._AC_UY1100_.jpg"
  },
  {
    id: 63,
    name: "Khaki Wide Pants",
    category: "Pants",
    price: 1549,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReowGIy4Lc-gFddQLqwtyJk4_Ryjfzf5L4JEXK69tc8VEYfo2k_Yu0mI&s=10"
  },
  {
    id: 64,
    name: "Performance Leggings",
    category: "Leggings",
    price: 1499,
    state: "discount",
    qty: 1,
    image: "https://www.jockey.in/cdn/shop/files/MW68_BLACK_0103_S223_JKY_1.webp?v=1702370251&width=560"
  },
  {
    id: 65,
    name: "Checked Flannel Shirt",
    category: "Shirts",
    price: 1649,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsus5OCFbKJIa5TJFOVWrM9Z6xHn9TyrLeBuQ-ldUuBsICmO8mcc3nOgQt&s=10"
  },
  {
    id: 66,
    name: "Denim Mini Skirt",
    category: "Skirts",
    price: 1099,
    state: "normal",
    qty: 1,
    image: "https://www.only.in/cdn/shop/files/902111601_g2_763d612b-3123-4ada-95c1-efcb03c5dce4.jpg?v=1752845750&width=1080"
  },
  {
    id: 67,
    name: "Quilted Puffer Jacket",
    category: "Jackets",
    price: 3599,
    state: "trending",
    qty: 1,
    image: "https://www.only.in/cdn/shop/files/900781401_g0.jpg?v=1745910840&width=2048"
  },
  {
    id: 68,
    name: "Knitted Crew Sweater",
    category: "Sweaters",
    price: 1849,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/81LfTCEC45L._AC_UY1100_.jpg"
  },
  {
    id: 69,
    name: "Elegant Crossbody Bag",
    category: "Accessories",
    price: 1899,
    state: "normal",
    qty: 1,
    image: "https://ajantashoes.com/cdn/shop/files/VB8008_Creative_5.jpg?v=1768637560&width=2160"
  },
  {
    id: 70,
    name: "classic Oxford Blouse",
    category: "Blouses",
    price: 1749,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/81UcdOzzHOL._AC_UY1100_.jpg"
  },
  {
    id: 71,
    name: "Ripped Boyfriend Jeans",
    category: "Jeans",
    price: 1949,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TTSotQmuQ8Ni7KHVfd-eUQjfuXtrjfpUumX4_quaL01zo99VZu728L51&s=10"
  },
  {
    id: 72,
    name: "Printed Summer Top",
    category: "Tops",
    price: 1149,
    state: "normal",
    qty: 1,
    image: "https://littlewish.in/wp-content/uploads/2025/02/default_1_1_695e038a-5409-42a3-9fc5-7940bfe235a3.jpg"
  },
  {
    id: 73,
    name: "Performance Gym Tank",
    category: "Sportswear",
    price: 949,
    state: "normal",
    qty: 1,
    image: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/FEBRUARY/21/wjmzpO7D_475bb3fc671d474ca616bff3c4f2f9dc.jpg"
  },
  {
    id: 74,
    name: "Long Wool Overcoat",
    category: "Coats",
    price: 5199,
    state: "special",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/61ub2vcGi4L._AC_UY1100_.jpg"
  },
  {
    id: 75,
    name: "Cotton Camisole",
    category: "Innerwear",
    price: 449,
    state: "normal",
    qty: 1,
    image: "https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI6100-White/1_medium/zivame-square-neck-camisole-white.jpg?t=1764664362"
  },
  {
    id: 76,
    name: "Chunky White Sneakers",
    category: "Footwear",
    price: 2599,
    state: "normal",
    qty: 1,
    image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/shoe/3/7/v/4-1006-34-killer-white-original-imahgf24sngpmhqf.jpeg?q=70"
  },
  {
    id: 77,
    name: "classic Block Heels",
    category: "Footwear",
    price: 3399,
    state: "discount",
    qty: 1,
    image: "https://shopgnist.com/cdn/shop/files/GN-H-566-Black_1_1080x1080.jpg?v=1721724952"
  },
  {
    id: 78,
    name: "Canvas Slip-On Flats",
    category: "Footwear",
    price: 1849,
    state: "normal",
    qty: 1,
    image: "https://img.kwcdn.com/product/fancy/1d9e262e-4268-4b87-b750-81c58d8a3a7d.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
  },
  {
    id: 79,
    name: "Rose Gold Wrist Watch",
    category: "Accessories",
    price: 2899,
    state: "normal",
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6F4peQOJnBUVxxK6wL6jWKO0XZXo2eI4vmNaI_9RwT8oHzaC-kKpHoIm4&s=10"
  },
  {
    id: 80,
    name: "Cat Eye Sunglasses",
    category: "Accessories",
    price: 1299,
    state: "normal",
    qty: 1,
    image: "https://m.media-amazon.com/images/I/612cCq3wJZL._AC_UY350_.jpg"
  }
]);
const [kidsFashion, setKidsFashion] = useState([
  {
    id: 81,
    name: "Superhero Graphic T-Shirt",
    category: "T-Shirts",
    price: 399,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,tshirt"
  },
  {
    id: 82,
    name: "Stretch Denim Jeans",
    category: "Jeans",
    price: 799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,jeans"
  },
  {
    id: 83,
    name: "Dinosaur Print Hoodie",
    category: "Hoodies",
    price: 999,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,hoodie"
  },
  {
    id: 84,
    name: "Rainbow Cotton Top",
    category: "Tops",
    price: 499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,top"
  },
  {
    id: 85,
    name: "Soft Cotton Joggers",
    category: "Joggers",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,joggers"
  },
  {
    id: 86,
    name: "Party Wear Dress",
    category: "Dresses",
    price: 1299,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,dress"
  },
  {
    id: 87,
    name: "School Uniform Pants",
    category: "Pants",
    price: 799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,pants"
  },
  {
    id: 88,
    name: "Blue Denim Jacket",
    category: "Jackets",
    price: 1399,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,denim,jacket"
  },
  {
    id: 89,
    name: "Cartoon Print Tee",
    category: "T-Shirts",
    price: 449,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,cartoon,tshirt"
  },
  {
    id: 90,
    name: "Checked Casual Shirt",
    category: "Shirts",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,shirt"
  },
  {
    id: 91,
    name: "Cargo Shorts",
    category: "Shorts",
    price: 649,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,cargo,shorts"
  },
  {
    id: 92,
    name: "Cute Backpack",
    category: "Accessories",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,backpack"
  },
  {
    id: 93,
    name: "Baseball Cap",
    category: "Accessories",
    price: 349,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,cap"
  },
  {
    id: 94,
    name: "Sports Shorts",
    category: "Shorts",
    price: 499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,sports,shorts"
  },
  {
    id: 95,
    name: "Warm Fleece Sweatshirt",
    category: "Sweatshirts",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,sweatshirt"
  },
  {
    id: 96,
    name: "School Formal Trousers",
    category: "Pants",
    price: 849,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,trousers"
  },
  {
    id: 97,
    name: "Puffer Winter Jacket",
    category: "Jackets",
    price: 1699,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,puffer,jacket"
  },
  {
    id: 98,
    name: "Striped Polo Shirt",
    category: "Polos",
    price: 649,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,polo"
  },
  {
    id: 99,
    name: "Elastic Waist Jeans",
    category: "Jeans",
    price: 849,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,elastic,jeans"
  },
  {
    id: 100,
    name: "Zip-Up Hoodie",
    category: "Hoodies",
    price: 1049,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,zip,hoodie"
  },
  {
    id: 101,
    name: "Basic Cotton Tee",
    category: "T-Shirts",
    price: 349,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,cotton,tshirt"
  },
  {
    id: 102,
    name: "Floral Summer Dress",
    category: "Dresses",
    price: 1199,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,summer,dress"
  },
  {
    id: 103,
    name: "Comfort Fit Leggings",
    category: "Leggings",
    price: 549,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,leggings"
  },
  {
    id: 104,
    name: "Track Pants",
    category: "Track Pants",
    price: 749,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,track,pants"
  },
  {
    id: 105,
    name: "Flannel Shirt",
    category: "Shirts",
    price: 749,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,flannel,shirt"
  },
  {
    id: 106,
    name: "Pleated Skirt",
    category: "Skirts",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,skirt"
  },
  {
    id: 107,
    name: "Quilted Jacket",
    category: "Jackets",
    price: 1799,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,quilted,jacket"
  },
  {
    id: 108,
    name: "Knitted Sweater",
    category: "Sweaters",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,sweater"
  },
  {
    id: 109,
    name: "Mini Crossbody Bag",
    category: "Accessories",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,bag"
  },
  {
    id: 110,
    name: "School Blazer",
    category: "Blazers",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,blazer"
  },
  {
    id: 111,
    name: "Printed Overalls",
    category: "Overalls",
    price: 1099,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,overalls"
  },
  {
    id: 112,
    name: "Animal Print Sweatshirt",
    category: "Sweatshirts",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,animal,sweatshirt"
  },
  {
    id: 113,
    name: "Sports Jersey",
    category: "Sportswear",
    price: 649,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,sportswear"
  },
  {
    id: 114,
    name: "Winter Wool Coat",
    category: "Coats",
    price: 1999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,winter,coat"
  },
  {
    id: 115,
    name: "Cotton Pajama Set",
    category: "Sleepwear",
    price: 799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,pajamas"
  },
  {
    id: 116,
    name: "Velcro Sneakers",
    category: "Footwear",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,sneakers"
  },
  {
    id: 117,
    name: "School Shoes",
    category: "Footwear",
    price: 1199,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,school,shoes"
  },
  {
    id: 118,
    name: "Canvas Slip-On Shoes",
    category: "Footwear",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,canvas,shoes"
  },
  {
    id: 119,
    name: "Digital Kids Watch",
    category: "Accessories",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,watch"
  },
  {
    id: 120,
    name: "Character Sunglasses",
    category: "Accessories",
    price: 449,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/featured/?kids,sunglasses"
  }
]);
const [elec, setElec] = useState([
  {
    id: 121,
    name: "Wireless Bluetooth Earbuds",
    category: "Audio",
    price: 2499,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 122,
    name: "Noise Cancelling Headphones",
    category: "Audio",
    price: 4999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 123,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 1999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 124,
    name: "Smart Watch Pro",
    category: "Wearables",
    price: 3999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 125,
    name: "Fitness Smart Band",
    category: "Wearables",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 126,
    name: "Gaming Mouse RGB",
    category: "Computer Accessories",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 127,
    name: "Mechanical Keyboard",
    category: "Computer Accessories",
    price: 2999,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 128,
    name: "1080p Webcam",
    category: "Computer Accessories",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 129,
    name: "27-inch IPS Monitor",
    category: "Monitors",
    price: 12999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 130,
    name: "USB-C Docking Station",
    category: "Computer Accessories",
    price: 3499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 131,
    name: "1TB External SSD",
    category: "Storage",
    price: 6999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 132,
    name: "128GB USB Flash Drive",
    category: "Storage",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 133,
    name: "Wi-Fi 6 Router",
    category: "Networking",
    price: 4499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1640552435388-a54879e72b28?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 134,
    name: "Wireless Charger",
    category: "Mobile Accessories",
    price: 1299,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1591290619762-c588e9a0e3c1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 135,
    name: "20,000mAh Power Bank",
    category: "Mobile Accessories",
    price: 1999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1609592424843-3f4e2e3b5b4c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 136,
    name: "65W Fast Charger",
    category: "Mobile Accessories",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 137,
    name: "Premium USB-C Cable",
    category: "Mobile Accessories",
    price: 499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 138,
    name: "Action Camera 4K",
    category: "Cameras",
    price: 14999,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 139,
    name: "Mirrorless Camera",
    category: "Cameras",
    price: 54999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 140,
    name: "Camera Tripod",
    category: "Photography",
    price: 1999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 141,
    name: "Drone with 4K Camera",
    category: "Drones",
    price: 34999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 142,
    name: "Gaming Controller",
    category: "Gaming",
    price: 2999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 143,
    name: "VR Headset",
    category: "Gaming",
    price: 24999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 144,
    name: "Laptop Cooling Pad",
    category: "Laptop Accessories",
    price: 1499,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 145,
    name: "15.6-inch Laptop Backpack",
    category: "Laptop Accessories",
    price: 1899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 146,
    name: "LED Desk Lamp",
    category: "Home Electronics",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 147,
    name: "Smart LED Bulb",
    category: "Smart Home",
    price: 799,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 148,
    name: "Smart Plug",
    category: "Smart Home",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 149,
    name: "Home Security Camera",
    category: "Smart Home",
    price: 3499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 150,
    name: "Portable Mini Projector",
    category: "Projectors",
    price: 8999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 151,
    name: "32-inch Smart TV",
    category: "Televisions",
    price: 17999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 152,
    name: "Android TV Box",
    category: "Entertainment",
    price: 2499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 153,
    name: "Electric Kettle",
    category: "Home Appliances",
    price: 1599,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1594213114663-d94db9b1714b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 154,
    name: "Air Fryer XL",
    category: "Home Appliances",
    price: 6499,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1648136244558-7e6b0b7c7a0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 155,
    name: "Robot Vacuum Cleaner",
    category: "Home Appliances",
    price: 15999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 156,
    name: "Digital Alarm Clock",
    category: "Home Electronics",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 157,
    name: "Portable Mini Fan",
    category: "Home Electronics",
    price: 699,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1523371683702-48f7e7a2c6e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 158,
    name: "Wireless Presentation Clicker",
    category: "Office Electronics",
    price: 1299,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 159,
    name: "Portable SSD 2TB",
    category: "Storage",
    price: 11999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 160,
    name: "USB RGB Light Bar",
    category: "Computer Accessories",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=800&q=80"
  }
]);
const [living, setLiving] = useState([
  {
    id: 161,
    name: "Modern Fabric Sofa",
    category: "Furniture",
    price: 24999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 162,
    name: "Wooden Coffee Table",
    category: "Furniture",
    price: 6499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 163,
    name: "Queen Size Bed Frame",
    category: "Bedroom",
    price: 18999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 164,
    name: "Memory Foam Mattress",
    category: "Bedroom",
    price: 12999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 165,
    name: "Bedside Table",
    category: "Bedroom",
    price: 3499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 166,
    name: "Bookshelf",
    category: "Furniture",
    price: 5499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 167,
    name: "Dining Table Set",
    category: "Dining",
    price: 22999,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 168,
    name: "Dining Chair",
    category: "Dining",
    price: 2999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 169,
    name: "Decorative Wall Mirror",
    category: "Decor",
    price: 2499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 170,
    name: "Canvas Wall Art",
    category: "Decor",
    price: 1999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 171,
    name: "Indoor Plant Pot",
    category: "Decor",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 172,
    name: "Ceramic Flower Vase",
    category: "Decor",
    price: 1299,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 173,
    name: "LED Floor Lamp",
    category: "Lighting",
    price: 3999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 174,
    name: "Pendant Ceiling Light",
    category: "Lighting",
    price: 4999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 175,
    name: "Luxury Curtain Set",
    category: "Curtains",
    price: 2999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 176,
    name: "Window Blinds",
    category: "Curtains",
    price: 3599,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 177,
    name: "Soft Area Rug",
    category: "Rugs",
    price: 4499,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 178,
    name: "Cotton Cushion Set",
    category: "Decor",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 179,
    name: "Luxury Throw Blanket",
    category: "Bedroom",
    price: 1599,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1580301762395-21ce6a3437d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 180,
    name: "Storage Cabinet",
    category: "Storage",
    price: 8999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 181,
    name: "Kitchen Organizer",
    category: "Kitchen",
    price: 1299,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 182,
    name: "Dish Drying Rack",
    category: "Kitchen",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 183,
    name: "Knife Holder Set",
    category: "Kitchen",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 184,
    name: "Bathroom Shelf",
    category: "Bathroom",
    price: 1399,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 185,
    name: "Laundry Basket",
    category: "Laundry",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1610557892470-ae8e5b0f4c8a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 186,
    name: "Foldable Drying Stand",
    category: "Laundry",
    price: 1899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 187,
    name: "Premium Recliner Chair",
    category: "Furniture",
    price: 17999,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 188,
    name: "Office Study Desk",
    category: "Office",
    price: 7499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 189,
    name: "Ergonomic Office Chair",
    category: "Office",
    price: 9999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 190,
    name: "Wooden Shoe Rack",
    category: "Storage",
    price: 3999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 191,
    name: "Wall Clock",
    category: "Decor",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 192,
    name: "Floating Wall Shelf",
    category: "Storage",
    price: 1799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 193,
    name: "Luxury Bean Bag",
    category: "Furniture",
    price: 2999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 194,
    name: "Designer Chandelier",
    category: "Lighting",
    price: 14999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 195,
    name: "Scented Candle Set",
    category: "Decor",
    price: 799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 196,
    name: "Luxury Bedsheet Set",
    category: "Bedroom",
    price: 2199,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 197,
    name: "Decorative Lantern",
    category: "Decor",
    price: 1299,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 198,
    name: "Foldable Stool",
    category: "Furniture",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 199,
    name: "Kitchen Storage Containers",
    category: "Kitchen",
    price: 1499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1584269600519-112d071b35c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 200,
    name: "Luxury Door Mat",
    category: "Decor",
    price: 899,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
  }
]);
const [sports, setSports] = useState([
  {
    id: 201,
    name: "Professional Football",
    category: "Football",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 202,
    name: "Cricket Bat",
    category: "Cricket",
    price: 2499,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 203,
    name: "Cricket Ball Set",
    category: "Cricket",
    price: 599,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 204,
    name: "Tennis Racket",
    category: "Tennis",
    price: 3499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 205,
    name: "Badminton Racket",
    category: "Badminton",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 206,
    name: "Basketball",
    category: "Basketball",
    price: 1199,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 207,
    name: "Volleyball",
    category: "Volleyball",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 208,
    name: "Table Tennis Paddle",
    category: "Table Tennis",
    price: 999,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 209,
    name: "Yoga Mat",
    category: "Fitness",
    price: 899,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 210,
    name: "Resistance Bands",
    category: "Fitness",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 211,
    name: "Adjustable Dumbbells",
    category: "Fitness",
    price: 6999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 212,
    name: "Skipping Rope",
    category: "Fitness",
    price: 399,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 213,
    name: "Push Up Bars",
    category: "Fitness",
    price: 799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1598971639058-999f4e1b6f3c?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 214,
    name: "Foam Roller",
    category: "Recovery",
    price: 999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 215,
    name: "Sports Water Bottle",
    category: "Accessories",
    price: 499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 216,
    name: "Running Shoes",
    category: "Footwear",
    price: 4499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 217,
    name: "Training Gloves",
    category: "Fitness",
    price: 799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1583473848882-4c7e5a0c2e8c?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 218,
    name: "Sports Backpack",
    category: "Accessories",
    price: 1599,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 219,
    name: "Boxing Gloves",
    category: "Boxing",
    price: 1999,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 220,
    name: "Punching Bag",
    category: "Boxing",
    price: 5999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 221,
    name: "Swimming Goggles",
    category: "Swimming",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 222,
    name: "Swimming Cap",
    category: "Swimming",
    price: 399,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 223,
    name: "Cycling Helmet",
    category: "Cycling",
    price: 1799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 224,
    name: "Bicycle Pump",
    category: "Cycling",
    price: 699,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 225,
    name: "Camping Tent",
    category: "Outdoor",
    price: 7999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 226,
    name: "Sleeping Bag",
    category: "Outdoor",
    price: 2499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b84e9c7e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 227,
    name: "Hiking Backpack",
    category: "Outdoor",
    price: 3499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 228,
    name: "Fishing Rod",
    category: "Fishing",
    price: 2799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1508182311256-e3f7d8b8d0c8?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 229,
    name: "Archery Bow Set",
    category: "Archery",
    price: 6999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1532322234377-4c2f1f0a8b8c?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 230,
    name: "Sports Stopwatch",
    category: "Accessories",
    price: 899,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 231,
    name: "Gym Duffel Bag",
    category: "Accessories",
    price: 1699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 232,
    name: "Sports Cap",
    category: "Accessories",
    price: 499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 233,
    name: "Exercise Bench",
    category: "Fitness",
    price: 8999,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 234,
    name: "Treadmill",
    category: "Fitness Equipment",
    price: 34999,
    state: "special",
    qty: 1,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 235,
    name: "Shin Guards",
    category: "Football",
    price: 799,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 236,
    name: "Knee Support",
    category: "Fitness",
    price: 699,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 237,
    name: "Ankle Weights",
    category: "Fitness",
    price: 999,
    state: "discount",
    qty: 1,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 238,
    name: "Frisbee Disc",
    category: "Outdoor",
    price: 499,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 239,
    name: "Sports Whistle",
    category: "Accessories",
    price: 299,
    state: "normal",
    qty: 1,
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 240,
    name: "Agility Training Ladder",
    category: "Fitness",
    price: 1499,
    state: "trending",
    qty: 1,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80"
  }
]);
  const [cart, setCart] = useState([])

  const [total, setTotal] = useState(0)
  return (
    <div>
      <contextData.Provider value={{mensFashion,setMensFashion,womensFashion,setWomensFashion,kidsFashion,setKidsFashion,elec,setElec,living,setLiving,sports,setSports,cart,setCart,total,setTotal}}>
        {props.children}
      </contextData.Provider>
    </div>
  )
}

export default Context
