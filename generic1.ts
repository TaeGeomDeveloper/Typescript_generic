
// Generics, Any 와 다른 점

function helloString(message: string) {
  return message;
}

function helloNumber(message: number) {
  return message;
}

// 더 많은 반복된 함수들


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

