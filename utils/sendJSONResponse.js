export function sendJSONResponse(response, statusCode = 200, data, contentType = "application/json") {

    //CORS
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Methods", "GET")
    //
    response.setHeader("Content-Type", contentType)
    response.statusCode = statusCode
    response.end(JSON.stringify(data))
} 