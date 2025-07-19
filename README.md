# PokeAPI React App

A modern React application that fetches data from the public PokéAPI and displays a comprehensive Pokémon database with advanced caching, theming, and user experience features.

## ✨ Features

### 🎮 Core Functionality
- **Pokémon Database**: Fetches and displays a complete list of Pokémon from the PokéAPI
- **Detailed Information**: Comprehensive Pokémon details including types, stats, abilities, and more
- **Search & Filter**: Real-time search functionality to filter Pokémon by name
- **Responsive Design**: Mobile-friendly interface that works on all devices

### 🚀 Performance & Caching
- **TanStack Query Integration**: Advanced server state management with automatic caching
- **Smart Caching**: Prevents unnecessary API calls with configurable cache times
- **Background Updates**: Seamless data synchronization without blocking UI
- **Optimistic Updates**: Instant UI feedback for better user experience

### 🎨 Modern UI/UX
- **Material UI (MUI)**: Complete styling system with custom theme
- **Centralized Theming**: Consistent color palette and typography across the app
- **Poppins Font**: Modern, readable typography with Google Fonts integration
- **Pokémon Type Colors**: Dynamic color coding for different Pokémon types
- **Loading States**: Smooth loading indicators and skeleton screens
- **Error Handling**: Graceful error states with user-friendly messages

### 🎯 Developer Experience
- **TypeScript**: Full type safety and better development experience
- **React Router**: Clean navigation and URL management
- **Custom Hooks**: Reusable logic for data fetching and state management
- **Modular Architecture**: Clean, maintainable code structure

## 🛠 Technologies Used

- **React 18+** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **TanStack Query (React Query)** - Server state management and caching
- **Material UI (MUI)** - Component library and theming system
- **React Router** - Client-side routing
- **Google Fonts** - Typography (Poppins)

## 📁 Project Structure

```
pokeapi-react-app/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── PokemonCard.tsx   # Individual Pokémon card
│   │   ├── PokemonDetail.tsx # Detailed Pokémon view
│   │   ├── PokemonList.tsx   # Pokémon grid/list
│   │   └── Loader.tsx        # Loading component
│   ├── pages/                # Page components
│   │   ├── Home.tsx          # Main listing page
│   │   └── Pokemon.tsx       # Detail page
│   ├── hooks/                # Custom React hooks
│   │   ├── usePokemonQuery.ts        # Pokémon list fetching
│   │   └── usePokemonDetailQuery.ts  # Pokémon detail fetching
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # Pokémon and API types
│   ├── theme.ts              # Material UI theme configuration
│   ├── index.css             # Global styles
│   ├── App.tsx               # Main app component
│   └── index.tsx             # Application entry point
├── public/
│   └── index.html            # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd pokeapi-react-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎮 Usage

### For Users
- **Browse Pokémon**: Scroll through the complete Pokémon database
- **Search**: Use the search bar to find specific Pokémon
- **View Details**: Click any Pokémon card to see detailed information
- **Explore Stats**: View comprehensive stats, abilities, and type information

### For Developers
- **Theme Customization**: Modify `src/theme.ts` to change colors and styling
- **API Integration**: TanStack Query handles all API calls automatically
- **Type Safety**: All components are fully typed with TypeScript
- **Component Reusability**: Modular components for easy customization

## 🎨 Theming System

The app uses a centralized Material UI theme with:

- **Custom Color Palette**: Primary, secondary, and Pokémon type colors
- **Typography**: Poppins font with optimized weights
- **Consistent Spacing**: Material Design spacing system


```







---
