## How to reset an inactive / outdated Jupyterlite environment

If your Jupyterlite environment is outdated (e.g. missing code from the Github repository), if you accidentally broke code, or if your kernel status is continuously "inactive",
you may need to perform a full reset:

### Step 1: Use DevTools "Clear site data"

In your web browser, look for the option to clear the site data specifically for the Jupyterlite deployment:

#### Chrome
- Open DevTools (**F12** or **Ctrl+Shift+I**).
- Go to the **Application** tab > **Storage** > **Clear site data**.

#### Edge
- Open DevTools (**F12** or **Ctrl+Shift+I**).
- Go to the **Application** tab > **Storage** > **Clear site data**.

#### Firefox
- Open **Settings** > **Privacy & Security** > **Manage Data**.
- Search for the website, select it, and click **Remove Selected**.

#### Vivaldi
- Open DevTools (F12 or Ctrl+Shift+I).
- Go to the Application tab > Storage (see screenshot below).
- Expand the relevant storage types: Local Storage, IndexedDB, Cookies.
- Right-click the site entry and select Delete or Clear.

<img width="1252" height="709" alt="image" src="https://github.com/user-attachments/assets/d9b2e381-ade7-4d5a-bdee-f6b4a15f8c3f" />

#### Brave
1. Open DevTools (**F12** or **Ctrl+Shift+I**).
2. Go to the **Application** tab > **Storage** > **Clear site data**.
3. Hard refresh (**Ctrl+Shift+R**).

**Note:** This deletes all local data for the site. Back up files if needed.

### Step 2: Hard refresh the page

Ctrl/Cmd+Shift+R (or close and reopen the tab) so the service worker re-installs cleanly and re-fetches everything from scratch.

### Step 3: Confirm the kernel reaches "idle"

The kernel should now go from "unknown" back to "idle" once the fresh service worker finishes its install and the Pyodide runtime loads again.

**Note:** Performing these actions will delete all the data in Jupyterlite, so please download everything you will still need before resetting!
