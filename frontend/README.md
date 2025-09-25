# Frontend - React Application

This is the React frontend for displaying Pokemon data from the Rails backend API.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## Features

- Fetches Pokemon data from the backend API
- Displays Pokemon in a table or grid format
- Shows Pokemon details including name, type, HP, image, and abilities

## API Integration

The frontend should fetch data from `http://localhost:3000/pokemons` and display it appropriately.

## Assessment Task

- Create a view that displays the Pokemon data fetched from the backend in a grid layout.
- The items in the grid should look like a Pokemon card (mainly the structure of the card).
- Look in the backend API for the data you have access to and only fill in what you can on the card.
- You can use any styling approach such as vanilla CSS, CSS modules, Tailwind CSS, or any other library.
- Please add a search bar to the top so that you can search for a specific Pokemon.
- Add any additional features if you have time. (sort, filter, etc)
