import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendResponse } from "./utils/sendResponse.js"
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {

    sendResponse(res, destinations)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

    const continent = req.url.split('/').pop()
    const filteredData = destinations.filter((destination) => {
      return destination.continent.toLowerCase() === continent.toLowerCase()
    })
    
    sendResponse(res, filteredData)

  } else {

    const data = {
      error: "not found",
      message: "The requested route does not exist"
    }

    sendResponse(res, data, 404)
  }
  
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
