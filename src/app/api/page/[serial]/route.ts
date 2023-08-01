import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function DELETE(request: Request, params: { params: { serial: string } }) {
  const data = await prisma.page.delete({
    where: {
      serial: params.params.serial,
    },
  });

  return NextResponse.json(data, { status: 200 });
}

export async function PATCH(request: Request, params: { params: { serial: string } }) {
  const req = await request.json();
  const data = await prisma.page.update({
    where: {
      serial: params.params.serial,
    },
    data: {
      path: req.path,
      properties: req.properties,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(data, { status: 200 });
}