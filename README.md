# A simple HTTP grabber for Deno

## Install (optional)

```sh
deno install --allow-net 'https://raw.githubusercontent.com/taigah/http-grabber-deno/v1.0.0/http-grabber.ts'
```

## Usage

If not installed

```sh
deno run --allow-net 'https://raw.githubusercontent.com/taigah/http-grabber-deno/v1.0.0/http-grabber.ts'
```

If installed

```sh
http-grabber
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
