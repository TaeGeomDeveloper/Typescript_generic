
// Generic Basic

function helloBasics<T, U>(message: T, comment: U):T{
  return message;
}

helloBasics<string, number>("Taegeom",27);  // 직접 지정
helloBasics(27,29);                         // 추론


