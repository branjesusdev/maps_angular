import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  //SIDEBAR
  _total : any;
  _tl_activos : any;
  _tl_recuperados : any;
  _tl_mortales : any;
  _tl_min : any;
  _options_location : any;

  //MAPS
  _markers: any;
  _lat: number;
  _lng: number;
  _polygon : object = {};
  _zoom : number = 4;

  constructor(
    public _httpClient: HttpClient,
    public _http: Http
  ) {

    this.polygonJson("Polygon", []);

   }

  //GET
  getMetodo(params: string) {

    let url = `${environment.api}` + params;

    return this._httpClient.get(url);

  }

  //GET GEOJSON
  getGeoJson(params: string) {

    let url = `${environment.apiGeoJson}` + params + '/shape.geojson';

    return this._httpClient.get(url);

  }

  //POLYGON 
  polygonJson(type : any, coordinates : any){

    this._polygon = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "letter": "G",
            "color": "blue",
            "rank": "7",
            "ascii": "71"
          },
          "geometry": {
            "type": type,
            "coordinates": coordinates          
          }
        }
      ]
    };

  }

  //ABREVIATURAS DE ESTADOS
  getAbreviaturaEstados(estado : string){

    var search = "";

    switch(estado){

      case "Washington":
        search = "WA";
        break;
      
      case "Alaska":
        search = "AK";
        break;

      case "Alabama":
        search = "AL";
        break;

      case "Arkansas":
        search = "AR";
        break;

      case "Arizona":
        search = "AZ";
        break;
      
      case "California":
        search = "CA";
        break;

      case "Colorado":
        search = "CO";
        break;
      
      case "Connecticut":
        search = "CT";
        break;

      case "District of Columbia":
        search = "DC";
        break;

      case "Delaware":
        search = "DE";
        break;

      case "Florida":
        search = "FL";
        break;

      case "Georgia":
        search = "GA";
        break;

      case "Guam":
        search = "GU";
        break;

      case "Hawaii":
        search = "HI";
        break;

      case "Iowa":
        search = "IA";
        break;

      case "Idaho":
        search = "ID";
        break;

      case "Illinois":
        search = "IL";
        break;

      case "Indiana":
        search = "IN";
        break;

      case "Kansas":
        search = "KS";
        break;

      case "Kentucky":
        search = "KY";
        break;

      case "Louisiana":
        search = "LA";
        break;

      case "Massachusetts":
        search = "MA";
        break;
      
      case "Maryland":
        search = "MD";
        break;  

      case "Maine":
        search = "ME";
        break;

      case "Michigan":
        search = "MI";
        break;

      case "Minnesota":
        search = "MN";
        break;

      case "Missouri":
        search = "MO";
        break;

      case "Northern Mariana Islands":
        search = "MP";
        break;

      case "Mississippi":
        search = "MS";
        break;

      case "Montana":
        search = "MT";
        break;

      case "North Carolina":
        search = "NC";
        break;

      case "North Dakota":
        search = "ND";
        break;

      case "Nebraska":
        search = "NE";
        break;

      case "Nebraska":
        search = "NE";
        break;

      case "New Hampshire":
        search = "NH";
        break;

      case "New Jersey":
        search = "NJ";
        break;

      case "New Mexico":
        search = "NM";
        break;

      case "Nevada":
        search = "NV";
        break;

      case "New York":
        search = "NY";
        break;

      case "Ohio":
        search = "OH";
        break;

      case "Oklahoma":
        search = "OK";
        break;

      case "Oregon":
        search = "OR";
        break;

      case "Pennsylvania":
        search = "PA";
        break;

      case "Puerto Rico":
        search = "PR";
        break;

      case "Rhode Island":
        search = "RI";
        break;

      case "South Carolina":
        search = "SC";
        break;

      case "South Dakota":
        search = "SD";
        break;

      case "Tennessee":
        search = "TN";
        break;
      
      case "Tennessee":
        search = "TN";
        break;

      case "Texas":
        search = "TX";
        break;
      
      case "Utah":
        search = "UT";
        break;

      case "Virginia":
        search = "VA";
        break;
      
      case "Virgin Islands":
        search = "VI";
        break;
      
      case "Vermont":
        search = "VT";
        break;
      
      case "Wisconsin":
        search = "WI";
        break;
      
      case "West Virginia":
        search = "WV";
        break;
      
      case "Wyoming":
        search = "WY";
        break;
      
    }

    return search;

  }

}
