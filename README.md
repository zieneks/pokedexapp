# PokeAPI React App

A modern React application that fetches data from the public PokéAPI and displays a comprehensive Pokémon database with custom caching, theming, and user experience features.

## ✨ Features

### 🎮 Core Functionality
- **Pokémon Database**: Fetches and displays a list of Pokémon from the PokéAPI
- **Detailed Information**: Comprehensive Pokémon details including types, stats, abilities, and sprites
- **Search & Filter**: Real-time search functionality to filter Pokémon by name
- **Responsive Design**: Mobile-friendly interface that works on all devices

### 🚀 Performance & Caching
- **Custom Caching System**: localStorage/sessionStorage with TTL (Time To Live)
- **Smart Caching**: Prevents unnecessary API calls with 5-10 minute cache times
- **Fallback Storage**: Automatic fallback to sessionStorage if localStorage fails
- **Automatic Cleanup**: Expired cache entries are automatically removed

### 🎨 Modern UI/UX
- **Material UI (MUI)**: Complete styling system with custom theme
- **Centralized Theming**: Consistent color palette and typography across the app
- **Pokémon Type Colors**: Dynamic color coding for different Pokémon types
- **Loading States**: Smooth loading indicators and error handling
- **Error Handling**: Graceful error states with user-friendly messages

### 🎯 Developer Experience
- **TypeScript**: Full type safety and better development experience
- **React Router**: Clean navigation and URL management
- **Custom Hooks**: Reusable logic for data fetching and state management
- **Modular Architecture**: Clean, maintainable code structure

## 🛠 Technologies Used

- **React 18+** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Material UI (MUI)** - Component library and theming system
- **React Router** - Client-side routing
- **Custom Cache System** - localStorage/sessionStorage with TTL

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
│   │   ├── usePokemonList.ts        # Pokémon list fetching with cache
│   │   └── usePokemonDetail.ts      # Pokémon detail fetching with cache
│   ├── utils/                # Utility functions
│   │   └── cache.ts          # Custom caching system
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
- **Browse Pokémon**: Scroll through the Pokémon database (20 Pokemon by default)
- **Search**: Use the search bar to find specific Pokémon
- **View Details**: Click any Pokémon card to see detailed information
- **Explore Stats**: View comprehensive stats, abilities, and type information

### For Developers
- **Theme Customization**: Modify `src/theme.ts` to change colors and styling
- **Cache Configuration**: Adjust TTL values in `src/utils/cache.ts`
- **Type Safety**: All components are fully typed with TypeScript
- **Component Reusability**: Modular components for easy customization

## 🗄️ Caching System

The app uses a custom caching system with the following features:

### **Cache Functions:**
- `setCache(key, data, ttl)` - Stores data with expiration time
- `getCache(key)` - Retrieves cached data if valid


### **Storage Strategy:**
- **Primary**: localStorage for persistent storage
- **Fallback**: sessionStorage if localStorage fails
- **TTL**: 5 minutes for Pokemon list, 10 minutes for details
- **Automatic Cleanup**: Expired entries are removed automatically

### **Cache Keys:**
- `pokemon-list-20` - List of 20 Pokemon
- `pokemon-detail-{id}` - Details for specific Pokemon

## 🎨 Theming System

The app uses a centralized Material UI theme with:

- **Custom Color Palette**: Primary, secondary, and Pokémon type colors
- **Typography**: Optimized font weights and sizes
- **Consistent Spacing**: Material Design spacing system
- **Pokémon Type Colors**: Dynamic colors for different Pokémon types

## 🔧 Recent Updates

- ✅ **Fixed Pokemon data loading issues**
- ✅ **Implemented custom caching system**
- ✅ **Added unique keys for React list items**
- ✅ **Improved error handling and loading states**
- ✅ **Optimized performance with reduced API calls**

## 🚀 Performance Features

- **Fast Loading**: Cached data loads instantly
- **Reduced API Calls**: Smart caching prevents unnecessary requests
- **Responsive Design**: Works smoothly on all devices
- **Error Recovery**: Graceful handling of network issues

