import { PrismaClient, User } from "@prisma/client";
import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { authenticateUser } from "./auth";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  currentUser: User | null;
}

export async function createContext(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>) {
  return {
    prisma,
    currentUser: await authenticateUser(prisma, req),
  };
}

export async function createContextForTgBot() {
  return {
    prisma
  };
}