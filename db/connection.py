import sqlalchemy as sql
import pandas as pd
from datetime import datetime

def bbox_connect():
    user = ''
    password = ''
    host = ''
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

def load_adh_report():
    header = ['CAE','LOGIN_ID','Extn','logged_in', 'login', 'logged_out', 'logout', 'logout_date', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9']
    df = pd.read_csv('login_logout.txt',names=header, skiprows=2, delimiter=';', parse_dates=['logout_date'])
    df['logout_date'].ffill(inplace=True)
    df['login'] = pd.to_datetime(df['login']).dt.strftime('%H:%M:%S')
    df['logout'] = pd.to_datetime(df['logout'], errors='coerce').dt.strftime('%H:%M:%S')
    df =df[['LOGIN_ID', 'login', 'logout', 'logout_date']]
    engine = bbox_connect()
    df.to_sql('tbl_adh_report_temp', con = engine, if_exists = 'replace')
    conn_close(engine)
