export interface chat {
  id?: BigInteger;
  sender_id: BigInteger;
  receiver_id: BigInteger;
  message_content: string;
}
