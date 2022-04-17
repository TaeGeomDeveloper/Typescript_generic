
// Generics with extends

// 제네릭 범위를 제한 해줄수 있다.
class PersonExtends < T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Mark");
new PersonExtends(39);

// new PersonExtends(true);   // boolean 오류


