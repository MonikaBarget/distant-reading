#!/usr/bin/env python3
"""
Patch jupyter-lite.json with Pyodide CDN URL
Run this after building JupyterLite
"""
import json
import sys
from pathlib import Path

def patch_jupyter_lite_config(config_path):
    """Add pyodideUrl to the final jupyter-lite.json"""
    
    with open(config_path, 'r') as f:
        config = json.load(f)
    
    # Ensure the path exists
    if 'jupyter-config-data' not in config:
        config['jupyter-config-data'] = {}
    if 'litePluginSettings' not in config['jupyter-config-data']:
        config['jupyter-config-data']['litePluginSettings'] = {}
    if '@jupyterlite/pyodide-kernel-extension:kernel' not in config['jupyter-config-data']['litePluginSettings']:
        config['jupyter-config-data']['litePluginSettings']['@jupyterlite/pyodide-kernel-extension:kernel'] = {}
    
    # Add the Pyodide URL
    pyodide_config = config['jupyter-config-data']['litePluginSettings']['@jupyterlite/pyodide-kernel-extension:kernel']
    pyodide_config['pyodideUrl'] = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/'
    
    # Save the patched config
    with open(config_path, 'w') as f:
        json.dump(config, f, indent=2)
    
    print(f"✓ Patched {config_path} with Pyodide URL")
    print(f"  pyodideUrl: {pyodide_config['pyodideUrl']}")

if __name__ == '__main__':
    config_path = Path('docs/.vitepress/dist/jupyterlite/jupyter-lite.json')
    if not config_path.exists():
        print(f"Error: {config_path} not found")
        sys.exit(1)
    
    patch_jupyter_lite_config(config_path)
