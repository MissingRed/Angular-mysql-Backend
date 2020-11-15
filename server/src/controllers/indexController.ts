import { Request, Response } from "express";

class IndexController {
  public index(req: Request, res: Response) {
    res.json({ text: "API DE JUEGOS" });
  }
}

export const indexController = new IndexController();
