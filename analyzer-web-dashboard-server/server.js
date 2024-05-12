const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3004;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/plant',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB database");
})
.catch((error) => {
  console.error("Error connecting to MongoDB database:", error);
});

// Create a Mongoose model for Plant
const PlantData = mongoose.model('PlantData',{
  Seller_Id: String,
  prod_Date: Date,
  prod_time: String,
});

// Route for adding plant data
app.post('/addPlantData', async (req, res) => {
  try {
    // Extract data from request body
    const { Seller_Id, prod_Date, prod_time } = req.body;

    // Create a new ChainData document with provided data
    const newPlantData = new PlantData({
      Seller_Id,
      prod_Date,
      prod_time,
    });

    // Save the document to the database
    await newPlantData.save();

    // Send success response
    res.status(201).json({
      message: "Plant data added successfully",
      plantID: newPlantData._id,
    });
  } catch (error) {
    // Handle errors
    console.error("Error adding plant data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Route for fetching plant data
app.get('/getPlantData', async (req, res) => {
  try {
    // Fetch all PlantData documents from the database
    const plantData = await PlantData.find();

    // Send success response with fetched data
    res.status(200).json({
      message: "Plant data fetched successfully",
      plantData,
    });
  } catch (error) {
    // Handle errors
    console.error("Error fetching plant data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
