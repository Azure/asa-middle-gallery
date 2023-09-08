# Azure Spring Apps Button overview

## What is Azure Spring Apps Button?

Azure Spring Apps (ASA) Button provides you one-click deployment experience  from GitHub repository to Azure Spring Apps directly via the browser.

It enables you to deploy applications to Azure Spring Apps in the browser, without leaving the web browser, just clicking a button can you deploy code from a specific GitHub repository to Azure Spring Apps.

The Azure Spring Apps Button is a pointer to the source code repository, which determines the deployment branch and module of the code, and clicking the Azure Spring Apps Button will initiate the deployment of the application. It’s also easy to [make your own Azure Spring Apps Button](quick-start/).

## What are the benefits of Azure Spring Apps Button?

### Deploy code fast

With just a click of the Button, you can smoothly deploy applications to Azure Spring Apps without leaving your web browser. During the deployment process, you can also view the deployment status in the browser real-time and trouble shoot if necessary.

You don't need to install any cli tools or manage the version of the cli tools, let alone those complicated commands to execute manually and waiting long time for the deployment to complete.

### Easily share your work

Azure Spring Apps Button help visitors to try the function of your open source project easily, and use GitHub repository to preview your app or create their own.

## How Azure Spring Apps Button works

The Azure Spring Apps Button is just a link to a specific Azure Spring Apps deployment location. In its URL, Azure Spring Apps Button also includes links to the corresponding source code repositories, branches and modules. When you click the Azure Spring Apps Button, it understands your intent to deploy code and where that code is located, and then it redirects you to a page to configure your ASA deployment settings. After configuration, a click of deploy button will trigger the deployment process. The following high-level diagram summarizes the Azure Spring Apps Button workflow.

![image](https://github.com/hui1110/deploydemo/assets/58474919/22d1bba3-bc7b-472b-8968-a6a3fd4bf0bd)

Azure Spring Apps Button pulls the code through the GitHub url, and uses the source code to deploy to Azure Spring Apps.

## Next step: go to the quickstart

To set up the Azure Spring Apps Button, follow the [Azure Spring Apps Button quickstart](quick-start/).
