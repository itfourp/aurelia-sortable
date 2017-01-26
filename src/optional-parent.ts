import {resolver, Container} from 'aurelia-dependency-injection';

@resolver()
export class OptionalParent {
  constructor(private key: Function) {}

  public get(container: Container) {
    if (container.parent && container.parent.hasResolver(this.key, true)) {
      return container.parent.get(this.key);
    }
    return null;
  }

  public static of(key: Function) {
    return new OptionalParent(key);
  }
}
