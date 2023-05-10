<!-- ⚠️⚠️ Do not delete this template ⚠️⚠️ -->

<!-- 🔎 Search existing issues to avoid creating duplicates. -->
<!-- 🧪 Test using the latest Playwright release to see if your issue has already been fixed -->
<!-- 💡 Provide enough information for us to be able to reproduce your issue locally -->

### System info
- Playwright Version: [v1.33]
- Operating System: [macOS Ventura 13.3.1]
- Browser: [Chromium]
<!-- - Other info: -->
<!-- 
### Source code

- [ ] I provided exact source code that allows reproducing the issue locally. -->

<!-- For simple cases, please provide a self-contained test file along with the config file -->
<!-- For larger cases, you can provide a GitHub repo you created for this issue -->
<!-- If we can not reproduce the problem locally, we won't be able to act on it -->
<!-- You can still file without the exact code and we will try to help, but if we can't repro, it will be closed -->

**Link to the GitHub repository with the repro**

[https://github.com/your_profile/playwright_issue_title]

<!-- or

**Config file**

```js
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], },
    },
});
```

**Test file (self-contained)**

```js
it('should check the box using setChecked', async ({ page }) => {
  await page.setContent(`<input id='checkbox' type='checkbox'></input>`);
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
});
``` -->

**Steps**
- Clone the repository
- Run `yarn install`
- Run `yarn pt`
- Change headless to true in the config file
- Run `yarn pt` again to observe issue

**Expected**

Tests run successfully the same way they do when headless is set to false.

**Actual**

Tests fail due to `unsafely-treat-insecure-origin-as-secure` flag not being applied to headless chromium.
