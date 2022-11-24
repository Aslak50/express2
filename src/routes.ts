import { Router } from 'express'
import { getFilter } from './back/controllers/filter'

export function routes() {
  const router = Router()
  router.get('/filter', getFilter)

  return router
}
