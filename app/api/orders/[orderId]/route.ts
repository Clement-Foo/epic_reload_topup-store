import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

export async function GET(
  req: Request,
  context: { params: Promise<{ orderId: string }> }
) {
  const params = await context.params;

  const order = await prisma.order.findUnique({
    where: {
      orderId: params.orderId.trim(),
    },
  });

  if (!order) {
    return Response.json(
      {
        error: "Order not found",
        searchedOrderId: params.orderId,
      },
      { status: 404 }
    );
  }

  return Response.json(order);
}