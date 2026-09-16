// AlphaFit Product Catalog Data
const PRODUCTS = [
  {
    "id": 1,
    "name": "AlphaFit Velocity Tee",
    "category": "Training Tee",
    "price": "1299.00",
    "description": "Lightweight stretch tee with quick-dry fabric for gym sessions, runs, and everyday movement.",
    "image_url": "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 2,
    "name": "AlphaFit Core Joggers",
    "category": "Joggers",
    "price": "2499.00",
    "description": "Tapered performance joggers with secure pockets and breathable comfort for warmups and travel.",
    "image_url": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 3,
    "name": "AlphaFit Flex Sports Bra",
    "category": "Women",
    "price": "1699.00",
    "description": "Supportive compression fit with soft elastic bands for studio training and high-energy workouts.",
    "image_url": "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 4,
    "name": "AlphaFit Storm Hoodie",
    "category": "Outerwear",
    "price": "3299.00",
    "description": "Warm fleece hoodie with athletic paneling, built for cool morning training and rest-day comfort.",
    "image_url": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 5,
    "name": "AlphaFit Rep Shorts",
    "category": "Shorts",
    "price": "1499.00",
    "description": "Four-way stretch shorts with a stable waistband and sweat-wicking finish for intense lift days.",
    "image_url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 6,
    "name": "AlphaFit Pace Leggings",
    "category": "Women",
    "price": "2199.00",
    "description": "Sculpted high-rise leggings with squat-proof coverage and smooth compression.",
    "image_url": "https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 7,
    "name": "AlphaFit Iron Tank",
    "category": "Training Tank",
    "price": "999.00",
    "description": "Sleeveless training tank with breathable mesh zones and a relaxed athletic fit.",
    "image_url": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 8,
    "name": "AlphaFit Aero Track Jacket",
    "category": "Outerwear",
    "price": "3799.00",
    "description": "Lightweight zip jacket with wind-resistant fabric for outdoor runs and warmup laps.",
    "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 9,
    "name": "AlphaFit Compression Top",
    "category": "Compression",
    "price": "1899.00",
    "description": "Body-hugging compression layer that supports movement during lifting, HIIT, and drills.",
    "image_url": "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 10,
    "name": "AlphaFit Sprint Running Shorts",
    "category": "Running",
    "price": "1599.00",
    "description": "Feather-light running shorts with an inner brief and quick-access key pocket.",
    "image_url": "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 11,
    "name": "AlphaFit Motion Crop Tee",
    "category": "Women",
    "price": "1399.00",
    "description": "Soft cropped tee with sweat-wicking comfort for strength training and studio days.",
    "image_url": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 12,
    "name": "AlphaFit Power Training Pants",
    "category": "Training Pants",
    "price": "2799.00",
    "description": "Flexible training pants with clean tapering, stretch panels, and secure zipped pockets.",
    "image_url": "https://placehold.co/900x900/111821/00d084.png?text=AlphaFit+Training+Pants"
  },
  {
    "id": 13,
    "name": "AlphaFit Endurance Socks Pack",
    "category": "Accessories",
    "price": "699.00",
    "description": "Cushioned ankle socks with arch support and breathable knit for daily training.",
    "image_url": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 14,
    "name": "AlphaFit Grip Gym Gloves",
    "category": "Accessories",
    "price": "899.00",
    "description": "Padded lifting gloves with strong palm grip and adjustable wrist support.",
    "image_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 15,
    "name": "AlphaFit Studio Seamless Set",
    "category": "Women",
    "price": "3999.00",
    "description": "Matching seamless set with a supportive top and contour leggings for studio workouts.",
    "image_url": "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 16,
    "name": "AlphaFit Duffle Pro",
    "category": "Accessories",
    "price": "2299.00",
    "description": "Roomy training duffle with separate shoe storage and durable water-resistant fabric.",
    "image_url": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 17,
    "name": "AlphaFit Training Cap",
    "category": "Accessories",
    "price": "799.00",
    "description": "Lightweight curved-brim cap with sweatband comfort for runs and sunny training sessions.",
    "image_url": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80"
  },
  {
    "id": 18,
    "name": "AlphaFit Recovery Slides",
    "category": "Footwear",
    "price": "1299.00",
    "description": "Soft cushioned slides for locker rooms, post-workout recovery, and relaxed weekends.",
    "image_url": "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80"
  }
];
