# BitUniverse Home page

## Introduction
This project is a web application built using React Typescript and Express.js, focusing on integrating a backend for managing token data. The front end displays token information fetched from the backend server and allows users to connect their wallet to the website using WalletConnect. Additionally, the project implements animations based on the provided Figma design, ensuring a visually appealing user experience.

## Project Type
Full-stack (Frontend and Backend)

## Deployed App
 Frontend: [bit-universe](https://bituniverse-jk.vercel.app/).
 Backend: [bit-universe-api](https://bituniverse-api-template.onrender.com/tokens)
 
 ## Directory Structure
```bash
 client/
├─ src/
│  ├─ allroutes/
│  │  ├─ MainRoutes.tsx
│  ├─ components/
│  │  ├─ BottomSection
│  │  │  ├─ BottomSection.tsx
│  │  ├─ MidSection
│  │  │  ├─ MidSection.tsx
│  │  │  ├─ OurProducts.tsx
│  │  │  ├─ OurTokens.tsx
│  │  │  ├─ ProductsCard.tsx
│  │  │  ├─ TokenCard.tsx
│  │  ├─ TopSection
│  │  │  ├─ NavBar.tsx
│  │  │  ├─ TopHeading.tsx
│  │  │  ├─ TopSection.tsx
│  ├─ pages/
│  │  ├─ Home.tsx
│  ├─ App.tsx
│  ├─ constants.ts
│  ├─ index.tsx
├─ public/
│  ├─ index.html
├─ README.md
├─ package-lock.json
├─ package.json
```

## Features
* Integration of a backend server using Node.js and Express to serve token data.
* Display token information fetched from the backend server using React components.
* Implementation of WalletConnect functionality to allow users to connect their wallets.
* UI built based on the provided Figma design to enhance the user experience.
## Design Decisions or Assumptions
* WalletConnect functionality is integrated using the provided WalletConnect tool.
* Provided pagination to show 6 token card data per page.

## Installation & Getting started
To set up the project on your local system, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   
2. **Change into the project directory:**
   ```bash
   cd <project-directory>
   
3. **Install dependencies:**
   ```bash
   npm install
   
4. **Start the development server:**
   ```bash
   npm run start

The app will be running on `http://localhost:3000/`.

## Usage
After starting the project, access the frontend application through your web browser. You can view token information displayed on the homepage and connect your wallet using the WalletConnect functionality.
### Snapshot 1

<p align="center">
  <img src="![bit1](https://github.com/jurikalita011/Juri-Kalita-Frontend-Developer/assets/68116821/cab5b5af-5a7c-47d2-8bff-f748306815c8)
">
</p>

### Snapshot 2

<p align="center">
  <img src="![bit-2](https://github.com/jurikalita011/Juri-Kalita-Frontend-Developer/assets/68116821/885fd7ff-f66a-4cf1-b696-d60854e82189)
">
</p>


## Credentials
No authentication is required to access the project.

## Technology Stack
* React.js: A JavaScript library for building user interfaces, providing a component-based approach to developing web apps.
* TypeScript: A statically typed superset of JavaScript that enhances code maintainability and scalability by identifying errors during development.
* Express.js: A minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.
* Tailwind CSS: A utility-first CSS framework for rapidly building custom designs without having to leave your HTML.
