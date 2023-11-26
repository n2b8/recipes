// src/App.js
import React from 'react';
import RecipesList from './components/RecipesList';
import NavBar from './components/NavBar';
// ... other imports ...

function App() {
    return (
        <div className="App">
            <NavBar />
            <main>
                <RecipesList />
            </main>
            {/* You can add a Footer here if you have one */}
        </div>
    );
}

export default App;
