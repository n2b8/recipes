// src/App.js
import React, { useState } from 'react';
import RecipesList from './components/RecipesList';
import NavBar from './components/NavBar';
import AddRecipeForm from "./components/AddRecipeForm";
// ... other imports ...

function App() {
    const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
    return (
        <div className="App">
            <NavBar onAddRecipe={() => setShowAddRecipeForm(true)} />
            {showAddRecipeForm && <AddRecipeForm onClose={() => setShowAddRecipeForm(false)} />}
            <main>
                <RecipesList />
            </main>
            {/* You can add a Footer here if you have one */}
        </div>
    );
}

export default App;
