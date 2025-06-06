--8<-- "snippets/send-bizevent/index.js"

--8<-- "snippets/disclaimer.md"

<!--TODO: Before going live, remove the under-construction snippet-->
--8<-- "snippets/under-construction.md"

## Lab Overview

During this hands-on training lab, we’ll explore the Digital Experience Management (DEM) and Business Observability capabilities of the Dynatrace platform, by instrumenting Real User Monitoring (RUM) and Business Analytics from our local browser using the Tampermonkey Chrome Extension.

<!--TODO: Before going live, finalize lab tasks-->
**Lab tasks:**

1. Customer Journey vs Business Journey
2. Real User Monitoring
    - Configure Agentless RUM
    - Configure Browser Extension
    - Browse the website to begin data tracking
    - Analyze Customer Journey
3. Business Observability with RUM
    - Analyze BizEvents
4. Business Journey Automation
    - Generate Business Flow using CoPilot
    - Configure Dynatrace Workflow Automation
    - Analyze Business Journey BizEvents
    - Analyze Business Flow

## Technical Specification

<!--TODO: Before going live, update technologies used in the lab-->
### Technologies Used
- [Dynatrace](https://www.dynatrace.com/trial)
- [Kubernetes Kind](https://kind.sigs.k8s.io/)
    - tested on Kind tag 0.27.0
- [Cert Manager](https://cert-manager.io/) - *prerequisite for OpenTelemetry Operator
    - tested on cert-manager v1.15.3
- [Dynatrace Operator](https://github.com/Dynatrace/dynatrace-operator)
    - tested on v1.4.2 (April 2025)
- Dynatrace OneAgent
    - tested on v1.309 (April 2025)

<!--TODO: Before going live, update reference architecture in the lab-->
### Reference Architecture

## Continue

In the next section, we'll review the prerequisites for this lab.

<div class="grid cards" markdown>
- [Continue to getting started:octicons-arrow-right-24:](2-getting-started.md)
</div>