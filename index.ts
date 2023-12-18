import express from "express";

const app = express();
app.use(express.json());

app.get("/post", (req, res) => {
  res.status(200).json({ message: "post routes" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
export default app;
