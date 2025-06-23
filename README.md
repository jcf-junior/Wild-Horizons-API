# Wild Horizons API 🌍
### Practice Project to learn backend development with Node.JS.

Wild Horizons API contains information about several points of interest around the world, and information such as:
- Name
- Country
- Continent
- Description
- Is it open to the public?
- Fun facts;
- and, a UUID!
## How to fetch data?

#### Returns all items

```http
  GET /api

````
#### Return destination based on URL parameters
```http
  GET /api/continent/${continent}
  GET /api/country/${country}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `continent`      | `string` | Any continent, e.g. Asia  |
| `country` | `string` | Any country, e.g. China

##### Example usage

```http
  GET /api/country/USA
```


#### Return destination based on queries
```http
  GET /api?continent=${continent}
  GET /api?country=${country}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `continent`      | `string` | Any continent, e.g. Asia  |
| `country` | `string` | Any country, e.g. China

##### Example usage

```http
  GET /api?continent=South%20America
  GET /api?continent=Europe
```