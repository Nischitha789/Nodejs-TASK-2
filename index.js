import express from "express";
import cors from "cors";
import ApiRouter from "./Router/Room.BookingRouter.js";
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use("/API", ApiRouter);

app.get("/", (req, res) => {
  res.status(200)
    .send("working well");
});

app.listen(PORT, () => {
  console.log(`App is working in the port ${PORT}`);
});
