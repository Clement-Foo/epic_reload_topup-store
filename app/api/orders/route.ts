import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

function generateOrderId() {
  return "ORD" + Date.now();
}

export async function POST(req: Request) {
  const body = await req.json();

  const order = await prisma.order.create({
    data: {
      orderId: generateOrderId(),
      game: body.game,
      playerId: body.playerId,
      serverId: body.serverId,
      package: body.package,
      price: Number(body.price),
      status: "PENDING_PAYMENT",
    },
  });

  return Response.json(order);
}