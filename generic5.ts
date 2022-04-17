
// Generics Class

// 클래스에서 제네릭 사용법

class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name : T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("Mark", 27);
// new Person<string>(39); // 오류

// new Person<string, number> ("Mark", "age"); // 오류