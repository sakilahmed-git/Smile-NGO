import { z } from "zod";

// TODO: define real fields for auth
export const authSchema = z.object({});
export type AuthInput = z.infer<typeof authSchema>;
