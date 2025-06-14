# Real User Monitoring
--8<-- "snippets/send-bizevent/4-real-user-monitoring.js"

Synopsis

<div class="grid cards" markdown>
- [Learn More:octicons-arrow-right-24:](https://docs.dynatrace.com/docs/ingest-from/setup-on-k8s/deployment/k8s-log-monitoring){target="_blank"}
</div>

## Step

TODO

### Sub-Step

TODO

## Setting Up Web Application in Dynatrace

1. Navigate to the hub and search for "Web application monitoring via manual insertion" and click “Set up”  
![alt text](docs/imgs/hub-add-webapp.png)

2. Type in the domain of the website you want to monitor and click "add web application"  
![alt text](docs/imgs/add-real-user-monitoring-website.png)

3. Copy the src url, you’ll enter this into the extension   
![alt text](docs/imgs/add-real-user-monitoring-copy-js-tag.png)

4. Click `View Application` this brings you to the application screen  

5. Check the 3 dots and select edit  
![alt text](docs/imgs/web-application-access-settings.png)

6. Under General Settings, navigate to "enablement and cost control", toggle on "Enable New Real User Monitoring Experience" and "Enable Session Replay Classic" and click "Save Changes"  
![alt text](docs/imgs/enable-new-experience-and-replay.png)

## Configure Extension for Demo

1. Navigate to `Web Application Injection Setup` settings page in Dynatrace, and copy the src value from the javaScript tag snippet
![injection setup](docs/imgs/injection-setup-settings.png)

2. Click the `Extension` icon ![Extension Button](docs/imgs/extension-button.png)  in toolbar, then Click `Dynatrace RUM Injector` extension.

3. Enter the domain of the site you wish to demo on, then paste your javascript src url from step #1, and hit `Save`
![configure extension](docs/imgs/configure-extension.gif)

##  Content Security Policy Warnings

You may encounter sites that restrict remote content loading and request using the [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). 

>Content Security Policy (CSP) is a feature that helps to prevent or minimize the risk of certain types of security threats. It consists of a series of instructions from a website to a browser, which instruct the browser to place restrictions on the things that the code comprising the site is allowed to do.
> The primary use case for CSP is to control which resources, in particular JavaScript resources, a document is allowed to load. This is mainly used as a defense against [cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks, in which an attacker is able to inject malicious code into the victim's site.

Since we are injecting our RUM locally via an extension, you may see these warnings in your DevTool Console, for example:

![csp-warning-example](docs/imgs/csp-warning-example.png)

### Temporarily Override Content-Security-Policy using DevTools

1. Navigate to the site you plan to demo on, and was configured in your extension settings

2. Open the Developer Tools `View > Developer > Developer Tools`
![Open Developer Tools](docs/imgs/open-devtools.png)

3. Switch to the `Sources` tab, then `Overrides` sub-tab. 

4. Click `Select folder for overrides`

5. Navigate to `overrides` directory in you unzipped extension folder and press `Select`
![Enabled Source Overrides in DevTools](docs/imgs/devtools-enable-overrides.gif)

6. Refresh the page and you should no any CSP warning, and the RUM extension and beacon calls should now be seen in the network tab
![Validate Overrides Are Functioning](docs/imgs/validate-csp-overrides-and-functionality.gif)

> ⚠️ **Warning these overrides only function while the DevTool window is open.  Be sure to leave the DevTool open for the entire time you are running your demo** ⚠️

> Normally, **RUM** sessions end on of the ways documented here: [https://docs.dynatrace.com/docs/shortlink/user-session#user-session-end]()
>
> However, we want to be able to create a bunch of sessions quickly without having to close the browser or wait for inactivity. To do this, navigate to the console in Chrome Dev Tools and type `dtrum.endSession()` and hit enter 

## Continue

In the next section, we'll observe business outcomes with real user monitoring.

<div class="grid cards" markdown>
- [Continue to Business Observability with RUM:octicons-arrow-right-24:](5-business-observability-rum.md)
</div>