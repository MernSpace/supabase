import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { userRouter } from '@/modules/auth/server/procedures';
export const appRouter = createTRPCRouter({
    user: userRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;