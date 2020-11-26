import { serve } from './deps/http.ts'
import { args, EarlyExitFlag, MAIN_COMMAND, PartialOption, FiniteNumber, Text, BinaryFlag } from './deps/args.ts'
import { green, blue, underline } from './deps/colors.ts'

const parser = args.describe('Launch an HTTP grabber')
  .with(EarlyExitFlag('help', {
    describe: 'Print help',
    exit () {
      console.log('USAGE:')
      console.log('\thttp-grabber [options]')
      console.log(parser.help())
      return Deno.exit(0)
    }
  }))
  .with(PartialOption('port', {
    alias: ['p'],
    describe: 'Server port',
    type: FiniteNumber,
    default: 8080
  }))
  .with(PartialOption('host', {
    describe: 'Server host',
    type: Text,
    default: '0.0.0.0'
  }))
  .with(BinaryFlag('with-headers', {
    describe: 'Print request headers (default: false)'
  }))
  .with(BinaryFlag('with-body', {
    describe: 'Print request body (default: false)'
  }))

const parserRes = parser.parse(Deno.args)

if (parserRes.tag !== MAIN_COMMAND) {
  console.error(parserRes.error.toString())
  throw Deno.exit(1)
}
if (parserRes.remaining().rawFlags().length) {
  console.error('Unknown flags:', ...parserRes.remaining().rawFlags())
  throw Deno.exit(1)
}

const port = parserRes.value.port
const hostname = parserRes.value.host
const withHeaders = parserRes.value['with-headers'] ?? false
const withBody = parserRes.value['with-body'] ?? false

const server = serve({ port, hostname })

console.log(blue(`server started at`) + ' ' + underline(`http://${hostname}:${port}`))

for await (const req of server) {
  const remoteIp = (req.conn.remoteAddr as Deno.NetAddr).hostname
  const path = req.url
  const userAgent = req.headers.get('User-Agent')
  const method = req.method
  const body = new TextDecoder().decode(await Deno.readAll(req.body))
  console.log(`${remoteIp} (${userAgent}) ${method} ${path}`)
  if (withHeaders) {
    for (const [name, value] of req.headers.entries()) {
      console.log(`${green(name)}: ${value}`)
    }
  }
  if (withBody && body.length !== 0)
    console.log(body)
  console.log()
  req.respond({ body: '' })
}
