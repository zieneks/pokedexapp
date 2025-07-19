# PokeAPI React App

This is a React application that fetches data from the public PokéAPI and displays a list of Pokémon. Users can click on a Pokémon to view detailed information about it.

## Features

- Fetches a list of Pokémon from the PokéAPI.
- Displays basic information including name and image.
- Clickable Pokémon cards that navigate to a detailed view.
- Detailed view includes types, stats, abilities, and more.
- Search functionality to filter Pokémon by name.
- Loading indicators and error handling for API requests.
- Responsive design for mobile-friendly usage.
- All UI and layout is styled using Material UI (`sx` prop, MUI components). No CSS files required.

## Technologies Used

- React (v18+)
- TypeScript
- React Router for navigation
- Material UI (MUI) for all styling and layout

## Project Structure

```
pokeapi-react-app
├── src
│   ├── components          # Contains reusable components
│   │   ├── PokemonCard.tsx
│   │   ├── PokemonList.tsx
│   │   ├── PokemonDetail.tsx
│   │ 
│   │   └── Loader.tsx
│   ├── pages               # Contains page components
│   │   ├── Home.tsx
│   │   └── Pokemon.tsx
│   ├── types               # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the application
│   └── styles              # (not used)
├── public
│   └── index.html          # Main HTML file
├── package.json            # NPM configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd pokeapi-react-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- The home page displays a list of Pokémon.
- Click on a Pokémon card to view detailed information.
- Use the search bar to filter Pokémon by name.

## License

This project is open-source and available under the MIT License.