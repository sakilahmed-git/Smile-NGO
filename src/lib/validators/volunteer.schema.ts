import { z } from "zod";

// TODO: define real fields for volunteer
export const volunteerSchema = z.object({});
export type VolunteerInput = z.infer<typeof volunteerSchema>;
