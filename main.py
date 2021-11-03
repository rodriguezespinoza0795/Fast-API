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

@app.get("/")
def home():
    bbox = sql.bbox_connect()
    query = 'select * from e_employee where id_position=73 and is_active=1;'
    results = sql.plane_query_text(bbox, query)
    sql.conn_close(bbox)

    return results