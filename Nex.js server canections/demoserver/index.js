const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT ||5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//use midle ware

app.use(cors({
  origin:['http://localhost:3000',"http://localhost:5173"],
    credentials:true
}
));
app.use(express.json())



const uri = "mongodb+srv://demoforpractice:GPDrcJBunvjnpZql@cluster0.wn8gk0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("Cars-doctors")
    const booking = database.collection("booking")
   
    app.get('/booking',async (req,res) => {
    
        const result = await booking.find().toArray();
        res.send(result);
        
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res) => {
    res.send("success")
})


app.listen(port,() => {
    console.log(`server app listening on port ${port}`)
})