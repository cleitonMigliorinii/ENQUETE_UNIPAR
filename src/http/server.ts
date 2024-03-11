import { PrismaClient } from "@prisma/client";
import { fastify } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { criarEnquete } from "./routes/criar-enquete";
import { listarEnquetes } from "./routes/listar-enquetes";
import { obterEnquete } from "./routes/obter-enquete";

const app = fastify()


app.register(criarEnquete)
app.register(listarEnquetes)
app.register(obterEnquete)


app.listen({port: 3333}).then( () => {
    console.log('SERVIDOR RODANDO')
})