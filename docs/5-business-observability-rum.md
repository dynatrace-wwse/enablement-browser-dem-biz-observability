# Deploy Dynatrace
--8<-- "snippets/send-bizevent/4-deploy-dynatrace.js"

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

![Add Cluster](../img/deploy-dynatrace_k8s_add_cluster.png)

**1. Select distribution**

Choose `Other distributions` as your distribution, as we will be deploying Dynatrace on a generic Kind Kubernetes cluster.

**2. Select observability options**

Choose `Kubernetes platform monitoring + Application observability` as your observability option.  This will define your Dynakube spec/configuration.

Toggle the `Log Management and Analytics` flag/setting to `Enabled`.  Expand the option and select `Fully managed with Dynatrace Log Module`.

Check the box for `Restrict Log monitoring to certain resources`.  In the `Namespaces` field, type `astroshop`.  This will filter log ingestion on logs related to the `astroshop` Kubernetes namespace.

Toggle the `Extensions` flag/setting to `Disabled`.  We will not be using this feature in this lab.

![Select Distribution](../img/deploy-dynatrace_k8s_select_distribution.png)

## Continue

In the next section, we'll configure Log Monitoring in Dynatrace.

<div class="grid cards" markdown>
- [Continue to Business Observability Automation:octicons-arrow-right-24:](6-business-observability-automation.md)
</div>