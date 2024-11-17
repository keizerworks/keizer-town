import {PrismaClient} from "@prisma/client";

// singleton pattern to store prismaClient
declare global {
	var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (!global.prisma) {
	global.prisma = new PrismaClient();
}

prisma = global.prisma;

export default prisma;
