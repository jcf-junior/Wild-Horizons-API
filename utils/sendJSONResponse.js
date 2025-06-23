export function sendJSONResponse(response, data, statusCode = 200, contentType = "application/json") {

    response.setHeader("Content-Type", contentType)
    response.statusCode = statusCode
    response.end(JSON.stringify(data))
} 