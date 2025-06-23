export function sendJSONResponse(response, statusCode = 200, data, contentType = "application/json") {

    response.setHeader("Content-Type", contentType)
    response.statusCode = statusCode
    response.end(JSON.stringify(data))
} 