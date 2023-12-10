import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return NextResponse.json(
        { message: "Post not found", error },
        { status: 404 }
      );
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: "GET Error", error }, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const body = await req.json();
    const { title, description } = body;

    const { id } = params;

    const updatePost = await prisma.post.update({
      where: { id },
      data: {
        title,
        description,
      },
    });
    if(!updatePost){
        return NextResponse.json({message:'Update Failed'},{status:500})
    }
    return NextResponse.json(updatePost);
  } catch (error) {
    return NextResponse.json({ message: "PATCH Error", error }, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    await prisma.post.delete({
        where:{id}
    });

    return NextResponse.json("Post deleted");
  } catch (error) {
    return NextResponse.json({ message: "DELETE Error", error }, { status: 500 });
  }
};
