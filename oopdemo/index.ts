interface IComponent {
  add(c: IComponent);
  remove(c: IComponent);
  print();
}

abstract class Control implements IComponent {
  add(c: IComponent) {
    throw new Error("Method not implemented.");
  }

  remove(c: IComponent) {
    throw new Error("Method not implemented.");
  }

  abstract print();
}

abstract class Container implements IComponent {
  private _children = new Set<IComponent>();

  add(c: IComponent) {
    this._children.add(c);
  }
  remove(c: IComponent) {
    this._children.delete(c);
  }

  print() {
    this.printSelf();
    this._children.forEach((c) => c.print());
  }

  abstract printSelf();
}

class Form extends Container {
  printSelf() {
    console.log("print WinForm");
  }
}

class Frame extends Container {
  printSelf() {
    console.log("print Frame");
  }
}

class Picture extends Control {
  print() {
    console.log("print Picture");
  }
}

class Button extends Control {
  print() {
    console.log("print Button");
  }
}

class Label extends Control {
  print() {
    console.log("print Label");
  }
}

class CheckBox extends Control {
  print() {
    console.log("print CheckBox");
  }
}

class TextBox extends Control {
  print() {
    console.log("print TextBox");
  }
}

class LinkLabel extends Control {
  print() {
    console.log("print LinkLabel");
  }
}

class PasswordBox extends Control {
  print() {
    console.log("print PasswordBox");
  }
}

function main() {
  let w = new Form();
  w.add(new Picture());
  w.add(new Button());
  w.add(new Button());
  let f = new Frame();
  f.add(new Label());
  f.add(new CheckBox());
  f.add(new TextBox());
  f.add(new Label());
  f.add(new LinkLabel());
  f.add(new Label());
  f.add(new PasswordBox());
  w.add(f);
  w.print();
}

main();
