# plotJS-extra
Extra Javascript functionality for IEA plotting that acts as a wrapper for Google Charts. Specifically, plotJS-extra adds the ability to highlight an x-axis interval for Google Line Charts.

# Demonstration
To see plotJS-extra in action, check out the site for the [Florida Keys NMS IEA Report](https://noaa-iea.github.io/fk-esr-info/home.html), where all of the figures incorporate plotJS-extra.

A simple example using plotJS-extra that you can use as a template can be found [here](https://marinebon.org/infographiqJS/infographiq_example/modals/modal_google_charts2.html). 
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
