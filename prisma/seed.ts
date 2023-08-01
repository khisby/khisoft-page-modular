import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const component = await prisma.component.create({
    data: {
      serial: "COMP-KHISOFT1",
      name: "banner",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const componentDetail = await prisma.componentDetail.create({
    data: {
      serial: "COMPDET-KHISOFT1",
      name: "imgUrl",
      type: "string",
      defaultValue: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      componentSerial: component.serial,
    },
  });

  const page = await prisma.page.create({
    data: {
      serial: "PAGE-KHISOFT1",
      path: "/khisoft",
      properties: { title: "Khisoft Landing Page" },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const pageComponent = await prisma.pageComponent.create({
    data: {
      serial: "PAGECOMP-KHISOFT1",
      pageSerial: page.serial,
      componentSerial: component.serial,
      sequence: 1,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const pageCompDet = await prisma.pageComponentDetail.create({
    data: {
      serial: "PAGECOMPDET-KHISOFT1",
      pageComponentSerial: pageComponent.serial,
      componentDetailSerial: componentDetail.serial,
      value: "https://avatars.githubusercontent.com/u/24775167?v=4",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const component2 = await prisma.component.create({
    data: {
      serial: "COMP-KHISOFT2",
      name: "profile",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.componentDetail.create({
    data: {
      serial: "COMPDET-KHISOFT2",
      name: "profilPictureUrl",
      type: "string",
      defaultValue: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      componentSerial: component2.serial,
    },
  });

  await prisma.componentDetail.create({
    data: {
      serial: "COMPDET-KHISOFT3",
      name: "title",
      type: "string",
      defaultValue: "Hi, I'am Khisby",
      createdAt: new Date(),
      updatedAt: new Date(),
      componentSerial: component2.serial,
    },
  });

  await prisma.componentDetail.create({
    data: {
      serial: "COMPDET-KHISOFT4",
      name: "subtitle",
      type: "text",
      defaultValue: "I`am work as Software Engineer in Ruangguru",
      createdAt: new Date(),
      updatedAt: new Date(),
      componentSerial: component2.serial,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
