# 🍱 ResQBite – Complete System Flow Documentation

## 📌 Overview
ResQBite is a surplus food marketplace where:
- Sellers list excess food
- Buyers purchase at discounted prices
- OTP-based pickup ensures secure delivery
- Unsold food is redirected to NGOs

---

# 🔐 1. Authentication Flow
- User Registration
- Login (JWT based authentication)
- Logout
- Forgot Password (Email/OTP based)
- Reset Password

---

# 👤 2. User Account Settings
- Get Profile
- Update Profile
- Change Password
- Add/Update Address
- Manage Preferences

---

# 🛍️ 3. Buyer Flow

## Food Discovery
- Get nearby food based on location
- Search food items
- Filter:
  - Price
  - Distance
  - Category
  - Availability

## Food Details
- View food details
- Seller info
- Expiry time
- Quantity left

---

# 🛒 4. Cart System

- Get cart info
- Add to cart
- Update cart quantity
- Remove item from cart
- Clear cart

## Inventory Logic
- Lock inventory when added to cart
- Release inventory if:
  - User removes item
  - Payment fails
  - Timeout occurs

---

# 💳 5. Purchase & Payment Flow

1. Add items to cart
2. Proceed to checkout
3. Select payment method
4. Make payment
5. On success:
   - Create order
   - Generate OTP
6. On failure:
   - Release inventory

---

# 📦 6. Order Management

## Order Lifecycle
- Pending
- Paid
- Ready for Pickup
- Completed
- Cancelled

## Features
- View order details
- Track order status
- Pickup time window
- Order history

---

# 🔢 7. OTP Verification Flow

- OTP generated after successful payment
- Sent to buyer (SMS/Email)
- Buyer shows OTP at pickup
- Seller verifies OTP
- Order marked as Completed

---

# 📍 8. Location System

- Detect user location (GPS)
- Store seller location
- Distance calculation
- Radius filtering (e.g., 5km, 10km)
- Sort by nearest food

---

# 🧑‍🍳 9. Seller Flow

## Food Listing
- Add food item
- Upload image
- Set:
  - Quantity
  - Price
  - Expiry time

## Manage Listings
- Update food details
- Delete listing
- Mark as unavailable

## Orders
- View incoming orders
- Verify OTP
- Mark order as completed

---

# ⏳ 10. Inventory & Expiry System (Core Feature)

- Auto-expire food after time limit
- Disable expired listings
- Release locked inventory
- Prevent checkout if expired

---

# 🔄 11. Background Jobs (Cron Jobs)

- Expire food items
- Release stale cart inventory
- Notify users
- Assign unsold food to NGOs

---

# 🏥 12. NGO Flow (Unique Feature)

- Detect unsold food after expiry
- Assign to nearby NGO
- Notify NGO
- Schedule pickup
- Track donation completion

---

# 🔔 13. Notification System

- Order confirmation
- Payment success/failure
- OTP delivery
- Pickup reminder
- Expiry alerts
- NGO notifications

Channels:
- SMS
- Email
- Push notifications

---

# ⭐ 14. Ratings & Reviews

- Rate seller
- Review food quality
- Display ratings

---

# 🛠️ 15. Admin Panel

## Features
- Manage users
- Manage sellers
- Monitor food listings
- Handle disputes
- View analytics

---

# ⚠️ 16. Edge Cases & Error Handling

- Payment failed → rollback inventory
- Food expired during checkout
- OTP mismatch
- Seller unavailable
- Network failure
- Duplicate orders prevention

---

# 🔐 17. Security Considerations

- JWT authentication
- Password hashing (bcrypt)
- Rate limiting
- Input validation
- Secure payment handling

---

# 📊 18. Future Enhancements

- AI-based food recommendation
- Dynamic pricing
- Subscription model
- Delivery integration
- Real-time tracking

---

# ✅ Final Summary

ResQBite system consists of:
- Buyer system
- Seller system
- Cart & inventory engine
- Order & payment system
- OTP-based verification
- NGO redistribution system
- Background job processing
