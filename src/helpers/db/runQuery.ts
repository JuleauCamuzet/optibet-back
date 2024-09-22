import { Client } from 'pg'

export const runQuery = async (
  query: string,
  values: unknown[],
  client: Client
) => {
  try {
    const res = await client.query(query, values)

    return res
  } catch (error) {
    console.error(error)

    return null
  }
}
