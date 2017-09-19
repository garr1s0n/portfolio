const redirectSSL = require('redirect-ssl')

export default function (context) {
  context.app.use(redirectSSL)
}
