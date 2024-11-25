import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const assessmentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({
      type: z.string().trim().min(1),
      patientName: z.string().min(1),
      date: z.date(),
      finalScore: z.number().min(0).max(100),
    }))
    .mutation(async ({ ctx, input: { type, patientName, date, finalScore } }) => {
      return ctx.db.assessment.create({
        data: {
          type,
          patientName,
          date,
          finalScore,
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
