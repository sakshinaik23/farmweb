# FarmWeb – Vrindavan Farms Website

FarmWeb is the official web platform for **Vrindavan Farms**, built using **Next.js App Router**.  
The application provides information about farm experiences, events, stay packages, and allows users to submit booking and enquiry requests.

---

# Project Overview

FarmWeb is a modern full-stack web application designed to:

- Showcase Vrindavan Farms experiences
- Display farm stay packages
- Provide event hosting information
- Allow visitors to submit booking requests
- Store booking data in a database
- Provide admin APIs to manage booking data

The project uses **Next.js full-stack architecture**, where both **frontend UI and backend APIs** are implemented inside the same project.

---

# Tech Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Backend

- Next.js API Routes
- Node.js runtime
- MongoDB Atlas (Cloud Database)
- Mongoose ODM

## Deployment

- Node.js server
- DigitioHub VPS
- Nginx (recommended reverse proxy)
- PM2 (recommended process manager)

---

# Local Development Setup

## 1. Clone Repository

```bash
git clone <repository-url>
cd farmweb
```

## 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

## 3. Setup Environment Variables

Create a `.env.local` file in the root directory.

Example configuration:

```
MONGODB_URI=your_mongodb_atlas_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

These variables are required for database connectivity and environment configuration.

---

## 4. Run Development Server

Start the local development server:

```bash
npm run dev
```

Open the application in the browser:

```
http://localhost:3000
```

The application will automatically reload whenever source files are updated.

---

# Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

# Key Features

- Built using **Next.js App Router**
- Integrated backend using **Next.js API routes**
- **MongoDB Atlas cloud database integration**
- Modular and scalable architecture
- Responsive UI
- SEO optimized pages
- Booking enquiry system for events and farm stays

---

# Development Status

## Completed

- Homepage UI
- About page
- Experiences page
- Events page
- Stay packages page
- Component architecture

---

## In Progress

- MongoDB Atlas database integration
- Booking API endpoints
- Admin booking management APIs
- Form validation enhancements
- Admin dashboard improvements
- Production deployment configuration

---

# License

This project is maintained internally for **Vrindavan Farms** and **DigitioHub**.