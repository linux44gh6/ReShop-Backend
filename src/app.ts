import { Application, Request, Response } from "express"
import { Server, Socket } from "socket.io"
import cors from "cors"
import express from "express"
import router from "./routes"
import { notFound } from "./Middlewares/Not_Found"
import globalErrorHandler from "./Middlewares/globalErrorHandlers"
import http from "http"


const app: Application = express()
const server = http.createServer(app)

// Middleware
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/", router)

// Setup Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
})


  // Save and broadcast a new message
  
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

// Error handlers
app.use(notFound)
app.use(globalErrorHandler)

export { app, server }   // ⬅️ export both, since server is used in index.ts
