export namespace AnimalActions {

  export class AddAnimal {
    static readonly type = '[Zoo] Add Animal';
    constructor(public name: string) {}
  }

  export class FeedAnimals {
    static readonly type = '[Zoo] FeedAnimals';
  }


  export class DeleteAnimal {
    static readonly type = '[Zoo] Delete Animal';
    constructor(public id: number) {}
  }

}
