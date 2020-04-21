export interface Request {
  id: string | number;
  song: string;
  artist: string;
  eventId: string | number;
  memo: string;
  status: "pending" | "accepted" | "complete" | "rejected" | "now playing";
  requesterId: string | number;
  originalRequestId: string | number;
  type: "top up" | "original";
  amount: string;
  createdOn: string | number;
  createdBy: string | number;
  updatedOn: string | number;
  updatedBy: string | number;
}