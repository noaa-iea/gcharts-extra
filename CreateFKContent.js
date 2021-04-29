// This is a helper function used by createFKContent (below) to find the column number in a google spreadsheet of a given column name 
function getColumnIndex(dataTable, columnName){
  var i = -1;
    do {
      i = i +1;
    } while (columnName != dataTable.getColumnLabel(i));
  return i;
}

// This is a helper function used by createFKContent (below) to determine if the domain of a url provided is a noaa.gov domain
// If it is, this returns true, otherwise false.
function NOAA_Domain(url) {
  var a = document.createElement('a');
  a.href = url;
  hostname = a.hostname;
  return (hostname.slice(-8) == "noaa.gov");
}

// This function generates the modal window content for the Florida Keys ESR site
function createFKContent(DataSourceURL, icon){
  var query = new google.visualization.Query(DataSourceURL);
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {

    var GoogleData = response.getDataTable();
    var rowNumber = GoogleData.getFilteredRows([{column: getColumnIndex(GoogleData, "icon"), value: icon}])[0];
    var caption = GoogleData.getValue(rowNumber, getColumnIndex(GoogleData, "caption"));
    var provider_link = GoogleData.getValue(rowNumber, getColumnIndex(GoogleData, "provider_link"));
    var source = GoogleData.getValue(rowNumber, getColumnIndex(GoogleData, "source"));
    var title = GoogleData.getValue(rowNumber, getColumnIndex(GoogleData, "title"));
    var YAxisTitle = GoogleData.getValue(rowNumber, getColumnIndex(GoogleData, "y_label"));
    var YAxis2Title = GoogleData.getValue(rowNumber, getColumnIndex(GoogleData, "y2_label"));
    var SpreadsheetLink = GoogleData.getValue(rowNumber, getColumnIndex(GoogleData, "data"));

    document.getElementById('caption').innerHTML = caption;
    document.getElementById('title').innerHTML = title;

    if (NOAA_Domain(provider_link) == false) {
      var external_icon = document.createElement("i"); 
      external_icon.className = "fas fa-external-link-alt";
      external_icon.style.cssText = "padding-right: 7px; padding-left: 2px;";
      document.getElementById("source").appendChild(external_icon);
    }

    var node = document.createElement("a");                
    var textnode = document.createTextNode(source);    
    node.appendChild(textnode);             
    node.href = provider_link;  
    node.target = "_blank";     
    node.rel = "noreferrer noopener";  
    document.getElementById("source").appendChild(node);
    
    if (SpreadsheetLink == null){
      document.getElementById('chart_div').innerHTML = "<em>No data</em> yet assigned to icon <b>" + icon + "</b>. This needs to be specified in the Google Sheet 'icons to data | fk-esr-info'.";
    }
    else {
      GraphWrapper({Google_Spreadsheet_Link: SpreadsheetLink,
        YAxisTitle: YAxisTitle,
        threshold_year: 2011,
        SST: (icon == "SST"),
        twoYAxes: (YAxis2Title != null),
        YAxisTitle2: YAxis2Title
      });
    }
  }
}