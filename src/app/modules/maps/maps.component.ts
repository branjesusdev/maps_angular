import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

/**
 * DEFAULTS
 */
import { config } from 'src/environments/config';

/**
 * SERVICES
 */
import { DefaultService } from 'src/app/services/default.service';

/**
 * RECURSOS
 */
import * as moment from 'moment';
import * as accounting from 'accounting';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  //RECURSOS
  mensajeLoading: any = config.mensajeLoading;

  icon = {
    url: '/assets/img/maps/10.png',
    scaledSize: {
      width: 35,
      height: 35
    }
  }

  @Output() markerClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(

    public _service: DefaultService,
    private _spinnerService: NgxSpinnerService

  ) {

    this.getMapsSidebar();

  }

  ngOnInit(): void {

    this._spinnerService.show();

    accounting.settings = {
      number: {
        precision: 0,  // default precision on numbers is 0
        thousand: ".",
        decimal: "."
      }
    }


  }

  /***********************************************************************************************************************************
  *DEFAULTS
  *********************************************************************************************************************************/


  //OBTENER INFO MAPA
  getMapsSidebar() {

    this._service.getMetodo(config.countries + '/' + config.default_search).subscribe((result: any) => {

      //RESULT DATA MAPAS
      result.data.forEach((val, key) => {

        this._service._total = accounting.formatNumber(result.data[key].confirmed);
        this._service._tl_mortales = accounting.formatNumber(result.data[key].dead);
        this._service._tl_recuperados = accounting.formatNumber(result.data[key].recovered);

        moment.locale('es');
        var end = moment(new Date());
        var update = moment(end.diff(result.data[key].updated)).format("m");

        this._service._tl_min = update;

        //POSICIÓN DEFAULT
        this._service._lat = config.lat;
        this._service._lng = config.lng;

      });

      this.getMapsEstados();

    }, (error) => {

      this._spinnerService.hide();

    });

  }

  //OBTENER INFO MAPA
  getMapsEstados() {

    this._service.getMetodo(config.provinces).subscribe((result: any) => {

      this._service._markers = result.data;
      this._service._options_location = result.data;

      this._spinnerService.hide();

    }, (error) => {

      this._spinnerService.hide();

    });

  }

  //POLYGON GEOJSON
  geoJson(location : any){

    var abreviatura = this._service.getAbreviaturaEstados(location);

    if (abreviatura != '') {

      this._service.getGeoJson(abreviatura).subscribe((result: any) => {

        if (result != '' && result != null) {

          this._service.polygonJson(result.type, result.coordinates);
          this._service._zoom = 5;

        }

      }, (error) => {

        console.log('No se cargo el GeoJson');

      });

    } else {

      this._service.polygonJson("Polygon", []);

    }

  }


  /***********************************************************************************************************************************
  *EVENTOS
  *********************************************************************************************************************************/

  markerClicked($event: MouseEvent, location: any) {
    this.geoJson(location.location);
  }

  onMouseOver(infoWindow, $event: MouseEvent, location : any) {
    infoWindow.open();
    this.geoJson(location.location);
  }

  onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
    this._service.polygonJson("Polygon", []);
  }

  layerClicked(clickEvent) {
  }

  styleFunc(feature) {
    return ({
      clickable: false,
      fillColor: feature.getProperty('color'),
      strokeWeight: 1
    });
  }

}
