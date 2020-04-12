import * as express from "express";

const app = express();

app.get("/", (req,res) => {
  res.json({status: 200, mwssage: "200 OK"})
})

export default app;