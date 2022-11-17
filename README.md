# Product Description & Purpose

Pull in your Jira Issues with Yext's new Atlassian Jira Connector! Jira is an agile environment tool used by software companies around the world to manage project workflows. With the Atlassianconnector, you can pull in all of your Jira information into your Knowledge Graph to be used in the Yext Platform.

The Atlassian Jira connector will pull in data about your items/issues including, but not limited to: status, reporter name, report email, engineering team, comments, assignee name, assignee email, etc. Note: The connector is configured to run comprehensively on a daily cadence.

This app aligns with new custom entity type called Jira Items and creates 7 custom fields:

- Status
- Reporter Name
- Reporter Email
- Engineering Team
- Comments
- Assignee Name
- Assignee Email

# Requirements

To use this template you will need to have the following items accessible:

- Jira Username (typically the email address verified on Atlassian)
- Atlassian API Key
- Jira domain name

# Installation Instructions

Before installing the app do the following :
1. Log into your Atlassian Jira account and note down your Jira domain name.
2. (Still on Atlassian Jira) Navigate to https://id.atlassian.com/manage-profile/security/api-tokens and click “Add Key”. Provide a unique name and click “Generate Key”.
3. Copy down the API key value. This will serve as your Basic Auth password. Note that you can use the same API Key for the Confluence connector.
