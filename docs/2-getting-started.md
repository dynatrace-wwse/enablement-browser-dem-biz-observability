--8<-- "snippets/send-bizevent/2-getting-started.js"
--8<-- "snippets/requirements.md"

## Prerequisites

You will need full administrator access to a Dynatrace SaaS tenant with a DPS license.

* Install RUM Injection Extension for Chrome
* Install Dynatrace Session Replay Extension for Chrome
* Identify public-facing business website
    - Identify multi-page business flow sequence

### Install RUM Injection Extension for Chrome

Open Chrome and navigate to **[https://github.com/dynatrace-wwse/rum-injection-demo](https://github.com/dynatrace-wwse/rum-injection-demo){target=_blank}**, click the `Code` button, then `Download ZIP`

![download plugin](./img/prereq-download_repo_zip.png)

Open your download folder and unzip `rum-injection-demo-main.zip`

![unzipped plugin](./img/prereq-unzipped_plugin.png)

In Chrome, select `menu "𐄛"  > Extensions > Manage Extensions`

Enable Developer Mode in the top right

Click `Load Unpacked`

Nagivate to the unzipped directory from step #2 and click `Select`

![install unpacked extension](./img/prereq-install_unpacked_extension.gif)

### Install Dynatrace Session Replay Extension for Chrome

Navigate to the extension in the Chrome Web Store using Chrome.

[Chrome Web Store](https://chromewebstore.google.com/detail/session-replay-browser-ex/hjbdnbhpfiionafiooklnafmaojjfljh){target=_blank}

Install the extension.

![Install Extension](./img/prereq_session_replay_chrome_extension.gif)

### Identify Public-facing Business Website

You will need a public-facing business website for this lab.

## Continue

In the next section, we'll explore the differences between a Customer Journey and a Business Journey.

<div class="grid cards" markdown>
- [Continue to Customer Journeys vs Business Journeys:octicons-arrow-right-24:](3-customer-business-journey.md)
</div>

