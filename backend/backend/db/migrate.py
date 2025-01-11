from sqlalchemy import create_engine
from sqlalchemy import text
import os

SQLALCHEMY_DATABASE_URL = 'mysql://root@localhost'
dir_path = os.path.dirname(os.path.realpath(__file__))
engine = create_engine(SQLALCHEMY_DATABASE_URI, echo=True)


if __name__ == "__main__":
    with engine.connect() as con:
        with open(f"{dir_path}/techtrek2025.sql") as file:
            query = text(file.read())
            con.execute(query)