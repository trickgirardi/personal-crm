import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [
    {
      provide: 'PRISMA_CLIENT',
      useFactory: () =>
        new PrismaClient({
          datasources: {
            db: {
              url: process.env.DATABASE_URL,
            },
          },
        }),
    },
  ],
  exports: ['PRISMA_CLIENT'],
})
export class PrismaModule {}
