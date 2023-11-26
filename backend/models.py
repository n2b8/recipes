from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, values, **kwargs):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls):
        return {"type": "string"}


class Ingredient(BaseModel):
    quantity: float
    measurement: str
    ingredient_name: str

class Instruction(BaseModel):
    step: str

class Note(BaseModel):
    date: datetime
    note_body: str

class Recipe(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    recipe_name: str
    ingredients: List[Ingredient]
    instructions: List[Instruction]
    recipe_description: str
    cooking_time_number: int
    cooking_time_measure: str
    serving_size_number: int
    serving_size_measure: str
    notes: Optional[List[Note]] = []

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: lambda oid: str(oid) # Serialize Object to string
        }
        populate_by_name = True