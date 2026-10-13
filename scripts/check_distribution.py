"""Check that a distributed checkout can serve its actual first-screen assets."""
from pathlib import Path
import subprocess
import sys
import time
import urllib.request
import socket

root = Path(__file__).resolve().parent.parent
with socket.socket() as sock:
    sock.bind(('127.0.0.1', 0))
    port = sock.getsockname()[1]
proc = subprocess.Popen([sys.executable, str(root / 'scripts/serve.py'), '--port', str(port), '--no-browser'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    for _ in range(100):
        try:
            with urllib.request.urlopen(f'http://127.0.0.1:{port}/', timeout=1) as r:
                assert b'app.js?v=' in r.read()
            break
        except OSError:
            time.sleep(.1)
    else:
        raise AssertionError('Local server did not start')
    for i in range(1, 19):
        with urllib.request.urlopen(f'http://127.0.0.1:{port}/samples/demo-{i:02}.jpg', timeout=3) as r:
            assert r.read(2) == b'\xff\xd8'
    print('Loopback server and all 18 demo images passed.')
finally:
    proc.terminate()
    proc.wait(timeout=10)
