import { z } from "zod";

// TODO: define real fields for contact
export const contactSchema = z.object({});
export type ContactInput = z.infer<typeof contactSchema>;
