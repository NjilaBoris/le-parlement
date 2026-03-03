import * as z from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(5, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  content: z.string().min(1, "Content is required"),
  userFirstName: z.string().min(1, "First name is required"),
  userLastName: z.string().min(1, "Last name is required"),
  createdAt: z.string().min(1, "Date is required"),
  category: z.string().min(1, "Category is required"),
  image: z.string(),
});
