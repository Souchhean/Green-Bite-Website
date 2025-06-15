import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "lao",
    lastName: "thomorn",
    email: "laothomorn@gmail.com",
    password: "laothomorn",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
