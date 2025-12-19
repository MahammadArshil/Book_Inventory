const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const bookSetRoutes = require("./routes/booksetRoutes");
const PORT = 1212;

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/book-set", bookSetRoutes);


app.listen(PORT, (error) => {
    if (error) {
        console.log("Error", error);
        return;
    }
    console.log(`Server running on Port ${PORT}.`);
});