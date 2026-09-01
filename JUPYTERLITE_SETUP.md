# JupyterLite Setup - Kernel Fixed ✓

## What Was Wrong
The JupyterLite installation had an inactive Pyodide kernel because:
1. The configuration wasn't specifying which kernel to use
2. JupyterLite wasn't built properly
3. Build artifacts weren't deployed to the docs folder

## What's Fixed
✓ **Kernel**: Pyodide is now the default kernel (runs Python in the browser)
✓ **Configuration**: `jupyterlite/jupyterlite.config.json` now explicitly sets `"kernelPreference": { "default": "pyodide" }`
✓ **Build System**: Python requirements.txt has jupyterlite packages
✓ **Deployment**: Built files are in `docs/.vitepress/dist/jupyterlite/`

## How to Access JupyterLite
1. Deploy the site: `npm run build` (will build VitePress documentation)
2. The JupyterLite instance will be available at: `/jupyterlite/`

## Building Future Updates
When you update notebooks or want to rebuild:

```bash
# Install Python dependencies
pip install -r requirements.txt

# Build JupyterLite
jupyter lite build --config jupyterlite/jupyterlite.config.json

# Deploy build to docs
mkdir -p docs/.vitepress/dist/jupyterlite
cp -r _output/* docs/.vitepress/dist/jupyterlite/
```

## Adding Student Notebooks
Place `.ipynb` files in `jupyterlite/contents/notebooks/`

Note: These will need to be rebuilt using the above commands to appear in the JupyterLite instance.

## Kernel Features
- **Python 3** in the browser using Pyodide
- **No server required** - runs entirely in the browser
- **Offline capable** - works without internet after initial load
- **pip support** - students can install packages dynamically

## Files Modified
- `jupyterlite/jupyterlite.config.json` - Added kernel configuration
- `package.json` - Restored to original (removed incorrect npm packages)
- `requirements.txt` - Already had correct JupyterLite packages
