# A simple HTTP grabber for Deno

## Install (optional)

```sh
deno install 'https://raw.githubusercontent.com/taigah/http-grabber-deno/master/http-grabber.ts'
```

Note: you can add the `--allow-net` flag if you do not want to be prompted a network access request each time you run the program.

## Usage

If not installed

```sh
deno run --unstable 'https://raw.githubusercontent.com/taigah/http-grabber-deno/master/http-grabber.ts'
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
