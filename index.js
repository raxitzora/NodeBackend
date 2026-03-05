import express from "express"

const app = express();

app.use(express.json());

let users = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@company.com",
    "department": "Engineering",
    "position": "Senior Software Engineer",
    "salary": 95000,
    "joinDate": "2020-03-15",
    "status": "active"
  },
  {
    "id": 2,
    "name": "Bob Martinez",
    "email": "bob.martinez@company.com",
    "department": "Marketing",
    "position": "Marketing Manager",
    "salary": 78000,
    "joinDate": "2019-07-22",
    "status": "active"
  },
  {
    "id": 3,
    "name": "Clara Smith",
    "email": "clara.smith@company.com",
    "department": "Human Resources",
    "position": "HR Specialist",
    "salary": 62000,
    "joinDate": "2021-11-01",
    "status": "active"
  },
  {
    "id": 4,
    "name": "David Lee",
    "email": "david.lee@company.com",
    "department": "Finance",
    "position": "Financial Analyst",
    "salary": 72000,
    "joinDate": "2018-05-10",
    "status": "inactive"
  },
  {
    "id": 5,
    "name": "Eva Patel",
    "email": "eva.patel@company.com",
    "department": "Engineering",
    "position": "DevOps Engineer",
    "salary": 88000,
    "joinDate": "2022-01-17",
    "status": "active"
  }
]

app.get("/users",(req,res)=>{
    res.send(users)
})

app.get("/users/:id",(req,res)=>{
    const id = req.params.id
    console.log(id);
    res.json(users.find(user=>user.id==id))
})

app.get("/search",(req,res)=>{
    res.send("Hello");
})







app.listen(3000, () => {});
  console.log("Server is running on port 3000");