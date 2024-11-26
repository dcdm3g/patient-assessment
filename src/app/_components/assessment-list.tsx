/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "~/trpc/server"

export async function AssessmentList() {
  // Hey, we are using NextJS, so you can basically call it from a server 
  // component to retrieve the assessments.
  const assessments = await api.assessment.getAll()

  // Your beautiful UI goes here
  return JSON.stringify(assessments, null, 2)
}