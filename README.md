# A simple HTTP grabber for Deno

## Install (optional)

```sh
deno install --allow-net 'https://raw.githubusercontent.com/taigah/http-grabber-deno/master/http-grabber.ts'
```

## Usage

If not installed

```sh
deno run --allow-net 'https://raw.githubusercontent.com/taigah/http-grabber-deno/master/http-grabber.ts' [options]
```

If installed

```sh
http-grabber [options]
```

## Options

```
USAGE:
        http-grabber [options]
DESCRIPTION:
  Launch an HTTP grabber
OPTIONS:
  --help
    Print help
  --port, -p <number> [default: 8080]
    Server port
  --host <text> [default: 0.0.0.0]
    Server host
  --with-headers
    Print request headers (default: false)
  --with-body
```
