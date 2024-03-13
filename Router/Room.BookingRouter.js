import express from "express";
import { BookingRooms,  bookedRoomDetails, deleteRoomById, AllCustomerDetails, CreateRoomNewRoom} from "../Controller/Controller.roomBooking.js";

const router = express.Router();

router.get("/RoomApi", bookedRoomDetails);
router.get("/CustomerDetails", AllCustomerDetails);
router.post("/CreateNewDetails", CreateRoomNewRoom);
router.delete("/Delete/:id", deleteRoomById);
router.put("/CreateNewHall/:id", BookingRooms);
export default router;
