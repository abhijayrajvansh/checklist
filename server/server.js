const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json()); // now express can use and parse json, yayy!


// fetch all checklists
app.get("/checklists/", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM checklists;");
    res.send(response.rows);
  } catch (error) {
    console.log("error:", error);
  }
});

// fetch all checklists from specific user
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
  const { user_email, title, progress, date } = req.body;
  
  try {
    await pool.query(
      "INSERT INTO checklists (id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5);",
      [id, user_email, title, Number(progress), date]
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
    const { title, progress, date} = req.body;

    await pool.query(
      "UPDATE checklists SET title = $1, progress = $2, date = $3 WHERE id = $4;", 
      [title, progress, date, id]
    );
    
    res.send({ msg: 'success'});
  }
  catch (error) {
    console.error(error)
  }
})


// delete a checklist
app.delete('/checklists/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM checklists WHERE id = $1;", [id])
    res.send({ msg: 'success' })
  } 
  
  
  catch (error) {
    console.log('error: ', error)
  }
})



app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
