import { Request, Response } from "express";
import * as services from "../services/userService";

export async function ranking (req: Request, res: Response) {
    const result = await services.ranking()
    res.send({ fighters: result.rows })
}

export async function battle (req: Request, res: Response) {
    const users: {firstUser: string, secondUser: string} = req.body
    console.log(users)
    const result = await services.battle(users.firstUser, users.secondUser)
    if (result === 'first') {
        res.send(
            {
                winner: users.firstUser,
                loser: users.secondUser,
                draw: false
            }
        )
    } else if (result === 'second') {
        res.send(
            {
                winner: users.secondUser,
                loser: users.firstUser,
                draw: false
            }
        )
    } else {
        res.send(
            {
                winner: null,
                loser: null,
                draw: true
            }
        )
    }
}