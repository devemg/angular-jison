# AngularJison

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Instrucciones 

1. Agregar carpeta/archivos .jison
2. Agregar archivos .jison al arreglo de scripts en angular.json (Línea 34)
3. Declarar la variable grammar en el componente a utilizar ```declare  var grammar:  any;```
4. Hacer uso del método parse ``` grammar.parse("TEXTO");```