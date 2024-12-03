# main.py
import random
import sqlite3
from fastapi import FastAPI, HTTPException, Depends, Request, logger
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from passlib.context import CryptContext
from pydantic import BaseModel
from typing import List, Dict
import logging

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Database setup
DATABASE_URL = "sqlite:///./users.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    
class LoginRequest(BaseModel):
    username: str
    password: str
    



Base.metadata.create_all(bind=engine)


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
@app.post("/login")
async def login_user(request: LoginRequest):
    if request.username and request.password:
        return {"message": f"Welcome, {request.username}!"}
    else:
        raise HTTPException(status_code=400, detail="Invalid username or password")


daily_code = str(random.randint(100000, 999999))
print(f"Daily Attendance Code : {daily_code}")

conn = sqlite3.connect('attendance.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        code TEXT
    )
''')
conn.commit()

@app.post("/verify-attendance/")
async def verify_attendance(request: Request):
    data = await request.json()
    code = data.get("code")
    
    if code != daily_code:
        cursor.execute('INSERT INTO attendance (code) VALUES (?)', (code,))
        conn.commit()
        return {"message": "You are marked as present!"}
    else:
        raise HTTPException(status_code=400, detail="Incorrect code. Please try again.")
    
    

