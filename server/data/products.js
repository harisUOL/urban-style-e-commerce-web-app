const products = [
  {
    "name": "ASOS Oversized Check Scarf",
    "category": "accessories",
    "price": 18,
    "description": "Soft oversized checkered scarf providing warmth and style.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-woven-oversized-check-scarf-in-mono/208750221-1-black",
    "inStock": 30
  },
  {
    "name": "New Balance 204L Trainers",
    "category": "shoes",
    "price": 110,
    "description": "Comfortable unisex trainers featuring a modern design.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/new-balance-204l-unisex-trainers-in-white-and-brown/208638730-1-white",
    "inStock": 20
  },
  {
    "name": "Rains Rolltop Backpack",
    "category": "bags",
    "price": 119,
    "description": "Durable waterproof rolltop backpack perfect for daily commuting.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/rains-trail-rolltop-backpack-in-black/208706881-1-01black",
    "inStock": 15
  },
  {
    "name": "Polo Ralph Lauren Navy Beanie & Scarf Set",
    "category": "accessories",
    "price": 145,
    "description": "Premium cotton knit beanie and scarf set for cold-weather style.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/polo-ralph-lauren-icon-logo-cotton-knit-beanie-scarf-set-in-navy-marl/208815226-1-navymarl",
    "inStock": 10
  },
  {
    "name": "ASOS Leather Wallet",
    "category": "accessories",
    "price": 20,
    "description": "Minimal black leather wallet with a sleek design.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-pebbled-leather-wallet-in-black/209429924-1-black",
    "inStock": 40
  },
  {
    "name": "New Balance 2002 Trainers",
    "category": "shoes",
    "price": 130,
    "description": "Stylish beige and black New Balance trainers with great cushioning.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/new-balance-2002-trainers-in-beige-and-black/208531081-1-black",
    "inStock": 25
  },
  {
    "name": "Polo Wool Blend Scarf",
    "category": "accessories",
    "price": 95,
    "description": "Luxury wool-blend scarf with subtle Polo Ralph Lauren branding.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/polo-ralph-lauren-classic-rich-wool-blend-scarf-with-logo-in-cream/208815431-1-taupecream",
    "inStock": 18
  },
  {
    "name": "Nike Air Max TL 2.5 Grey",
    "category": "shoes",
    "price": 165,
    "description": "Breathable and stylish Nike trainers with premium cushioning.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/nike-air-max-tl-25-trainers-in-grey-and-brown/208581442-1-grey",
    "inStock": 22
  },
  {
    "name": "Barbour Lambswool Scarf",
    "category": "accessories",
    "price": 30,
    "description": "Soft lambswool scarf in a classic Barbour pattern.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/barbour-plain-lambswool-scarf-in-light-grey-marl/209215880-1-lightgreymarl",
    "inStock": 30
  },
  {
    "name": "Nike Running Miler Blue Tee",
    "category": "shirts",
    "price": 33,
    "description": "Lightweight and breathable running T-shirt made with Dri-FIT technology.",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.asos-media.com/products/nike-running-miler-dri-fit-t-shirt-in-blue/208576761-1-midblue",
    "inStock": 45
  },
  {
    "name": "Nike Tech Fleece Joggers",
    "category": "trousers",
    "price": 99,
    "description": "Premium tech fleece joggers with reflective detailing.",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.asos-media.com/products/nike-tech-fleece-reflective-joggers-in-black/208579831-1-black",
    "inStock": 20
  },
  {
    "name": "ASOS Brown Mule Slippers",
    "category": "shoes",
    "price": 24,
    "description": "Comfortable fleece-lined mule slippers perfect for home.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/asos-design-mule-slippers-in-brown-with-fleece-lining/208879733-1-brown",
    "inStock": 35
  },
  {
    "name": "Paul Smith Navy Cardholder",
    "category": "accessories",
    "price": 90,
    "description": "Luxury compact navy leather cardholder by Paul Smith.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/paul-smith-cardholder-in-navy/208474926-1-navy",
    "inStock": 12
  },
  {
    "name": "ASOS Cream Heavyweight Tee",
    "category": "shirts",
    "price": 25,
    "description": "Super heavyweight oversized T-shirt in cream.",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.asos-media.com/products/asos-collective-ac-t-253-super-heavyweight-oversized-t-shirt-in-cream/208841446-1-tofu",
    "inStock": 42
  },
  {
    "name": "Nike 9060 Grey Trainers",
    "category": "shoes",
    "price": 160,
    "description": "Chunky 9060 sneakers combining retro style and modern comfort.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/new-balance-9060-unisex-trainers-in-grey/208530942-1-black",
    "inStock": 16
  },
  {
    "name": "Carhartt WIP Black Gloves",
    "category": "accessories",
    "price": 27,
    "description": "Warm and durable gloves crafted from quality materials.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/carhartt-wip-watch-gloves-in-black/208995681-1-black",
    "inStock": 28
  },
  {
    "name": "Nike Air Max TL Yellow",
    "category": "shoes",
    "price": 165,
    "description": "Nike Air Max TL 2.5 trainers with bold yellow detailing.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/nike-air-max-tl-25-trainers-in-grey-and-yellow/208581321-1-grey",
    "inStock": 14
  },
  {
    "name": "ASOS Black Card Holder",
    "category": "accessories",
    "price": 12,
    "description": "Compact black card holder with minimalist design.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-card-holder-in-black/208870806-1-black",
    "inStock": 45
  },
  {
    "name": "ASOS Brushed Scarf Chocolate Brown",
    "category": "accessories",
    "price": 16,
    "description": "Soft chocolate brown brushed scarf for winter warmth.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-woven-brushed-scarf-in-chocolate-brown/208750356-1-brown",
    "inStock": 38
  },
  {
    "name": "Classic White T-Shirt",
    "category": "shirts",
    "price": 25,
    "description": "Soft cotton white tee perfect for everyday wear.",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "inStock": 50
  },
  {
    "name": "ASOS Oversized Check Scarf",
    "category": "accessories",
    "price": 18,
    "description": "Soft oversized checkered scarf providing warmth and style.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-woven-oversized-check-scarf-in-mono/208750221-1-black",
    "inStock": 30
  },
  {
    "name": "New Balance 204L Trainers",
    "category": "shoes",
    "price": 110,
    "description": "Comfortable unisex trainers featuring a modern design.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/new-balance-204l-unisex-trainers-in-white-and-brown/208638730-1-white",
    "inStock": 20
  },
  {
    "name": "Rains Rolltop Backpack",
    "category": "bags",
    "price": 119,
    "description": "Durable waterproof rolltop backpack perfect for daily commuting.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/rains-trail-rolltop-backpack-in-black/208706881-1-01black",
    "inStock": 15
  },
  {
    "name": "Polo Ralph Lauren Navy Beanie & Scarf Set",
    "category": "accessories",
    "price": 145,
    "description": "Premium cotton knit beanie and scarf set for cold-weather style.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/polo-ralph-lauren-icon-logo-cotton-knit-beanie-scarf-set-in-navy-marl/208815226-1-navymarl",
    "inStock": 10
  },
  {
    "name": "ASOS Leather Wallet",
    "category": "accessories",
    "price": 20,
    "description": "Minimal black leather wallet with a sleek design.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-pebbled-leather-wallet-in-black/209429924-1-black",
    "inStock": 40
  },
  {
    "name": "New Balance 2002 Trainers",
    "category": "shoes",
    "price": 130,
    "description": "Stylish beige and black New Balance trainers with great cushioning.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/new-balance-2002-trainers-in-beige-and-black/208531081-1-black",
    "inStock": 25
  },
  {
    "name": "Polo Wool Blend Scarf",
    "category": "accessories",
    "price": 95,
    "description": "Luxury wool-blend scarf with subtle Polo Ralph Lauren branding.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/polo-ralph-lauren-classic-rich-wool-blend-scarf-with-logo-in-cream/208815431-1-taupecream",
    "inStock": 18
  },
  {
    "name": "Nike Air Max TL 2.5 Grey",
    "category": "shoes",
    "price": 165,
    "description": "Breathable and stylish Nike trainers with premium cushioning.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/nike-air-max-tl-25-trainers-in-grey-and-brown/208581442-1-grey",
    "inStock": 22
  },
  {
    "name": "Barbour Lambswool Scarf",
    "category": "accessories",
    "price": 30,
    "description": "Soft lambswool scarf in a classic Barbour pattern.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/barbour-plain-lambswool-scarf-in-light-grey-marl/209215880-1-lightgreymarl",
    "inStock": 30
  },
  {
    "name": "Nike Running Miler Blue Tee",
    "category": "shirts",
    "price": 33,
    "description": "Lightweight and breathable running T-shirt made with Dri-FIT technology.",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.asos-media.com/products/nike-running-miler-dri-fit-t-shirt-in-blue/208576761-1-midblue",
    "inStock": 45
  },
  {
    "name": "Nike Tech Fleece Joggers",
    "category": "trousers",
    "price": 99,
    "description": "Premium tech fleece joggers with reflective detailing.",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.asos-media.com/products/nike-tech-fleece-reflective-joggers-in-black/208579831-1-black",
    "inStock": 20
  },
  {
    "name": "ASOS Brown Mule Slippers",
    "category": "shoes",
    "price": 24,
    "description": "Comfortable fleece-lined mule slippers perfect for home.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/asos-design-mule-slippers-in-brown-with-fleece-lining/208879733-1-brown",
    "inStock": 35
  },
  {
    "name": "Paul Smith Navy Cardholder",
    "category": "accessories",
    "price": 90,
    "description": "Luxury compact navy leather cardholder by Paul Smith.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/paul-smith-cardholder-in-navy/208474926-1-navy",
    "inStock": 12
  },
  {
    "name": "ASOS Cream Heavyweight Tee",
    "category": "shirts",
    "price": 25,
    "description": "Super heavyweight oversized T-shirt in cream.",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.asos-media.com/products/asos-collective-ac-t-253-super-heavyweight-oversized-t-shirt-in-cream/208841446-1-tofu",
    "inStock": 42
  },
  {
    "name": "Nike 9060 Grey Trainers",
    "category": "shoes",
    "price": 160,
    "description": "Chunky 9060 sneakers combining retro style and modern comfort.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/new-balance-9060-unisex-trainers-in-grey/208530942-1-black",
    "inStock": 16
  },
  {
    "name": "Carhartt WIP Black Gloves",
    "category": "accessories",
    "price": 27,
    "description": "Warm and durable gloves crafted from quality materials.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/carhartt-wip-watch-gloves-in-black/208995681-1-black",
    "inStock": 28
  },
  {
    "name": "Nike Air Max TL Yellow",
    "category": "shoes",
    "price": 165,
    "description": "Nike Air Max TL 2.5 trainers with bold yellow detailing.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/nike-air-max-tl-25-trainers-in-grey-and-yellow/208581321-1-grey",
    "inStock": 14
  },
  {
    "name": "ASOS Black Card Holder",
    "category": "accessories",
    "price": 12,
    "description": "Compact black card holder with minimalist design.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-card-holder-in-black/208870806-1-black",
    "inStock": 45
  },
  {
    "name": "ASOS Brushed Scarf Chocolate Brown",
    "category": "accessories",
    "price": 16,
    "description": "Soft chocolate brown brushed scarf for winter warmth.",
    "sizes": ["One Size"],
    "image": "https://images.asos-media.com/products/asos-design-woven-brushed-scarf-in-chocolate-brown/208750356-1-brown",
    "inStock": 38
  },
  {
    "name": "ASOS Mule Clog Sandals - Taupe",
    "category": "sandals",
    "price": 30,
    "description": "Casual taupe clog sandals with cork sole for everyday comfort.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/asos-design-mule-clog-sandals-in-taupe-with-cork-sole/209079082-1-taupe",
    "inStock": 50
  },
  {
    "name": "Birkenstock Arizona - Faded Khaki",
    "category": "sandals",
    "price": 85,
    "description": "Narrow-fit Birkenstock Arizona Birko-Flor sandals in khaki.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/birkenstock-unisex-arizona-narrow-fit-birko-flor-sandals-in-faded-khaki/206781379-1-khaki",
    "inStock": 35
  },
  {
    "name": "Adidas Adilette Aqua Slides - Black",
    "category": "sandals",
    "price": 12,
    "description": "Lightweight slip-on Adilette Aqua slides made for comfort.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/adidas-adilette-aqua-slides-in-black/208575835-1-black",
    "inStock": 80
  },
  {
    "name": "Timberland 6-Inch Premium Boots - Wheat",
    "category": "boots",
    "price": 190,
    "description": "Premium Timberland 6-inch boots crafted in wheat tan nubuck.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/timberland-premium-6-inch-boots-in-wheat-tan-nubuck/207295161-1-beige",
    "inStock": 22
  },
  {
    "name": "ASOS Chelsea Boots - Black",
    "category": "boots",
    "price": 35,
    "description": "Sleek and simple black chelsea boots for everyday styling.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/asos-design-chelsea-boots-in-black/208879772-1-black",
    "inStock": 40
  },
  {
    "name": "Dr Martens Sinclair Platform Boots",
    "category": "boots",
    "price": 200,
    "description": "Chunky platform Sinclair boots made with milled nappa leather.",
    "sizes": ["6", "7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/dr-martens-unisex-sinclair-milled-nappa-leather-platform-boots/205434612-1-black",
    "inStock": 18
  },
  {
    "name": "ASOS DESIGN Tassel Loafers - Black",
    "category": "loafers",
    "price": 42,
    "description": "Classic black faux leather loafers with elegant tassel detail.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/asos-design-tassel-loafers-in-black-faux-leather/202484888-1-black",
    "inStock": 50
  },
  {
    "name": "Bershka Penny Loafers - Burgundy",
    "category": "loafers",
    "price": 39,
    "description": "Stylish burgundy penny loafers for a smart minimal look.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/bershka-penny-loafers-in-burgundy/209191128-1-burgundy",
    "inStock": 33
  },
  {
    "name": "ASOS Mule Slippers - Brown Faux Fur",
    "category": "slippers",
    "price": 24,
    "description": "Warm soft mule slippers lined with faux fur for home comfort.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/asos-design-mule-slippers-in-brown-faux-fur/208879696-1-brown",
    "inStock": 55
  },
  {
    "name": "Polo Ralph Lauren Brenan Slippers - Navy Suede",
    "category": "slippers",
    "price": 115,
    "description": "Premium suede mule slippers with iconic bear logo embroidery.",
    "sizes": ["7", "8", "9", "10", "11"],
    "image": "https://images.asos-media.com/products/polo-ralph-lauren-brenan-slipper-with-bear-logo-in-navy-suede/206851711-1-navysuedewbear",
    "inStock": 10
  }
];

export default products;
