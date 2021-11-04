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
    sql.load_adh_report()
    bbox = sql.bbox_connect()
    query = "call sp_write_cms_inout(5,'','',0);"
    results = sql.plane_query_text(bbox, query)
    sql.conn_close(bbox)
    return results
    
