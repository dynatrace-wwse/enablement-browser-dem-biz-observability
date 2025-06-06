--8<-- "snippets/send-bizevent/index.js"

--8<-- "snippets/disclaimer.md"

<!--TODO: Before going live, remove the under-construction snippet-->
--8<-- "snippets/under-construction.md"

## Lab Overview

During this hands-on training lab, we’ll explore the Digital Experience Management (DEM) and Business Observability capabilities of the Dynatrace platform, by instrumenting Real User Monitoring (RUM) and Business Analytics from our local browser using the Tampermonkey Chrome Extension.

<!--TODO: Before going live, finalize lab tasks-->
**Lab tasks:**

Customer Journey vs Business Journey
Real User Monitoring
    Configure Agentless RUM
    Configure Browser Extension
    Generate Data
    Analyze Data
Business Observability with RUM
    Analyze Data
Business Journey Automation
    Prompt
    Configure Workflow
    Analyze Events
    Analyze Business Flow

1. Deploy Real User Monitoring (RUM) on public-facing business website
    - Configure Dynatrace Agentless RUM
    - Configure Tampermonkey Chrome Extension
    - Enable new RUM experience
    - Browse the website to begin data tracking
2. Explore Digital Experience Management (DEM) Apps
    - Experience Vitals
    - Error Inspector
    - Users and Sessions
    - Synthetics
3. Analyze Digital Experience Management (DEM) with Notebooks
    - TODO: DEM Notebook topics
4. Business Observability
    - Send Business Events with RUM JavaScript Agent
    - Build a Business Flow with Business Flows App
5. Capstone: DEM and Biz Observability Dashboard
    - Create a tailor-made dashboard for chosen public-facing business website

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

[Dynatrace on Kubernetes: Application observability](https://docs.dynatrace.com/docs/ingest-from/setup-on-k8s/how-it-works/application-monitoring)

[Dynatrace on Kubernetes: Platform monitoring](https://docs.dynatrace.com/docs/ingest-from/setup-on-k8s/how-it-works/kubernetes-monitoring)

[OpenTelemetry Astronomy Shop Demo Architecture](https://opentelemetry.io/docs/demo/architecture/)

## Continue

In the next section, we'll review the prerequisites for this lab needed before launching our Codespaces instance.

<div class="grid cards" markdown>
- [Continue to getting started:octicons-arrow-right-24:](2-getting-started.md)
</div>