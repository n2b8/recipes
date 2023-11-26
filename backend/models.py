from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId
from typing_extensions import Annotated
from fastapi import Body
from pydantic.functional_validators import BeforeValidator

PyObjectId = Annotated[str, BeforeValidator(str)]


class Ingredient(BaseModel):
    quantity: float
    measurement: str
    ingredient_name: str

class Instruction(BaseModel):
    step: str

class Note(BaseModel):
    date: datetime
    note: str

class Tag(BaseModel):
    tag: str

class Recipe(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=True)
    recipe_name: str
    ingredients: List[Ingredient]
    instructions: List[Instruction]
    recipe_description: str
    cooking_time_number: int
    cooking_time_measure: str
    serving_size_number: int
    serving_size_measure: str
    notes: Optional[List[Note]] = []
    tags: Optional[List[Tag]] = []

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: lambda oid: str(oid) # Serialize Object to string
        }
        populate_by_name = True