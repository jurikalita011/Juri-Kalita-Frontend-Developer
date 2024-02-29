# BitUniverse Home page

## Introduction
This project is a web application built using React Typescript and Express.js, focusing on integrating a backend for managing token data. The front end displays token information fetched from the backend server and allows users to connect their wallet to the website using WalletConnect. Additionally, the project implements animations based on the provided Figma design, ensuring a visually appealing user experience.

## Project Type
Full-stack (Frontend and Backend)
 
## Deployed App
 Frontend: [bit-universe](https://bituniverse-jk.vercel.app/)
## APIs Used
Backend: [bit-universe-api](https://bituniverse-api-template.onrender.com/)
<br/>
Backend Github: [Backend GitHub repository link](https://github.com/jurikalita011/bitUniverse-api-template)
## API Endpoints

* GET /api/tokens - retrieve all items
* POST /api/tokens - create a new token
 
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
## Video Walkthrough of the project
[Project-preview](https://drive.google.com/file/d/1f_V3ZRMdoxf3GAO_IkY29Vv-VMk3yXiE/view?usp=sharing)
## Features
* Integration of a backend server using Node.js and Express to serve token data.
* Display token information fetched from the backend server using React components.
* Implementation of WalletConnect functionality to allow users to connect their wallets.
* UI built based on the provided Figma design to enhance the user experience using various animations.
## Design Decisions or Assumptions
* WalletConnect functionality is integrated using the provided WalletConnect tool.
* Provided pagination to show 6 token card data per page.
* Animations are implemented in accordance with the provided animation reference to achieve the expected transition effects.

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

 
![b1](https://github.com/jurikalita011/Juri-Kalita-Frontend-Developer/assets/68116821/9cae162e-0da4-49b0-af61-c0f05bf319af)



### Snapshot 2

![b2](https://github.com/jurikalita011/Juri-Kalita-Frontend-Developer/assets/68116821/5b22e0a9-ac4a-4afa-8d30-73cddd7917ab)

### Snapshot 3

![b3](https://github.com/jurikalita011/Juri-Kalita-Frontend-Developer/assets/68116821/753ed91c-bdd2-4fb9-be3f-382d1336004b)

### Snapshot 4

![b4](https://github.com/jurikalita011/Juri-Kalita-Frontend-Developer/assets/68116821/e8fa68f6-b60b-42bb-914d-ca3d8fd79769)


## Technology Stack
* React.js: A JavaScript library for building user interfaces, providing a component-based approach to developing web apps.
* TypeScript: A statically typed superset of JavaScript that enhances code maintainability and scalability by identifying errors during development.
* Express.js: A minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.
* Tailwind CSS: A utility-first CSS framework for rapidly building custom designs without having to leave your HTML.
* MongoDB: MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It offers high scalability, flexibility, and performance for handling large volumes of data. MongoDB's document model is well-suited for modern web applications, as it allows for dynamic schema design and seamless integration with JavaScript-based stacks like Node.js.
