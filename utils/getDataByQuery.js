export function getDataByQuery(data, queryObj) {

    const {country, continent, is_open_to_public} = queryObj

    console.log("queryobj is: ", queryObj)
    console.log("continent: ", continent)
    console.log((!country && !continent && !is_open_to_public))

    if (!country && !continent && !is_open_to_public) return data
    
    const output = data.filter( item => {
        if ( country && item.country.toLowerCase() != country.toLowerCase() ) return false
        if ( continent && item.continent.toLowerCase() != continent.toLowerCase() ) return false
        if ( is_open_to_public && item.is_open_to_public.toString() != is_open_to_public.toString() ) return false
    return true
    })

    return output
}