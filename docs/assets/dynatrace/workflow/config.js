import { execution } from "@dynatrace-sdk/automation-utils"

export default async function ({ execution_id }) {
  // NB - CURRENTLY ALL PIECES OF CONFIG ARE MANDATORY

  // If using the defaults that the generator comes with, set the below to true so that a default dashboard
  // is imported which shows several examples of visualisations.
  const EXAMPLE_DASHBOARD = true

  // A name that describes this business process - this will be used as the name for the Business Flow that
  // gets created, and also the dashboard if you choose to have it.
  const FLOW_NAME = "FLOW_NAME_PLACEHOLDER"

  // Name of the event.provider field that will be used. Events in the future will be stored in a provider
  // with ".temp" appended to the end.
  const EVENT_PROVIDER = "EVENT_PROVIDER_PLACEHOLDER"

  // Name of the correlation ID that will be added to each BizEvent, this will be the name
  // of the field that you see in the BizEvent.
  const CORRELATION_ID = "CORRELATION_ID_PLACEHOLDER"

  // Steps you wish the process to have, the first field is the "pretty name", the
  // second is what the "event.type" in the BizEvent will be, and the numbers after it are:
  // First number: "Drop off" percentage. e.g. 5 = 5% of users will drop off.
  // Second number: Minimum time (in hours) for the step to take.
  // Third number: Maximum time (in hours) for the step to take.
  // N.B - So far only tested with processes taking up to 48 hours.
  // Boolean: Will this step "loop" and be repeated several times before the process continues?
  // Number: Max number of times this step should loop.
  // Note: Step 1 doesn't use any of the numbers and the last step cannot loop.
  const PROCESS_STEPS = [
    ["PROCESS STEP 0 PLACEHOLDER", "process.step.0.placeholder"],
    ["PROCESS STEP 1 PLACEHOLDER", "process.step.1.placeholder", 0, 0.1, 0.2, false, 1],
    ["PROCESS STEP 2 PLACEHOLDER", "process.step.2.placeholder", 0, 0.1, 0.2, true, 3],
    ["PROCESS STEP 3 PLACEHOLDER", "process.step.3.placeholder", 1, 1, 2, false, 1],
    ["PROCESS STEP 4 PLACEHOLDER", "process.step.4.placeholder", 5, 0.5, 1, false, 1],
    ["PROCESS OPTIONAL STEP 5 PLACEHOLDER", "process.optional.step.5.placeholder", 5, 0.5, 1, false, 1],
    ["PROCESS STEP 6 PLACEHOLDER", "process.step.6.placeholder", 1, 0.1, 0.2],
  ]

  // Which of the steps would you like to be optional?
  // First number: The "0 indexed" step number (for example step 6 is step 5).
  // Second number: Percentage of flows that will do this step. e.g. 40 = 40% of users will do it.
  // NB - So far only tested on steps that are NOT the first or last.
  const OPTIONAL_STEP = [5, 10]

  // Locations you wish to be attached to the users, the number after it
  // is the percentage that will have that location - they must add up to 100.
  const LOCATIONS_WITH_PERCENTAGE = [
    ["LOCATION 1", 25],
    ["LOCATION 2", 20],
    ["LOCATION 3", 12],
    ["LOCATION 4", 10],
    ["LOCATION 5", 8],
  ]

  // Which steps would you like to have location data attached to?
  // This is also "0 indexed" - so step 0 is the first step.
  const LOCATIONS = [0]

  // Add in a custom user segment, and which steps you would like to contain the data.
  // String: Name of the field to be added to the Biz Event.
  // Array: List of steps you would like to have the segment data attached to.
  const SEGMENT = ["CUSTOMER_SEGMENT_NAME_PLACEHOLDER", [0, 2]]

  // Different values to be used for your segment. A list of values with the
  // number representing what percentage of users will have it. They must all add
  // up to 100.
  const SEGMENTS = [
    ["CUSTOMER_SEGMENT_VALUE_PLACEHOLDER_1", 60],
    ["CUSTOMER_SEGMENT_VALUE_PLACEHOLDER_2", 20],
    ["CUSTOMER_SEGMENT_VALUE_PLACEHOLDER_3", 10],
    ["CUSTOMER_SEGMENT_VALUE_PLACEHOLDER_4", 10],
  ]

  // Add in a revenue field used to attach the monetary value to a Biz Event.
  // String: Name of the field to be added to the Biz Event.
  // Array: List of steps you would like to have the revenue data attached to.
  // First number: Minimum value.
  // Second number: Maximum value.
  // String: The "pretty name" of the revenue field.
  const REVENUE = ["revenue.field.name.placeholder", [0], 100, 2000, "REVENUE FIELD NAME PLACEHOLDER"]

  // Hosts from your environment that you can randomly attribute to Biz Events, you need to
  // use the Dynatrace identifier and make sure the percentages add up to 100.
  const HOST_ENTITY = [
    ["HOST-218FBE0DE60A5B16", 50],
    ["HOST-DA9370FA4A602E97", 50],
  ]

  // Different errors that you want to attach to a certain step:
  // - First field is the name of the error which will be appeneded to the step name.
  // - Second field is the (zero indexed) step this error will happen on.
  // - Third field is the percentage of time this error will happen. (which is only used in newly generated data)
  // For this first batch of data, anything in the last 2 hours will be a guaranteed error.
  const ERRORS_WITH_PERCENTAGE = [["PROCESS_ERROR_TYPE_PLACEHOLDER", 4, 10]]

  // Distribute the load by the time of day, by default the "peak" is around midday
  // - First field is the hour of the day, so 0 being midnight.
  // - Second field is the percentage distribution.
  // As usual, all percentages must add up to 100.
  const TIMES_OF_DAY = [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 2],
    [5, 3],
    [6, 3],
    [7, 4],
    [8, 6],
    [9, 9],
    [10, 9],
    [11, 10],
    [12, 10],
    [13, 9],
    [14, 9],
    [15, 6],
    [16, 4],
    [17, 3],
    [18, 3],
    [19, 2],
    [20, 1],
    [21, 1],
    [22, 1],
    [23, 1],
  ]

  const VARIABLES = {
    EVENT_PROVIDER: EVENT_PROVIDER,
    PROCESS_STEPS: PROCESS_STEPS,
    LOCATIONS_WITH_PERCENTAGE: LOCATIONS_WITH_PERCENTAGE,
    SEGMENT: SEGMENT,
    SEGMENTS: SEGMENTS,
    HOST_ENTITY: HOST_ENTITY,
    CORRELATION_ID: CORRELATION_ID,
    ERRORS_WITH_PERCENTAGE: ERRORS_WITH_PERCENTAGE,
    TIMES_OF_DAY: TIMES_OF_DAY,
    FLOW_NAME: FLOW_NAME,
    REVENUE: REVENUE,
    LOCATIONS: LOCATIONS,
    OPTIONAL_STEP: OPTIONAL_STEP,
    EXAMPLE_DASHBOARD: EXAMPLE_DASHBOARD,
  }

  return VARIABLES
}
