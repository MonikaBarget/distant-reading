# JupyterLite Setup - Kernel Fixed ✓

## What Was Wrong
The JupyterLite installation had cells that hung indefinitely because:
1. The Pyodide runtime URL wasn't configured
2. Cells would show `*` (executing) but never complete
3. The kernel needed to know where to download the Python runtime from

## What's Fixed
✓ **Pyodide CDN**: Browser now loads Python runtime from `https://cdn.jsdelivr.net/pyodide/v0.23.4/full/`
✓ **Kernel Configuration**: `pyodideUrl` is now set in the built config
✓ **Plugin Settings**: Pyodide kernel extension can now initialize properly
✓ **Patch Script**: `patch_pyodide_config.py` ensures the URL is applied to every build

## How to Build and Deploy JupyterLite

### Quick Build Command
```bash
# Full build and deploy pipeline
pip install -r requirements.txt && \
jupyter lite build --config jupyterlite/jupyterlite.config.json && \
python3 patch_pyodide_config.py && \
mkdir -p docs/.vitepress/dist/jupyterlite && \
cp -r _output/* docs/.vitepress/dist/jupyterlite/ && \
npm run build
```

### Step-by-Step Breakdown

1. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Build JupyterLite**
   ```bash
   jupyter lite build --config jupyterlite/jupyterlite.config.json
   ```

3. **Patch with Pyodide URL** (CRITICAL!)
   ```bash
   python3 patch_pyodide_config.py
   ```
   This adds the Pyodide runtime URL to the final config. Without this, the kernel hangs.

4. **Deploy to docs folder**
   ```bash
   mkdir -p docs/.vitepress/dist/jupyterlite
   cp -r _output/* docs/.vitepress/dist/jupyterlite/
   ```

5. **Build VitePress documentation**
   ```bash
   npm run build
   ```

## How Students Access JupyterLite
- After deploying, JupyterLite is available at: `/jupyterlite/`
- They can open the classic Jupyter Notebook interface
- Python code runs entirely in the browser via Pyodide

## Adding Student Notebooks
1. Place `.ipynb` files in `jupyterlite/contents/notebooks/`
2. Rebuild JupyterLite using the build steps above
3. The notebooks will appear in the file browser

## Files Added/Modified
- `jupyterlite/jupyterlite.config.json` - Main JupyterLite configuration
- `jupyterlite/contents/overrides.json` - Plugin settings override
- `patch_pyodide_config.py` - **CRITICAL**: Patches Pyodide URL into final config
- `requirements.txt` - Python dependencies (unchanged)

## Kernel Features
- **Python 3** in the browser using Pyodide
- **No server required** - runs entirely in the browser
- **Offline capable** - works without internet after initial load
- **pip support** - students can install packages dynamically
- **Scientific packages** - numpy, pandas, matplotlib and more available

## Troubleshooting

### Cells stay in `*` (executing) forever
This means Pyodide didn't load. Check:
1. Did you run `python3 patch_pyodide_config.py`? (This is crucial!)
2. Check browser console (F12) for errors
3. Verify the file: `docs/.vitepress/dist/jupyterlite/jupyter-lite.json` contains:
   ```json
   "pyodideUrl": "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
   ```

### Notebooks don't appear
- Check they're in `jupyterlite/contents/notebooks/` with `.ipynb` extension
- Rebuild JupyterLite and redeploy
- Clear browser cache (Ctrl+Shift+Del)

### Build fails or errors
- Delete `_output/` and `.jupyterlite.doit.db` before rebuilding
- Ensure Python dependencies are installed: `pip install -r requirements.txt`
- Check Python version: `python3 --version` (should be 3.9+)
