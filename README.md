# ResQBite Backend

Backend service for **ResQBite** — a surplus food marketplace platform enabling sellers to list excess food, buyers to purchase with OTP-based pickup, and automated NGO redistribution.

## Features
- 🛡️ **Secure API** with Helmet, CORS, and Express logic.
- 🚀 **TypeScript** for type safety and modern JS development.
- 🐳 **Robust Logging** and environment configuration management.

## Tech Stack
- **Runtime:** [Node.js](https://nodejs.org/)
- **Core Framework:** [Express.js](https://expressjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [Yarn](https://yarnpkg.com/)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resqbite-backend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Setup environment variables:
   Create a `.env` file from the example or use:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

### Development
Start the development server with hot-reload:
```bash
yarn dev
```

### Build
Compile the project to JavaScript:
```bash
yarn build
```

### Production
Start the compiled application:
```bash
yarn start
```

## API Endpoints
- `GET /` - Welcome message.
- `GET /status` - Health check status.
