import { Client } from "pg"

import { getAllMovesFromDb } from "../../../db/moves/get/all"

export const getAllMoves = async (client: Client) => {
  const result = await getAllMovesFromDb(client)

  return result
}
