export namespace DogActions {

  export class AddDog {
    static readonly type = '[Dog] Add Dog';
    constructor(public name: string) {}
  }

  export class FeedDogs {
    static readonly type = '[Dog] FeedDogs';
  }


  export class DeleteDog {
    static readonly type = '[Dog] Delete Dog';
    constructor(public id: number) {}
  }

}
