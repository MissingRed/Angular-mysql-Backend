import { Router } from "express";
import gamesController from "../controllers/gamesController";

class GamesRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", gamesController.lists);
    this.router.get("/:id", gamesController.list);
    this.router.post("/", gamesController.create);
    this.router.delete("/:id", gamesController.delete);
    this.router.put("/:id", gamesController.put);
  }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
