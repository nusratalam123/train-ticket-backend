import { Router } from "express";
import { createTickets } from "../controller/ticket.controller";

const router = Router();

// create new stations
router.post("/create", createTickets);

export default router;
