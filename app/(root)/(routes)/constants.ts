/**
 * StudyBuddy Jacob Jung
 * Controls validation for form
 */

import * as z from "zod";

export const formSchema = z.object({
    //Default value
    prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
});