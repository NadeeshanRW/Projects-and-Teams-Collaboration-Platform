import { Code } from "lucide-react";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password must be required"),
  
});

export const registerSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().email(),
    password: z.string().min(8, " minimum 8 characters"),
    });