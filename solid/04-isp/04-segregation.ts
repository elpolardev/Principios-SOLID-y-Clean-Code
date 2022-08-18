interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Huminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Ostrich implements Bird {
  public fly() {
    throw new Error('este ave no vuela');
  }
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements Bird {
  public fly() {
    throw new Error('este ave no vuela');
  }
  public eat() {}
  public run() {}
  public swim() {}
}
