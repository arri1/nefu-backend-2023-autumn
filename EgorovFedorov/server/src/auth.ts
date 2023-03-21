import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { JwtPayload, verify } from "jsonwebtoken";
import { ParsedQs } from "qs";

export const APP_SECRET = process.env.APP_SECRET;

export async function authenticateUser(
  prisma: PrismaClient,
  req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
) {
  const body = req.body.query;
  const whitelist = process.env.WHITELIST.split(" ");
  const isInWhitelist = whitelist.some((item) => body.includes(item));

  const header = req.headers.authorization;
  if (header) {
    const token = req.headers.authorization.split(" ")[1];
    const tokenPayload = verify(token, APP_SECRET) as JwtPayload;
    const userId = tokenPayload.id;
    return prisma.user.findUnique({ where: { id: userId } });
  }

  if (!isInWhitelist) {
    throw new Error("Login in to access resource");
  }

  return null;
}
