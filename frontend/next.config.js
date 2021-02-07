const client = require('./lib/sanity')

console.log(client)

const isProduction = process.env.NODE_ENV === 'production'
const PageQuery = `
{
  "routes": *[_type == "routes"] {
    _type,
    ...,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }}
}`

const reduceRoutes = (obj, route) => {
  
  // console.log({obj})
  // console.log({route})
  const {page = {}, slug = {}, _type = ''} = route
  // console.log({_type})
  const { _createdAt, _updatedAt} = page
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  // console.log({path})
  obj[path] = {
    query: {
      slug: slug.current
    },
    _createdAt,
    _updatedAt,
    page: `/StaticPages`
  }
  return obj
}

module.exports = {
  trailingSlash: isProduction ? true : false,
  exportPathMap: async function () {
    const staticRoutes = await client.fetch(PageQuery)

    let routes = staticRoutes.routes

    const nextRoutes = {
      ...routes.filter(({slug}) => slug.current).reduce(reduceRoutes, {})
    }

    return nextRoutes
  }
}