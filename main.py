from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI,Body

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str
    address: Optional[str] = None
    is_active: bool


@app.get("/")
def home():
    return {"Hello":"World"}

@app.post("/user/new")
def create_user(user:User = Body(...)):
    return user