import express from "express";
import personagemController from "../controllers/animeController.js";

const personagensRouter = express.Router();

// Rotas de Animes
// GET /api/animes - Listar todos os animes
personagensRouter.get("/", personagemController.getAllPersonagens);

// GET /api/animes/:id - Obter um anime pelo ID
personagensRouter.get("/:id", personagemController.getPersonagemById);

// POST /api/animes - Criar um novo anime
personagensRouter.post("/", personagemController.createPersonagem);

// PUT /api/animes/:id - Atualizar um anime
personagensRouter.put("/:id", personagemController.updatePersonagem);

// DELETE /api/animes/:id - Remover um anime
personagensRouter.delete("/:id", personagemController.deletePersonagem);

export default personagensRouter;
