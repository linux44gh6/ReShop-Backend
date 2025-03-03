import express from "express";
import { ChatController } from "./chat.controller"; 

const router = express.Router();

router.post("/", ChatController.sendMessage);

export const chatRoute = router;
