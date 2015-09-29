declare module 'aurelia-loader-default' {
  import { Origin }  from 'aurelia-metadata';
  import { Loader }  from 'aurelia-loader';
  export class DefaultLoader extends Loader {
    constructor();
    loadModule(id: string): Proimise<any>;
    loadAllModules(ids: string[]): Promse<any[]>;
    loadTemplate(url: string): Promise<TemplateRegistryEntry>;
    loadText(url: string): Promise<string>;
  }
}