from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()  # This loads the environment variables from .env file

MONGODB_URL = os.getenv("MONGODB_URL")  # Get the connection string from environment variable

client = AsyncIOMotorClient(MONGODB_URL)
db = client.recipe_app  # Access your database
recipe_collection = db.recipes  # Access your collection