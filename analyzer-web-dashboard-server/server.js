// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://sachindumalshan:Malshan123@iotcluster.6rmyakh.mongodb.net/sensor_data?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.error('Connection error:', err));
db.once('open', () => console.log('Connected to MongoDB'));

// Define schemas and models with explicit collection names
// Assuming the time series collections have a time field named 'timestamp'
const heightSchema = new mongoose.Schema({
  line: String,
  timestamp: Date,
});
const Height = mongoose.model('Height', heightSchema, 'plant_height');

const areaSchema = new mongoose.Schema({
  line: String,
  timestamp: Date,
});
const Area = mongoose.model('Area', areaSchema, 'plant_area');

const statusSchema = new mongoose.Schema({
  line: String,
  timestamp: Date,
});
const Status = mongoose.model('Status', statusSchema, 'plant_status');

const soilSchema = new mongoose.Schema({
  line: String,
  timestamp: Date,
});
const Soil = mongoose.model('Soil', soilSchema, 'plant_soil');

const tempSchema = new mongoose.Schema({
  line: String,
  timestamp: Date,
});
const Temp = mongoose.model('Temp', tempSchema, 'plant_temp');

const imagesSchema = new mongoose.Schema({
  filename: String,
  image_data: String,
  timestamp: Date,
});
const Images = mongoose.model('Images', imagesSchema, 'plant_images');

// Define routes
app.get('/api/height', async (req, res) => {
  try {
    const heights = await Height.find().sort({ timestamp: -1 });
    res.json(heights);
  } catch (error) {
    res.status(500).send('Error retrieving height data');
  }
});

app.get('/api/area', async (req, res) => {
  try {
    const areas = await Area.find().sort({ timestamp: -1 });
    res.json(areas);
  } catch (error) {
    res.status(500).send('Error retrieving area data');
  }
});

app.get('/api/status', async (req, res) => {
  try {
    const statuss = await Status.find().sort({ timestamp: -1 });
    res.json(statuss);
  } catch (error) {
    res.status(500).send('Error retrieving area data');
  }
});

app.get('/api/soil', async (req, res) => {
  try {
    const soils = await Soil.find().sort({ timestamp: -1 });
    res.json(soils);
  } catch (error) {
    res.status(500).send('Error retrieving soil data');
  }
});

app.get('/api/temp', async (req, res) => {
  try {
    const temps = await Temp.find().sort({ timestamp: -1 });
    res.json(temps);
  } catch (error) {
    res.status(500).send('Error retrieving temperature data');
  }
});

app.get('/api/images', async (req, res) => {
  try {
    const images = await Images.find().sort({ timestamp: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).send('Error retrieving images');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
