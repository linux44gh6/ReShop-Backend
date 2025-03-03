export interface IProduct {
    title: string;
    description: string;
    price: number;
    condition: "new" | "used"; 
    images?: string[]; 
    userID: string; 
    status: "available" | "sold";
}
