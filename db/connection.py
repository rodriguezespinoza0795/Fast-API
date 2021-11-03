import sqlalchemy as sql
import pandas as pd
from datetime import datetime

def bbox_connect():
    database_type = 'mysql'
    user = 
    password =
    host = 
    database = 'bBox'
    conn_string = 'mysql+pymysql://{}:{}@{}/{}'.format(user, password, host, database)
    sql_conn = sql.create_engine(conn_string)
    return sql_conn

def plane_query_text(sql_conn, query_text):
    lista = []
    stmt = sql_conn.execute(f"{query_text}")
    myresult = stmt.fetchall()  
    for row in myresult:
        lista.append(dict(row))
    return lista

def conn_close(sql_conn):
    connection = sql_conn.raw_connection()
    connection.close()

header = ['CAE','LOGIN_ID','Extn','logged_in', 'login', 'logged_out', 'logout', 'logout_date', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9']
df = pd.read_csv('./../login_logout.txt',names=header, skiprows=2, delimiter=';')
df['logout_date'].ffill(inplace=True)
#pd.to_datetime(df['logout_date'], format='%d/%m/%y').dt.strftime('%Y-%m-%d')
#print(df[['LOGIN_ID', 'login', 'logout', 'logout_date']])


print(datetime.datetime.strptime(df['logout_date'], '%Y-%m-%d').strftime('%m/%d/%y'))