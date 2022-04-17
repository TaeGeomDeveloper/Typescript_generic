
// Generics Function

// Type Alias
type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1 : HelloFunctionGeneric1 = <T>(message:T): T => {
  return message;
}


// 인터페이스
interface HelloFunctionGenric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGenric2 = <T>(message:T): T => {
  return message;
}
