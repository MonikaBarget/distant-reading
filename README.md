# DistantReading - JupyterLite Pyodide Branch

This branch contains the **Pyodide/JupyterLite runtime environment** for browser-based Python execution.

For the main website with documentation, datasets, and resources, see the `main` branch.

## Quick Start

This branch deploys a standalone JupyterLite instance to GitHub Pages.

To build locally:
```bash
python -m pip install -r requirements.txt
jupyter lite build --contents ./jupyterlite/contents --output-dir standalone/jupyterlite
```
