from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI,Body,Query, Path

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

@app.get("/person/detail")
def show_person(
    name: Optional[str] = Query(
        None, 
        min_length=1, 
        max_length=50,
        title="Username",
        description="This is the user name. It's between 1 and 50 characters"
        ),
    age: int = Query(
        ...,
        title="User age",
        description="This is the user age. It's required"
        )
    ): 
    return {name: age}

@app.get("/person/detail/{id}")
def show_person(id: int = Path(
    ..., 
    gt=0,
    title="User id",
    description="This is the user id. It's required"
    )
): 
    return {id: "It exists!"}