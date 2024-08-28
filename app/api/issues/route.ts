import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/validationSchemas";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format }, { status: 400 });
    }

    // Extract validated data
    const { title, description } = validation.data;

    // Create new issue
    const newIssue = await prisma.issue.create({
      data: { title, description },
    });

    // Return success response
    return NextResponse.json({ id: newIssue.id, message: "Issue created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating issue:", error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}