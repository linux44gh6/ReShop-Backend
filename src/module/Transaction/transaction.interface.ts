import { ObjectId } from "mongoose";

interface ITransaction {
    buyerID:ObjectId;
    sellerID: ObjectId;
    itemID: ObjectId;
    status: "pending" | "completed";
  }
  export default ITransaction  