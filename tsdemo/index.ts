interface IPerson {
  name: string;
  age: number;
}

let p: IPerson = { name: "Jim", age: 18 };

namespace School {
  export interface Student {
    name: string;
    grade: string;
    class: string;
  }

  export interface Teacher {
    name: string;
    grade: string;
    class: string;
  }

  interface Principal {
    name: string;
  }
}

let s: School.Student = { name: "Jim", grade: "一", class: "六" };
console.log("s:", s);
