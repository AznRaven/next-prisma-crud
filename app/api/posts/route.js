import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, description } = body;
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json({ message: "POST Error", error }, { status: 500 });
  }
};
export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "GET Error", error }, { status: 500 });
  }
};
