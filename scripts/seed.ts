const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    // some stuff
  } catch (error) {
    console.error(error);
  } finally {
    db.prisma.$disconnect();
  }
}
