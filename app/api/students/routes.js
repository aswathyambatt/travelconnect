import { NextResponse } from "next/server";

export async function GET() {
  const students = [
    {
      id: 1,
      name: "Gauri",
      class: "S5 CSC",
    },
    {
      id: 2,
      name: "Vishnupriya",
      class: "S5 CSD",
    },
    {
      id: 3,
      name: "Bristo",
      class: "S5 CSB",
    },
    {
      id: 4,
      name: "Adithyan",
      class: "S5 CSA",
    },
    {
      id: 5,
      name: "Kailasnath",
      class: "S5 CSC",
    },
    {
      id: 6,
      name: "Alan",
      class: "S5 CSA",
    },
  ];

  return NextResponse.json(students);
}