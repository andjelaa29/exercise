from typing import Union

from pydantic import BaseModel

from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware

from users import get_users

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

class User(BaseModel):
    firstName: str
    lastName: str
    age: int
    gender: str
    email: str
    phone: str

def get_user_by_id(user_id: int):
    users = get_users()
    for user in users:
        if user["id"] == user_id:
            return user
    return None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/users")
def list_users():
    users = get_users()
    return users

@app.put("/users/{user_id}", response_model=dict)
def update_user(user_id: int, user_data: User):
    user = get_user_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    user["firstName"] = user_data.firstName
    user["lastName"] = user_data.lastName
    user["age"] = user_data.age
    user["gender"] = user_data.gender
    user["email"] = user_data.email
    user["phone"] = user_data.phone

    return user
    