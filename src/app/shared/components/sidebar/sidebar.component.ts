import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

/**
 * SERVICES
 */
import { DefaultService } from 'src/app/services/default.service';

/**
 * DEFAULTS
 */
import { config } from 'src/environments/config';

declare var $;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  title : any = config.sidebar_location;

  constructor(

    public _service: DefaultService,
    private _spinnerService: NgxSpinnerService

  ) {

  }

  ngOnInit(): void {
    this.defaultsEvents();
  }

  /***********************************************************************************************************************************
  *DEFAULTS
  *********************************************************************************************************************************/

  defaultsEvents() {

    //SELECT 2
    var $select = $('select').select2();
    $select.select2({
      placeholder: "Buscar y Selecionar"
    });

    let _this = this;

    $('select').on('select2:select', function(e) {

      var element = e.params.data.element;
      var $element = $(element);
      
      $element.detach();
      $(this).append($element);
      $(this).trigger("change");

      _this.changeField();
      
    });


    //REMOVE ITEM

    $('select').on('select2:unselect', function(e) {
      _this.changeField();
    });

    //SIDEBAR
    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });

    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });

  }

  //SERIVE GeoJson
  getGeoJson( estado : string ){

    var search = this._service.getAbreviaturaEstados(estado);

    if(search != ''){

      this._service.getGeoJson( search ).subscribe((result: any) => {

        if(result != '' && result != null){

          this._service.polygonJson(result.type, result.coordinates);
          this._service._zoom = 5;

        }

      }, (error) => {
  
        console.log('No se cargo el GeoJson');
  
      });

    }else{

      this._service.polygonJson("Polygon", []);

    }


  }

  /***********************************************************************************************************************************
  *EVENTOS
  *********************************************************************************************************************************/

  //CHANGE
  changeField(){

    this._spinnerService.show();

    var locations = $('#search_locations').val();
    var slash = "/";

    if(!locations){

      locations = [''];
      slash = "";

    }

    this._service._markers = [];

    locations.forEach((val, key) => {

      //SERIVE ESTADOS
      this._service.getMetodo(config.provinces + slash + val).subscribe((result: any) => {


        result.data.forEach((val_1, key_1) => {

          this._service._markers.push(result.data[key_1]);

          if(slash == ''){

            //POSICIÓN DEFAULT
            this._service._lat = config.lat;
            this._service._lng = config.lng;

            //GEOJSON
            this.getGeoJson('');

            //ZOOM ESTANDAR
            this._service._zoom = 4;

          }else{

            //POSICIÓN ITEM
            this._service._lat = result.data[key_1].latitude;
            this._service._lng = result.data[key_1].longitude;

            //GEOJSON
            this.getGeoJson(result.data[key_1].location);

          }
          
        });
        
        this._spinnerService.hide();
  
      }, (error) => {
  
        this._spinnerService.hide();
  
      });
      
    });

  }

  //CLICK
  clickField(){

    $('#search_locations').val(null).trigger('change');
    this.changeField();

  }

}
