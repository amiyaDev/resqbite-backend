# 🗄️ ResQBite – Database Schema (Prisma + MongoDB)

## 📌 Overview
This schema is designed for a scalable surplus food marketplace using:
- Prisma ORM
- MongoDB
- Supports Buyer, Seller, Orders, OTP, NGO flows

---

# 🧑 User Model
```prisma
model User {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  name        String
  email       String   @unique
  password    String
  role        Role     // BUYER | SELLER | ADMIN | NGO
  phone       String?
  createdAt   DateTime @default(now())

  address     Address?
  orders      Order[]
  cart        Cart?
}
```

---

# 🏠 Address Model
```prisma
model Address {
  id        String  @id @default(auto()) @map("_id") @db.ObjectId
  userId    String  @db.ObjectId
  city      String
  state     String
  pincode   String
  latitude  Float
  longitude Float

  user User @relation(fields: [userId], references: [id])
}
```

---

# 🍱 Food Listing (Seller)
```prisma
model Food {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  price       Float
  quantity    Int
  expiryTime  DateTime
  imageUrl    String?
  sellerId    String   @db.ObjectId
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())

  seller User @relation(fields: [sellerId], references: [id])
}
```

---

# 🛒 Cart Model
```prisma
model Cart {
  id        String      @id @default(auto()) @map("_id") @db.ObjectId
  userId    String      @unique @db.ObjectId
  items     CartItem[]
  updatedAt DateTime    @updatedAt

  user User @relation(fields: [userId], references: [id])
}
```

---

# 🧾 Cart Item
```prisma
model CartItem {
  id        String  @id @default(auto()) @map("_id") @db.ObjectId
  cartId    String  @db.ObjectId
  foodId    String  @db.ObjectId
  quantity  Int

  cart Cart @relation(fields: [cartId], references: [id])
  food Food @relation(fields: [foodId], references: [id])
}
```

---

# 📦 Order Model
```prisma
model Order {
  id          String      @id @default(auto()) @map("_id") @db.ObjectId
  userId      String      @db.ObjectId
  totalAmount Float
  status      OrderStatus
  otpCode     String?
  createdAt   DateTime    @default(now())

  items       OrderItem[]
  payment     Payment?

  user User @relation(fields: [userId], references: [id])
}
```

---

# 📄 Order Item
```prisma
model OrderItem {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  orderId  String @db.ObjectId
  foodId   String @db.ObjectId
  quantity Int
  price    Float

  order Order @relation(fields: [orderId], references: [id])
  food  Food  @relation(fields: [foodId], references: [id])
}
```

---

# 💳 Payment Model
```prisma
model Payment {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  orderId   String   @unique @db.ObjectId
  amount    Float
  status    PaymentStatus
  method    String
  createdAt DateTime @default(now())

  order Order @relation(fields: [orderId], references: [id])
}
```

---

# 🔢 OTP Model
```prisma
model OTP {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  orderId   String   @db.ObjectId
  code      String
  expiresAt DateTime
}
```

---

# 🏥 NGO Model
```prisma
model NGO {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  location  String
  phone     String
  createdAt DateTime @default(now())
}
```

---

# 🍲 NGO Assignment
```prisma
model NGOAssignment {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  foodId    String   @db.ObjectId
  ngoId     String   @db.ObjectId
  status    String
  createdAt DateTime @default(now())
}
```

---

# 📊 ENUMS
```prisma
enum Role {
  BUYER
  SELLER
  ADMIN
  NGO
}

enum OrderStatus {
  PENDING
  PAID
  READY
  COMPLETED
  CANCELLED
}

enum PaymentStatus {
  SUCCESS
  FAILED
  PENDING
}
```

---

# ✅ Key Design Highlights
- MongoDB ObjectId used everywhere
- Relations handled via Prisma
- OTP linked with Order
- Separate Cart & Order system
- NGO redistribution supported

---

🔥 This schema is:
- Scalable
- Interview-ready
- Production-ready
