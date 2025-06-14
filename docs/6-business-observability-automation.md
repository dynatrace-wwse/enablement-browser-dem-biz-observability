# Business Observability Automation
--8<-- "snippets/send-bizevent/6-business-observability-automation.js"

Synopsis

<div class="grid cards" markdown>
- [Learn More:octicons-arrow-right-24:](https://docs.dynatrace.com/docs/ingest-from/setup-on-k8s/deployment/k8s-log-monitoring){target="_blank"}
</div>

## Step

TODO

### Sub-Step

TODO

Latest Business Data Generator guide is here, the link to download the Workflow template is on slide 5. 

To import the generator, go to Workflows > Upload and choose the JSON file you have just downloaded. The generator will be imported but not active, so you have time to make changes before it starts. 

*** Optional part, as it would be very cool if the prompt can take care of this – not described in too much detail as it’s inline in the code the specifics of the numbers *** 

It’s only the “config” part of the generator that needs any changes – this is where you’ll define what the business process looks like and make it customized to your prospect. 

At the top you can set high level variables like the name of the Flow (used in the BizFlow config), the event.provider attached to all events and the name of the correlation.id present on all steps. 

First part is the journey steps – each step has a “pretty name” (used in the BizFlow config) and the name that will be used for the event.type (for example “Online booking” vs  “online.booking”). The other sections (not applicable on the first step) are  the drop off percentage from the previous step, the minimum and maximum time in hours the step can take (for example 0.5 would be 30 minutes) and then a true/false on whether this step should loop and how many times (if it’s set to false the number is not read). 

Optional step is one that only some flows will go through which makes a nice “branch” in the BizFlow that gets created. 

Locations can be countries/cities, but could also, for example be office locations or warehouses – depending on the type of flow that you have defined. 

A segment is the different “profile” of flows that get generated – for example in retail or travel we might have loyalty status, when applying for a mortgage there might be different types of mortgages. This is then often used when creating a dashboard to show some interesting visualisations. 

Revenue could be used to actually show realized revenue from something like a retail transaction, but also could just represent the value of a transaction – for example when making a payment in the banking world. 

Errors will be generated based on the step you define, and added automatically to the BizFlow. Try to pick something that’s less of a technical error and more of a “business” error – for example “insufficient funds” when making a payment. 

The “HOST_ENTITY” is useful when you want to show the topology linkage we have – this will add a drilldown from the BizEvents but obviously is just for show as these events are generated. 

There isn’t often a need to change the “TIMES_OF_DAY” at the bottom, this just makes a nice “wave” pattern of the traffic that peaks during the day so it looks slightly natural. 

*** End of optional part *** 

Replace the config step with the generate code and run the workflow. If you want it to continue generating data, set the Workflow to active and hit Save, it will then generate new Biz Events every 5 minutes. 

Gotchas: If the generator steps fail, look at the Workflow results and click on the individual step that has failed. The most common is permissions - if you are running it as yourself, you need to have storage:events:write.  

Good to know: The generator will dump in 24 hours worth of historical data, it chooses to do that based on whether there is biz events that already exist with the “event.provider” that you have specified – otherwise it will start to generate new data. If you need fresh data, change the event.provider. You will also see events with the same “event.provider” but with “.temp” added – this is normal and is part of how the generator works. 

Once the generator has run, you can go into the execution results and check that the results of the “generate_historical_data” step, you should see messages similar to the below. 

Picture 1, Picture 

Confirm bizevents and OOTB template dashboard is properly running and in their sprint tenant as well as the BizFlow that gets uploaded. You can check the Biz Events in a Notebook, simply do a “fetch bizevents” that filters on the event.provider that you have chosen: 

Picture 1, Picture 

The BizFlow generated should accurately match what’s defined in your generator config, including looped steps, branches and errors. The KPIs along the top should also all be populated. 

Picture 1, Picture 

The dashboard will just be a template and should resemble the below, where 3 of the tiles are populated, but the rest is empty – this is what we will configure. To create a good demo “story” – you can change the content of the fixed tiles, for example to introduce an IT error at one step. 

Picture 1, Picture 

## Conclusion

TODO: summary