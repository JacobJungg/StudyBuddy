import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "@/components/quizzes/columns"
import { DataTable } from "@/components/quizzes/data-table"
import { quizSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Quizzes",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for quizzes.
async function getQuizzes() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(root)/(routes)/quizzes/data/quizzes.json")
  )

  const quizzes = JSON.parse(data.toString())

  return z.array(quizSchema).parse(quizzes)
}

export default async function TaskPage() {
  const quizzes = await getQuizzes()

  return (
//Was an image
<>




      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Quizzes</h2>
            <p className="text-muted-foreground">
              Find the perfect quiz to build your knowledge!
            </p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
        <DataTable data={quizzes} columns={columns} />
      </div>
    </>
  )
}