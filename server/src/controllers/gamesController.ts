import { Request, Response } from "express";
import pool from "../database";
class GamesController {
  public async lists(req: Request, res: Response) {
    await pool.query("SELECT * FROM games", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  }

  public async list(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    await pool.query("SELECT * FROM games WHERE id =?", [id], function (
      err,
      result,
      fields
    ) {
      if (err) throw err;
      res.json(result);
    });
  }

  public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    await pool.query("INSERT INTO games set ?", [req.body]);
    res.json({ mensaje: "Juego Guardado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM games WHERE ID = ?", [id]);
    res.json({ mensaje: "juego eliminado" });
  }

  public async put(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("UPDATE games set ? WHERE id=?", [req.body, id]);
    res.json({ mensaje: "actualizado" });
  }
}

export const gamesController = new GamesController();
export default gamesController;
