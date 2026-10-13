"""Serve bundled photo assets on loopback on Windows and macOS."""
import argparse
import errno
import functools
import http.server
from pathlib import Path
import threading
import webbrowser

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8000)
    parser.add_argument('--no-browser', action='store_true')
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(root))
    try:
        server = http.server.ThreadingHTTPServer(('127.0.0.1', args.port), handler)
    except OSError as exc:
        if exc.errno == errno.EADDRINUSE:
            raise SystemExit(f'Port {args.port} is busy. Try: python scripts/serve.py --port 8001')
        raise SystemExit(f'Cannot start local server: {exc}')
    url = f'http://127.0.0.1:{args.port}/'
    print(f'Photo World: {url}\nCtrl+C stops this server.', flush=True)
    if not args.no_browser:
        threading.Timer(.5, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

if __name__ == '__main__':
    main()
