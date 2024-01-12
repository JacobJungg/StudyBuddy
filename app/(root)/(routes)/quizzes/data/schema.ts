import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const quizSchema = z.object({
  id: z.string(),
  title: z.string(),
  difficulty: z.string(),
  label: z.string(),
  author: z.string(),
})

export type Quiz = z.infer<typeof quizSchema>