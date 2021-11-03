<<<<<<< HEAD
from fastapi import FastAPI
from db import connection as sql
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
=======
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

>>>>>>> a779270a29e0a65ad34a3664ff287254b30e74e3

@app.get("/")
def home():
    bbox = sql.bbox_connect()
    query = 'select * from e_employee where id_position=73 and is_active=1;'
    results = sql.plane_query_text(bbox, query)
    sql.conn_close(bbox)

<<<<<<< HEAD
    return results
=======
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
>>>>>>> a779270a29e0a65ad34a3664ff287254b30e74e3
