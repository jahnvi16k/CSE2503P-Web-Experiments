# CSE2503P – Web Development and Frameworks Lab

**Student:** K Jahnvi  
**URN:** 2481221

This repository contains the source code for Experiments 9 and 10.

## Experiment 9 – JSON and Consuming REST APIs with Fetch

**Technologies:** HTML, CSS, JavaScript, JSON, Fetch API

The page demonstrates `JSON.stringify()`, `JSON.parse()`, and fetching posts from the JSONPlaceholder REST API. It displays a loading message, handles request errors, and renders the first ten posts.

### Run
Open `Experiment-9/index.html` in a browser (or use the VS Code Live Server extension). Internet access is required for the public API request.

## Experiment 10 – Component-Based UI with React and a Node.js API

**Technologies:** React, Vite, Node.js, Express, CORS, CSS, Fetch API

The Express backend exposes a `GET /api/products` endpoint. The React frontend fetches the products and renders them using a reusable `ProductCard` component, `useState`, and `useEffect`.

### Run the backend
```bash
cd Experiment-10/backend
npm install
npm start
```
The API runs at `http://localhost:5000/api/products`.

### Run the frontend
Open a second terminal:
```bash
cd Experiment-10/frontend
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

## Before submission

- Run both experiments yourself and check that the output matches the code.
- Add your own genuine output screenshots to the lab record if your instructor requires them.
- Review the code and be prepared to explain each part during the viva.
- Complete the course AI-use statement accurately for any AI assistance actually used.
