import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Crypto from "crypto";
import MakeSerial from "@/utils/generator";

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.page.findMany();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const req = await request.json();
  const data = await prisma.page.create({
    data: {
      serial: MakeSerial("PAGE-"),
      path: req.path,
      properties: req.properties,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  return NextResponse.json(data);
}