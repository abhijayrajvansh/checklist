const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json()); // now express can use and parse json, yayy!

app.get("/checklists/", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM checklists;");
    res.send(response.rows);
  } catch (error) {
    console.log("error:", error);
  }
});

// get all checklists...
app.get("/checklists/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  try {
    const checklists = await pool.query(
      "SELECT * FROM checklists WHERE user_email = $1",
      [userEmail]
    );
    res.json(checklists.rows);
  } catch (error) {
    console.log(console.error(error));
  }
});



// create a new checklist
app.post("/checklists", async (req, res) => {
  const id = uuidv4();
  const { userEmail, title, progress, date } = req.body;
  
  try {
    const newChecklist = await pool.query(
      "INSERT INTO checklists (id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5);",
      [id, userEmail, title, progress, date]
    );

    res.send({ msg: "success" });
  } catch (error) {
    console.error(error);
  }
});



// edit a checklist
app.put('/checklists/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const { user_email, title, progress, date} = req.body;

    const modifiedChecklist = await pool.query(
      "UPDATE checklists SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;", 
      [user_email, title, progress, date, id]
    );
    
    res.send({ msg: 'success'});
  }
  catch (error) {
    console.error(error)
  }
})




app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
