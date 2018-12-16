import  esriLoader from "esri-loader";
import React,{Component} from "react";
//import data from "C:/Users/Mikko/AppData/Local/Temp/Pysakointivirheet_2014-17.csv";

const styles =  {
    container: {
      height: '100%',
      left: 0,
      right: 0,
    },
    mapDiv: {
      padding: 0,
      margin: 0,
      height: '760px',
      width: '100%'
    },
  }

export default class EsriMap extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
      }

      componentDidMount () {

        var data = require('./../HSLnousijamaarat.csv'
        )
        const options = {
            url: 'https://js.arcgis.com/4.9/'
          };

          esriLoader.loadModules(['esri/Map', 'esri/views/MapView', 
          "esri/layers/CSVLayer","esri/widgets/Legend"], options)
          .then(([Map, MapView,CSVLayer, Legend]) => {
            // create map with the given options at a DOM node w/ id 'mapNode'
            


            const url =
            //"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv";
            data;
          // Paste the url into a browser's address bar to download and view the attributes
          // in the CSV file. These attributes include:
          // * mag - magnitude
          // * type - earthquake or other event such as nuclear test
          // * place - location of the event
          // * time - the time of the event
    
          const template = {
            title: "{nimi_s}",
            content: "Nousijamäärä {nousijat}"
          };

          const renderer = {
            type: "heatmap",
            colorStops: [
            {
              color: "rgba(63, 40, 102, 0)",
              ratio: 0
            },
            {
              color: "#472b77",
              ratio: 0.083
            },
            {
              color: "#4e2d87",
              ratio: 0.166
            },
            {
              color: "#563098",
              ratio: 0.249
            },
            {
              color: "#5d32a8",
              ratio: 0.332
            },
            {
              color: "#6735be",
              ratio: 0.415
            },
            {
              color: "#7139d4",
              ratio: 0.498
            },
            {
              color: "#7b3ce9",
              ratio: 0.581
            },
            {
              color: "#853fff",
              ratio: 0.664
            },
            {
              color: "#a46fbf",
              ratio: 0.747
            },
            {
              color: "#c29f80",
              ratio: 0.830
            },
            {
              color: "#e0cf40",
              ratio: 0.913
            },
            {
              color: "#ffff00",
              ratio: 1
            }],
            maxPixelIntensity: 25,
            minPixelIntensity: 0
          };

          const layer = new CSVLayer({
            url: url,
            title: "Magnitude 2.5+ earthquakes from the last week",
            copyright: "USGS Earthquakes",
            popupTemplate: template,
            renderer: renderer
          });
    
          let map = new Map( {
            //center: [-118, 34.5],
            //zoom: 8,
            basemap: 'dark-gray',
            layers: [layer]
          });

            const view = new MapView({
                container: "viewDiv",
                map,
                zoom: 3,
                center: [-138, 30],
                rotation: 0,
              });
              
                view.when(() => {
                  this.setState({
                    map,
                    view,
                    status: 'loaded'
                  });
                  view.ui.add(new Legend({
                    view: view
                  }), "bottom-left");

            });
        })     
    }

    render () {
        //this.componentDidMount();
     // if the API hasn't already been loaded (i.e. the frist time this is run)
    // loadModules() will call loadScript() and pass these options, which, 
    // in this case are only needed b/c we're using v3.x instead of the latest 4.x
    //console.log(this.state)
     return(
       <div className="mapcontainer" style={styles.container}>
         <div id='viewDiv' style={styles.mapDiv} >
         </div>
         
         </div>
     )
    }


}