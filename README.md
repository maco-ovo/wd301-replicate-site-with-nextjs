# WD-301: Unsplash Clone (Next.js App Router)

A responsive landing page replicating the Unsplash website, built with Next.js, Tailwind CSS, and TypeScript.

## Assignment Overview

The goal of this assignment is to **replicate the website linked below** as a **responsive landing page** using **Next.js (App Router)** while following best practices.

> ## Website to Replicate
>
> **[https://unsplash.com/](https://unsplash.com/)**

## Features

- Faithful UI replication with responsive design (Mobile, Tablet, Desktop)
- Masonry photo grid layout
- Intercepting Routes & Parallel Routes for photo modals
- Newsletter subscription via Web3Forms and MongoDB

## Setup Instructions

**1. Clone the repository**
```bash
git clone <your-repo-url>
cd replicate-site-with-nextjs
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up Environment Variables**
Create a `.env` file in the root directory and add your keys:
```env
MONGODB_URI=your_mongodb_connection_string
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

**4. Run the development server**
```bash
npm run dev
```
Open [https://wd301-replicate-site-with-nextjs.vercel.app/](https://wd301-replicate-site-with-nextjs.vercel.app/) with your browser to see the result.
