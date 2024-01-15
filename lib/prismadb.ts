import { Prisma, PrismaClient } from "@prisma/client";
const prismadb = globalThis || new PrismaClient();
if (process.env.NODE_ENV != "production") global.prisma = prismadb;
export default prismadb; 