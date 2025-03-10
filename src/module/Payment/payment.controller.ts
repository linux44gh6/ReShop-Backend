import { StatusCodes } from "http-status-codes";
import { CatchAsync } from "../../Utils/CatchAsync";
import { createCheckoutSession } from "./payment.services";
import { sendResponse } from "../../Utils/SendResponse";


export const stripePayment= CatchAsync(async (req, res) => {
    const { items } = req.body;
    const session = await createCheckoutSession(items);
    return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK, 
        message: "Payment Success",
        data: { sessionId: session?.id }, 
    });
});
export const stripePaymentController={
    stripePayment
}