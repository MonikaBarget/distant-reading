# distant-reading — JupyterLite (Pyodide) Branch

This branch contains a **browser-based JupyterLite instance** running the Pyodide kernel. It is deployed separately from the `main` branch (which builds the VitePress documentation site) so that the two static site builds never interfere with each other.

For the main website with documentation, datasets, and resources, see the `main` branch.

**Live site:** https://monikabarget.github.io/distant-reading/jupyterlite/

## Why this is a separate branch/deployment

JupyterLite and a client-side-routed site (like VitePress) don't mix well in the same build/deploy pipeline. JupyterLite needs a genuine full-page load to boot its service worker and kernel — a client-side router can intercept and leave it half-initialized. Combining both builds into one workflow makes it easy for one tool's clean/build step to silently overwrite the other's output. Therefore, keeping JupyterLite on its own branch avoids both problems entirely.

## Folder structure

```
jupyterlite/
├── contents/                  # .ipynb notebooks served in the JupyterLite instance
├── jupyter_lite_config.json   # build-time config (where to find contents, output dir, etc.)
└── jupyter-lite.json          # runtime config (theme, default kernel, etc.)
requirements.txt               # Python packages needed to build the site
```

Tasks fulfilled by the two .json files:

| File | Used when | Purpose |
|---|---|---|
| `jupyter_lite_config.json` | at build time | Tells `jupyter lite build` where the `contents/` folder is and other build settings |
| `jupyter-lite.json` | at runtime, in the browser | App-level settings like default theme and kernel preference |

**Note:** All files that existed in an earlier, broken version of this branch and have been removed — see [Common pitfalls](#common-pitfalls-if-youre-reusing-this-template) below.

## Requirements

```
jupyterlite-core>=0.4,<0.5
jupyterlite-pyodide-kernel>=0.4,<0.5
jupyter-server>=2.14,<3
jupyterlab_server>=2.27,<3
wheel
```

`jupyterlite-pyodide-kernel>=0.4,<0.5` bundles and expects **Pyodide 0.26.x**. If you ever bump this package's version, check the [compatibility table](https://github.com/jupyterlite/pyodide-kernel#with-pyodide) and make sure nothing elsewhere in the repo pins a different Pyodide version by hand — see below.

## Building locally

```bash
python -m pip install -r requirements.txt
jupyter lite build \
  --lite-dir jupyterlite \
  --output-dir dist/jupyterlite \
  --base-url /distant-reading/jupyterlite/
```

Then preview it:

```bash
jupyter lite serve --output-dir dist/jupyterlite
```

Confirm the kernel actually reaches "idle" and a cell executes **before** pushing — this isolates JupyterLite-specific problems from deployment problems.

## Deployment

The GitHub Actions workflow on this branch (`.github/workflows/deploy.yml`) runs the same build command above in CI and publishes `dist/jupyterlite` to GitHub Pages at `/distant-reading/jupyterlite/`. There is no manual Pyodide download step, no HTML-patching script, and no separate "standalone" copy of the build — one config, one build command, one deploy target.

## Using this as a template for another repository

1. Copy the `jupyterlite/` folder and `requirements.txt` into your own repo (on its own branch, or in a repo of its own — see "Why this is a separate branch" above for why that separation matters).
2. Put your own `.ipynb` files in `jupyterlite/contents/`.
3. In `jupyter_lite_config.json`, confirm the `contents` path still matches.
4. **Change the `--base-url` flag** in your build command and workflow to match *your* actual GitHub Pages path — e.g. `/your-repo-name/jupyterlite/`. This is the single most important thing to get right; see below.
5. If your target repo already runs another static site (Vite, Next.js, Hugo, etc.), keep JupyterLite on its own branch/workflow/deploy step exactly as done here, rather than merging the two build processes.

## Common pitfalls (if you're reusing this template)

- **`--base-url` must exactly match the real deployed path, including the trailing slash.** `/repo-name/jupyterlite` (no trailing slash) is not the same as `/repo-name/jupyterlite/` to JupyterLite's asset resolution, and a mismatch here is a common cause of a kernel that never leaves "unknown" status.
- **Don't manually pin `pyodideUrl`.** `jupyterlite-pyodide-kernel` already bundles the Pyodide version it's compatible with. Overriding it to an arbitrary CDN URL risks a version mismatch between the kernel extension and the Pyodide runtime it loads — which looks exactly like a stuck/unresponsive kernel.
- **Don't use `overrides.json` for `baseUrl`, `appUrl`, or kernel settings.** `overrides.json` only overrides a specific plugin's own settings schema (e.g. default theme) and must be keyed by a real plugin id like `@jupyterlab/apputils-extension:themes`. Base URL and kernel config belong in `jupyter-lite.json` / the `--base-url` build flag instead.
- **Use the exact filenames `jupyter-lite.json` and `jupyter_lite_config.json`.** JupyterLite's build process looks for these specific names in well-known locations; a differently-named file (e.g. `config.json`) will silently be ignored.
- **If embedding in a site with client-side routing**, always link to the JupyterLite path with a plain `<a href="...">`, not a router-aware link component, so the browser performs a real navigation.
