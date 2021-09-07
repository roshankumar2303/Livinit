const exp = require("express");
const app = exp();

// Importing 'path' module
const path = require('path');

// Connecting server.js to dist/Training-Project...
app.use(exp.static(path.join(__dirname, "dist/Training-Project")))

// MongoDB
const mc = require("mongodb").MongoClient;
const dbUri =
	"mongodb+srv://roshan_admin:roshan2303@mycluster.igsjk.mongodb.net/Livinit?retryWrites=true&w=majority";

let dbObj;
let mobileCol;
mc.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((client) => {
		// Get Database Object
		dbObj = client.db("Livinit");

		// Get Smartphones Collection and make it available to all APIs
		mobileCol = dbObj.collection("Smartphones");
		app.set("mobileCol", mobileCol);

		// Confirmation
		console.log("Connected to Database Successfully");
	})
	.catch((err) => {
		console.log("Error in db connectivity\n", err);
	});

// Import API routes
const mobilesApiRoute = require("./apis/mobileApi");

// Inform the server to forward 'req' object to mobile api based on path
app.use("/mobiles", mobilesApiRoute); // Using Middlewares

// Handling Unavailable Path
app.use((req, res, next) => {
	res.send({ message: `The path ${req.url} is not available` });
});

// Assign Port Number
const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
