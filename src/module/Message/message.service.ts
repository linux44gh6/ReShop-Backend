import MessageModel from "./message.model"

const createMessage = async (payload: any) => {
  const { sellerId, buyerId } = payload;
  const isExist = await MessageModel.findOne({ sellerId, buyerId });

  if (isExist) {
    // Merge messages correctly
    payload.message = [...isExist.message, ...payload.message];
        console.log(payload);
    const result = await MessageModel.findOneAndUpdate(
      { sellerId, buyerId },
      { message: payload.message },
      { new: true }
    );
    return result;
  } else {
    // Create new message document
    const result = await MessageModel.create(payload);
    return result;
  }
};

export const messageService={
    createMessage
}