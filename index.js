import express, { response } from "express"

const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/api/data",(req,res)=>{
    res.json({message:"Welcone to Data API"},{response:"Success"});
})





app.post("/players",(req,res)=>{
    const body = req.body;
    res.send(body)
})


app.listen(3000, () => {});
  console.log("Server is running on port 3000");