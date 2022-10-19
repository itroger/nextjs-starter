import { NextApiHandler } from 'next'

const DynamicAPIRoutes: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json({
        method: `GET With ${req.query.id}`
      })
      break
    case 'POST':
      res.status(200).json({
        method: `POST ${req.query.id}`
      })
      break
    case 'PUT':
      res.status(201).json({
        method: `PUT ${req.query.id}`
      })
      break
    case 'DELETE':
      res.status(204).json({
        method: `DELETE ${req.query.id}`
      })
  }
}

export default DynamicAPIRoutes
