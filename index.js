const express = require("express");
const mongodb = require("mongodb");
const app = express();
var cors = require('cors');
var mongoose = require('mongoose');
app.use(express.json());
app.listen(3000, (error) => {
    if (!error){
        console.log("Server Started Sucessfully 3000")
    };
})
app.set("view engine","ejs");
app.use(cors())
mongoose.connect("mongodb://localhost:27017/admin")

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    description: {
        type: String,
       
    },
    
});
const UserModel = mongoose.model('akas', UserSchema);
app.get('/akas', async (req, res) => {
    try {
      const items = await UserModel.find();  // Fetch all items from MongoDB
      res.json(items);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

app.delete('/akas/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
      const result = await UserModel.findByIdAndDelete(id);  // Delete the item by ID
      if (!result) {
        return res.status(404).send({ message: 'Item not found' });
      }
      res.status(200).send({ message: 'Item deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Server error' });
    }
});

const DataModel = mongoose.model('aka', UserSchema);
DataModel.createIndexes();
app.post("/aka", async (req, resp) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        console.log('Received new todo:', { title, description });
        const newTodo = new DataModel({ title, description });
        await newTodo.save();
        resp.status(201).json({ message: "Todo item added successfully", data: newTodo });


        

    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
