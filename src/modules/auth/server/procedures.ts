import { z } from "zod";
import { db } from "@/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { eq } from "drizzle-orm";
import { usersTable } from "@/db/schema";


export const userRouter = createTRPCRouter({
    create: baseProcedure
        .input(z.object({
            name: z.string(),
            email: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            const [createdUser] = await db
                .insert(usersTable)
                .values({
                    ...input,
                })
                .returning()

            return createdUser
        })


});