import { Request, Response } from 'express'
import { makeFilter } from '../makeFilter'

export function getFilter(req: Request, res: Response) {
  const skus = req.query['skus']?.toString()

  let resp: string
  if (skus) {
    resp = makeFilter(skus)
  } else {
    resp = 'NOOOOO'
  }
  res.json(resp)
}
