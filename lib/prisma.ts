// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Garante que apenas uma instância do PrismaClient é criada
// e reutilizada em hot-reloads do Next.js
// Isso evita múltiplas conexões com o DB em desenvolvimento
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['query'], // Opcional: para ver as queries SQL no console (útil em dev)
  });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;