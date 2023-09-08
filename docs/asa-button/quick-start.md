# Create a `Deploy to Azure Spring Apps` Button

__Table of Contents:__

[[toc]]

The `Deploy to Azure Spring Apps` button enables users to deploy applications to Azure Spring Apps (ASA) without leaving the web browser and requires only simple configuration.

By simply adding the button to your GitHub repository's `README`, you can enable users to deploy your application to Azure Spring Apps with a single click.

Here’s an example button that deploys a [sample](https://github.com/hui1110/azure-spring-initializr) to Azure Spring Apps:

[![Deploy to Azure Spring Apps](https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png)](https://yonghui-dev-apps-deploy-webapp.azuremicroservices.io/deploy.html?url=https://github.com/hui1110/azure-spring-initializr&branch=main&module=start-site)

This document describes how to easily deploy your maintained source code to Azure Spring Apps using the `Deploy to Azure Spring Apps` button.

## Requirements

- The application source code is hosted in the GitHub public repository.
- An Azure AD administrative roles user.

  If you use an administrator account, you can start using the ASA buttons after logging in. If your account does not have an administrator role, see [Assign user roles with Azure Active Directory](https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-users-assign-role-azure-portal) to ensure that your account has an administrator role.

## Add `deploy to Azure Spring Apps` Button

To create a `Deploy to Azure Spring Apps` button for your own GitHub project, you need to add a link to the Azure Spring Apps Button with the `url` of in your repository and branch in the GitHub repository's `README`.

:::tip
When there is no branch information in the `url`, ASA Button will pull the source code from the default branch of your GitHub repository.
:::

Examples of `url` is shown as below；

**Markdown**:

```markdown
[![Deploy to Azure](https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png)](https://azure.spring.launcher.com/deploy.html?url=https://github.com/azure/deploy)
```

Here’s the equivalent content as HTML if you’d prefer not to use Markdown:

```html
<a href="https://azure.spring.launcher.com/deploy.html?url=https://github.com/azure/deploy">
    <img src="https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png" alt="Deploy to Azure Spring Apps">
</a>
```

### Button image

When linking to the Azure Button set-up flow, you can either use a raw link or an image link. If using an image, Azure makes available SVG versions at these URLs:

```url
https://user-images.githubusercontent.com/58474919/236122963-8c0857bb-3822-4485-892a-445fa33f1612.png
```

## Customize your Azure Spring Apps button

### Use a custom Git branch

If you’d like the button to deploy from a specific Git branch, you can use a fully qualified GitHub URL as the `branch` parameter:

```url
https://azure.spring.launcher.com/deploy.html?url=https://github.com/azure/deploy&branch=main
```

### Use a custom module

If you want the button to deploy from a module specified in the source code, you can use the fully qualified GitHub URL as the `module` parameter:

```url
https://azure.spring.launcher.com/deploy.html?url=https://github.com/azure/deploy&branch=main&module=web
```

## Further reading

For more detailed information about see the following documents:

- [What is Azure Spring Apps?](https://learn.microsoft.com/azure/spring-apps/overview)
- [Azure Spring Apps REST API reference](https://learn.microsoft.com/rest/api/azurespringcloud/)
- [Deployment Integrations](https://azure.microsoft.com/solutions/integration-services)
