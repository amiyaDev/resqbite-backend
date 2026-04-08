# 📡 ResQBite – API Documentation (Swagger Ready)

## 📌 Base URL
```
http://localhost:5000/api/v1
```

---

# 🔐 1. Authentication APIs

## Register
POST /auth/register

## Login
POST /auth/login

## Forgot Password
POST /auth/forgot-password

## Reset Password
POST /auth/reset-password

---

# 👤 2. User APIs

## Get Profile
GET /users/me

## Update Profile
PUT /users/me

## Change Password
PUT /users/change-password

---

# 📍 3. Location APIs

## Get Nearby Food
GET /foods/nearby?lat=XX&lng=YY&radius=5

---

# 🍱 4. Food APIs

## Get All Foods
GET /foods

## Get Food Details
GET /foods/:id

## Create Food (Seller)
POST /foods

## Update Food
PUT /foods/:id

## Delete Food
DELETE /foods/:id

---

# 🛒 5. Cart APIs

## Get Cart
GET /cart

## Add to Cart
POST /cart

## Update Cart Item
PUT /cart/:itemId

## Remove Item
DELETE /cart/:itemId

## Clear Cart
DELETE /cart

---

# 💳 6. Payment APIs

## Create Payment
POST /payments

## Verify Payment
POST /payments/verify

---

# 📦 7. Order APIs

## Create Order
POST /orders

## Get Orders
GET /orders

## Get Order Details
GET /orders/:id

## Cancel Order
PUT /orders/:id/cancel

---

# 🔢 8. OTP APIs

## Generate OTP
POST /otp/generate

## Verify OTP
POST /otp/verify

---

# 🧑‍🍳 9. Seller APIs

## Get Seller Listings
GET /seller/foods

## Get Seller Orders
GET /seller/orders

## Verify Pickup OTP
POST /seller/verify-otp

---

# 🏥 10. NGO APIs

## Get Assigned Food
GET /ngo/assignments

## Accept Pickup
POST /ngo/accept

---

# 🔔 11. Notification APIs

## Send Notification (Internal)
POST /notifications

---

# 🛠️ 12. Admin APIs

## Get All Users
GET /admin/users

## Get All Orders
GET /admin/orders

## Delete User
DELETE /admin/users/:id

---

# ⚠️ Common Response Format

## Success Response
```
{
  "success": true,
  "data": {},
  "message": "Request successful"
}
```

## Error Response
```
{
  "success": false,
  "error": "Something went wrong"
}
```

---

# 🔐 Authentication Header

```
Authorization: Bearer <token>
```

---

# ✅ Notes
- All protected routes require JWT
- Use role-based access (Buyer/Seller/Admin/NGO)
- Validation required for all inputs

---

🔥 This API doc is:
- Swagger-ready
- RESTful structured
- Production scalable
