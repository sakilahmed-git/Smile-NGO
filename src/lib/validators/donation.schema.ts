import { z } from "zod";

// TODO: define real fields for donation
export const donationSchema = z.object({});
export type DonationInput = z.infer<typeof donationSchema>;
