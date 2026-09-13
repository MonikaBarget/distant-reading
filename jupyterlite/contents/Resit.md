## How to reset an inactive / outdated Jupyterlite environment

If your Jupyterlite environment is outdated (e.g. missing code from the Github repository), if you accidentally broke code, or if your kernel status is continuously "inactive",
you may need to perform a full reset:

### Step 1: Use DevTools "Clear site data"

In your web browser, open the so-called *DevTools*, find the *Application* tab, and navigate to *Storage*. There should be a "Clear site data" button or similar.
In Firefox, for instance, you can use the *Storage* tab or Settings > Privacy > Manage Data > remove the site. This unregisters the service worker, clears your browser cache storage,
and IndexedDB together.

### Step 2: Hard refresh the page

Ctrl/Cmd+Shift+R (or close and reopen the tab) so the service worker re-installs cleanly and re-fetches everything from scratch.

### Step 3: Confirm the kernel reaches "idle"

The kernel should now go from "unknown" back to "idle" once the fresh service worker finishes its install and the Pyodide runtime loads again.

**Note:** Performing these actions will delete all the data in Jupyterlite, so please download everything you will still need before resetting!
