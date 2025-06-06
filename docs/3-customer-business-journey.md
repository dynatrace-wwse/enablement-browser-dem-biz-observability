# Customer Journey vs Business Journey
--8<-- "snippets/send-bizevent/3-customer-business-journey.js"

Dynatrace provides integrated log management and analytics for your Kubernetes environments by either running the OneAgent Log Module or integrating with log collectors such as Fluent Bit, OpenTelemetry Collector, Logstash, or Fluentd.

<div class="grid cards" markdown>
- [Learn More:octicons-arrow-right-24:](https://docs.dynatrace.com/docs/ingest-from/setup-on-k8s/deployment/k8s-log-monitoring){target="_blank"}
</div>

## Step

Kubernetes platform monitoring sets the foundation for understanding and troubleshooting your Kubernetes clusters. This setup does not include OneAgent or application-level monitoring by default, but it can be combined with other monitoring and injection approaches.

!!! tip "[Kubernetes Platform Monitoring](https://docs.dynatrace.com/docs/ingest-from/setup-on-k8s/how-it-works/kubernetes-monitoring){target="_blank"}: Capabilities"
    - Provides insights into the health and utilization of your Kubernetes clusters, including object relationships (topology)
    - Uses the Kubernetes API and cAdvisor to get node- and container-level metrics and Kubernetes events
    - Enables out-of-the-box alerting and anomaly detection for workloads, Pods, nodes, and clusters

### Sub-Step

In your Dynatrace tenant, launch the `Kubernetes` app.  From the Overview tab, click on `Add cluster`.

## Continue

In the next section, we'll configure Log Monitoring in Dynatrace.

<div class="grid cards" markdown>
- [Continue to observing Customer Journey with Real User Monitoring:octicons-arrow-right-24:](4-real-user-monitoring.md)
</div>