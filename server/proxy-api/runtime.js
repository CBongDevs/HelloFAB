export default ({ Router }) => {
  Router.on('/api/:route(.*)', ({ params, settings }) => {
    return fetch(`${settings.API_URL}/api/${params.route}`);
  })
}