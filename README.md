# Typescript_generic
타입스크립트 제네릭 공부


## Generics, Any 와 다른 점
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
```typescript
  function helloBasics<T, U>(message: T, comment: U):T{
  return message;
  }

  helloBasics<string, number>("Taegeom",27);  // 직접 지정
  helloBasics(27,29);                         // 추론
```

## Generics Array & Tuples


## Generics Function


## Generics Class


## Generics with extends


## Keyof & type lookup System

