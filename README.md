# plotJS-extra
Extra Javascript functionality for Integrated Ecosystem Assessments (IEA) plotting via Google Charts.
1. `GraphWrapper()`: adds the ability to highlight an x-axis interval for Google Line Charts.
2. `createFKContent()`:  generates the modal window content for the Florida Keys NMS IEA [infographic](https://noaa-iea.github.io/fk-esr-info/infographic.html). This function builds upon the [Infographiq approach](https://marinebon.org/infographiq/) for displaying scientific data.

# Demonstration
To see plotJS-extra in action, check out the site for the [Florida Keys NMS IEA Report](https://noaa-iea.github.io/fk-esr-info/home.html), where all of the figures incorporate plotJS-extra.

A simple example using `GraphWrapper()` that you can use as a template can be found [here](https://marinebon.org/infographiqJS/infographiq_example/modals/modal_google_charts2.html). 
# Functionality 
Parameters for the Javascript function `GraphWrapper()`:
- Required parameters
  - Google_Spreadsheet_Link: string data type. URL of Google Sheet that contains the data to be plotted. Note that, in the sharing options for the Google Sheet, the "Get link" option must be set to "Anyone on the internet can view".
- Optional parameters
  - threshold_year: number data type. Beginning of x-axis interval. Default value of 2011. 
  - targetElement: string data type. ID of container where Google Chart is to be positioned. Default value of "chart_div".
  - YAxisTitle: string data type. Name of y-axis title. Default value of "Y Axis Title".
  - YAxisTitle2: string data type. Name of second y-axis title. Default value of "Second Y Axis".
  - twoYAxes: boolean data type. Whether the figure has two y-axes. Default value of false. 
  - SST: boolean data type. Whether the figure contains sea-surface temperature data (which have a unique data structure and need to be handled differently). Default value of false,. 
  - YAxisZero: boolean data type. Whether the y-axis should begin at 0. Default value of false.

Parameters for the Javascript function `createFKContent()`:
- Required parameters
  - DataSourceURL: string data type. URL of Google Sheet that contains the modal window content. Note that, in the sharing options for the Google Sheet, the "Get link" option must be set to "Anyone on the internet can view".
  - icon: string data type. Single row of Google Sheet to be selected for plotting a given modal window. 'icon' refers to the clickable element name in a Infographiq image.
