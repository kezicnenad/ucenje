// MODULES IMPORT AND VARIABLES
const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

// DEFINE EXPRESS.JS
const app = express();

// .ENV CONFIGURATION
dotenv.config();

// .ENV TOKEN CONFIG
process.env.TOKEN_SECRET;

// // MONGOOSE CONNECTION
// mongoose.Promise = global.Promise
// mongoose.connect(process.env.ATLAS_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // SETUP ROUTES SECURITY
// app.use(express.json());
// app.use(cookieParser());

// // HEADER BASED MECHANISM THAT ALLOWS TO INDICATE ANY ORIGINS, DOMAIN, SCHEME OR PORT
// app.use(
//   cors({
//     origin: [
//       "http://apstinencijskakviza.netlify.app",
//       "http://localhost:3000"
//     ],
//     credentials: true,
//   })
// );

// // BODYPARSER SETUP
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// // ROUTES
// routesApartman(app);
// routesOMeni(app);
// routesArikli(app);
// routesStatic(app);

// // SERVING STATIC FILES
// app.use(express.static('public'))

// ROOT TEST ENDPOINT
app.get('/', (req, res) => {
  res.send('Apstinencijska Kviza REST API Server running')
})

// SETUP SERVER
app.listen(port, () => {
  console.log("Server is running on port", port);
})