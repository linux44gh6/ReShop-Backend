interface ITransaction {
    buyerID: string;
    sellerID: string;
    itemID: string;
    status: "pending" | "completed";
  }
  export default ITransaction  