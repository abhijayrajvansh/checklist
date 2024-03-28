const PORT = process.env.PORT ?? 8000
const express = require('express');
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())


// get all checklists
app.get('/checklists/:userEmail', async (req, res) => {
  const { userEmail } = req.params

  try {
    const checklists = await pool.query('SELECT * FROM checklists WHERE user_email = $1', [userEmail])
    res.json(checklists.rows)
  } catch (error) {
    console.log(console.error(error));
  }
})


app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`)
})
