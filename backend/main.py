from fastapi import FastAPI, HTTPException, Body
from backend.models import Recipe
from backend.database import recipe_collection
from bson import ObjectId
from typing import List

app = FastAPI()

# Create recipe
@app.post("/recipes/", response_model=Recipe)
async def create_recipe(recipe: Recipe):
    recipe_dict = recipe.dict(by_alias=True) # `by_alias=True` ensures '_id' is used instead of 'id'
    recipe_dict['notes'] = [] # Initializing notes as empty
    recipe_dict['tags'] = [] # Initializing tags as empty
    new_recipe = await recipe_collection.insert_one(
        recipe.model_dump(by_alias=True, exclude=["id"])
    )
    return await recipe_collection.find_one({"_id": new_recipe.inserted_id})

# Read recipes
@app.get("/recipes/", response_model=List[Recipe])
async def read_recipes():
    recipes = await recipe_collection.find().to_list(100)
    return recipes

# Read single recipe
@app.get("/recipes/{id}", response_model=Recipe)
async def read_recipe(id: str):
    recipe = await recipe_collection.find_one({"_id": ObjectId(id)})
    if recipe is None:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return recipe

# Update recipe
@app.put("/recipes/{id}", response_model=Recipe)
async def update_recipe(id: str, recipe_update: Recipe):
    updated_recipe = await recipe_collection.update_one({"_id": ObjectId(id)}, {"$set": recipe_update.dict(exclude_unset=True)})
    if updated_recipe.matched_count == 0:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return await recipe_collection.find_one({"_id": ObjectId(id)})


# Delete recipe
@app.delete("/recipes/{id}", response_model=dict)
async def delete_recipe(id: str):
    delete_result = await recipe_collection.delete_one({"_id": ObjectId(id)})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return {"message": "Recipe with ID {} deleted successfully".format(id)}