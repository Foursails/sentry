declare module 'aurelia-loader' {
  import * as core from 'core-js';
  import { relativeToFile }  from 'aurelia-path';
  import { Origin }  from 'aurelia-metadata';
  export class TemplateDependency {
    constructor(src: string, name?: string);
  }
  export class TemplateRegistryEntry {
    constructor(id: string);
    templateIsLoaded(): boolean;
    isReady(): boolean;
    setTemplate(template: Element): void;
    addDependency(src: string | Function, name?: string): void;
    setResources(resources: any): void;
    setFactory(factory: any): void;
  }
  export class Loader {
    constructor();
    loadModule(id: string): Promise<any>;
    loadAllModules(ids: string[]): Promise<any[]>;
    loadTemplate(url: string): Promise<TemplateRegistryEntry>;
    loadText(url: string): Promise<string>;
    getOrCreateTemplateRegistryEntry(id: string): TemplateRegistryEntry;
    importDocument(url: string): Promise<Document>;
    importBundle(link: HTMLLinkElement): Promise<Document>;
    importTemplate(url: string): Promise<Element>;
    findTemplate(doc: Document, url: string): Element;
    findBundledTemplate(name: string, entry: TemplateRegistryEntry): Promise<boolean>;
  }
}