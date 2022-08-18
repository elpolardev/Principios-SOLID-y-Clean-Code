interface Bird1 {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimerBird {
  swim(): void;
}

class Tucan1 implements Bird1, FlyingBird {
  public fly() {}
  public eat() {}
}

class Huminbird1 implements Bird1, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich1 implements Bird1, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin1 implements Bird1, SwimerBird {
  public eat() {}
  public swim() {}
}
