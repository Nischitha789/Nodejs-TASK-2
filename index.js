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
    .send(`<h1><li>1.Get all Rooms with the endPoint / API / RoomApi</li></br>

  <li>2. Listing all rooms with booked data with the endPoint / API / CustomerDetails</li></br>

  <li>3.By using POST call create a room with the endPoint / API / CreateNewDetails</li></br>

  <li>4. Deleting the rooms with the endPoint / API / Delete /: id</li></br>

  <li>5. By using PUT call booking new hall with the endPoint / API / CreateNewHall /: id;</li></br>
</h1>`);});

app.listen(PORT, () => {
  console.log(`App is working in the port ${PORT}`);
});
