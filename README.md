## Clonar proyecto 
rama default master:
    git clone https://github.com/branfon1/maps_angular.git

## Ejecución del proyecto 
Guias de instalación Angular    `src/assets/docs/INSTALACIÓN ANGULAR.pdf`
npm install                     `instalar node_modules`
ng serve --port 4300 --o        `Ejecución del proyecto, Opcional: '--port 4300'`

## Plugins instalados 
Bootstrap                       
JQuery                          
Font-awesome               `Icons`
Select2                    `Filtros`
Moment                     `Formatear fechas`
Accounting                 `Formatear numeros`

## Uso de módulos de Angular
@angular/router 
@angular/http
ngx-spinner
@angular/google-maps
@angular/forms
@angular/platform-browser-dynamic

## app
layouts/default            `PRINCIPAL: Definicón de módulos [import, declarations, providers]`
modules/                   `Vistas`
modules/maps               `Contenedor principal, vistas de los mapas`
services/default           `[ metodos globales, servicios api rest, variables globales ] `
shared                     `Se exportan los partials [header/footer/sidebar] al module default`
shared/components          `Definición Partials: Vistas [header/footer/sidebar] `
shared/components/sidebar  `[Total, Filtros, acciones]`

## assets
docs          `Guias`     
img           `Imagenes públicas [fondos, icon maps] `   
Library       `Recursos secundarios`      

## environments
config.ts           `Archivo principal de toda la configuracón: ` 
                    `[Api_key, mensajes, complementos de servicios, posición defaults] `  
environment.ts      `Url's de las API [trackcorona, shape.geojson] `       

## styles 
styles.scss       `Estandares, colores`  

## guia del proyecto 
Guia        `src/assets/docs/GUIA.pdf`