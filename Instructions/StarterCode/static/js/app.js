// Add ID#s to dropdown menu
let dropDown = d3.select("#selDataset");    
d3.json("./static/data/samples.json").then((data) => {
    let names = data.names;    
    names.forEach(function(name) {
        dropDown.append("option")
        .text(name)
        .property("value", name);

    });           
});


function metaData(index) {
  
    d3.json("./static/data/samples.json").then((data) => {
      var metaData = data.metadata.filter(meta => meta.id == index);
      var dataArray = metaData[0];
    
      var samplemetadata = d3.select("#sample-metadata");
      samplemetadata.html("");
      Object.entries(dataArray).forEach(([key, value]) => {
        samplemetadata.append("p").text(`${key}: ${value}`);
      });
          
    });
}

// Function to plot the bar and bubble plots from the data in the JSON file
function makePlots(index) {
    d3.json("./static/data/samples.json").then((data) => {
      
// filter the samples by the givenn index
      var samplesFiltered = data.samples.filter(s => s.id == index);
      var sampleArray = samplesFiltered[0];
      
// get the ids, labels and values of the referenced sampleID
      var otuIDs = sampleArray.otu_ids;
      var otuLabels = sampleArray.otu_labels;
      var sampleValues = sampleArray.sample_values;
  
      
// responsive chart
      var config = {responsive: true};
  
      
      
      var trace1 = {
        type: 'bar',
        orientation:"h",
        y: otuIDs.slice(0,10).map(otuId => `OTU ${otuId}`),
        x: sampleValues.slice(0,10),
        hoverText: otuLabels.slice(0,10), 
        marker: {
          
        color: "#75c8ea"
        
        }    
      };
  
      var bardata = [trace1];
      var layout1 = {
        title: `Top 10 OTUs found in individual ID ${index}`,
        font: {
          family: "sans-serif",
        },
        showlegend: false,
        
        bargap: .05
      };
  
      Plotly.newPlot("bar", bardata, layout1, config);
      // End Barc Chart
  
      
  
   // start bubble plot 
      var trace2 = {
        x: otuIDs,
        y: sampleValues,
        mode: "markers",
        marker: {
          color: "lightBlue",
          size: sampleValues,
          sizeref: 0.1,
          sizemode: "area"
        },
        text: otuLabels
        
      };
      var bubble = [trace2];
      var layout2 = {
        title: `OTUs sample values for individual ID ${index}`,
        font: "sans-serif",
        showlegend: false,
        xaxis: { title: "OTU ID"},
        
  
      };
  
      Plotly.newPlot("bubble", bubble, layout2, config);
  
    });
  }
function init () {
    metaData (940); makePlots (940);
}

function optionChanged (newselection) {
    metaData (newselection); makePlots (newselection); 
}

init ();

   
   
   
   
  
   
  
  
  

  
  
  
   
   
   
   
   
   
   
   
   
   
   
  
 
 
 
 
 
   
   
   
   
   
   
  
   
   
   
  
   
   
  
   
   
   
   
   
   
   
   
   
   
   
   
   
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
   
   
  
   
   
   
   
   
   
   
   
  
   
  
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
   
  
   
  
   
  
  
  
  
  
  
  

  
  
  
  
  
  
   
   
   
   
   
   
   
   
   
   
   
   
   
  
  
  
  
  
  
   
   
   
   
   
   
   
   
   
   
   
   
  
   
   
   
   
   
   
   
   
   
   
   
   
  
   
   
  
  
  
  
  

  

   
   
   
   
   
  
   
  

  
  
  
  
  


  

  
  

  
  
  


 
 
 
 
 

 




 
 
 
 
 
 
 
 
 
 
 
 




 
 

 
 
 

 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 



 


