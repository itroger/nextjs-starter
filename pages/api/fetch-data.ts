import { NextApiHandler } from 'next'

const FetchData: NextApiHandler = async (req, res) => {
  res.status(200).json({ render: req.query.render })
}

export default FetchData
