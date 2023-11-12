import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { labels, authors, difficulties } from "./data"

const quizzes = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.datatype.number({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  difficulty: faker.helpers.arrayElement(difficulties).value,
  label: faker.helpers.arrayElement(labels).value,
  author: faker.helpers.arrayElement(authors).value,
}))

fs.writeFileSync(
  path.join(__dirname, "quizzes.json"),
  JSON.stringify(quizzes, null, 2)
)

//Testing
console.log("Quizzes generated.")