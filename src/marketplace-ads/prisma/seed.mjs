import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const ads = [
    { name: "iPhone 15", description: "Casi nuevo", price: 800 },
    { name: "Bicicleta de montaña", description: "21 marchas", price: 150 },
    { name: "Monitor 4K", description: "27 pulgadas", price: 300 },
  ];
  await prisma.ad.createMany({
    data: ads,
  });
  console.log("✅ Anuncios creados correctamente");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
