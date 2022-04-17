# Typescript_generic
타입스크립트 제네릭 공부


## Generics, Any 와 다른 점
< _generic1.ts_ >
```typescript
  function hello(message: any):any {
  return message;
  }

  console.log(hello("Mark").length);
  console.log(hello(39).length);

  function helloGeneric<T>(message: T): T {
    return message;
  }

  console.log(helloGeneric('Mark'));
  console.log(helloGeneric(39));
  console.log(helloGeneric(true));
```

## Generic Basic
< _generic2.ts_ >
```typescript
  function helloBasics<T, U>(message: T, comment: U):T{
  return message;
  }

  helloBasics<string, number>("Taegeom",27);  // 직접 지정
  helloBasics(27,29);                         // 추론
```

## Generics Array & Tuples
< _generic3.ts_ >
- Array
```typescript
    function helloArray<T>(message: T[]): T {
    return message[0];
    }

    helloArray(["Hello","world"]);
    helloArray(["Hello", 5]);
```
- Tuple
```typescript
    function helloTuple<T,K>(message: [T, K]): T {
      return message[0];
    }

    helloTuple(["Hello","World"]);
    helloTuple(["Hello",5]);
```

## Generics Function
< _generic4.ts_ >
- Type Alias
```typescript
  type HelloFunctionGeneric1 = <T>(message: T) => T;
  const helloFunction1 : HelloFunctionGeneric1 = <T>(message:T): T => {
    return message;
  }
```
- interface
```typescript
  interface HelloFunctionGenric2 {
  <T>(message: T): T;
  }
  const helloFunction2: HelloFunctionGenric2 = <T>(message:T): T => {
    return message;
  }

```
## Generics Class
< _generic5.ts_ >
```typescript
  class Person<T, K> {
  private _name: T;
  private _age: K;

   constructor(name : T, age: K) {
   this._name = name;
   this._age = age;
     }
   }
   new Person("Mark", 27);
```

## Generics with extends
< _generic6.ts_ >
```typescript
  // 제네릭 범위를 제한 해줄수 있다.
  class PersonExtends < T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
   }
  }
```

## Keyof & type lookup System
< _generic7.ts_ >
```typescript
    interface IPerson {
    name : string;
    age: number;
  }

  // type Keys = keyof IPerson;
  // const keys: Keys = "name";

  const person : IPerson = {
    name: "Mark",
    age : 39,
  };

  // IPerson[keyof IPerson] 
  // => IPerson["name" | "age"] 
  // => IPerson["name"] | IPerson["age"]
  // => string | number

  // function getProp <T>(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] 
  function getProp <T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  getProp(person, 'age');

  function setProp < T , K extends keyof T>(
    obj: T, 
    key: K,
    value : T[K]
    ):void {
    obj[key] = value;
  }

  setProp(person, "name", "Anna");
```
