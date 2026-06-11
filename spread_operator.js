class Monitor {
  constructor(keyboard, mouse) {
    this.keyboard = keyboard;
    this.mouse = mouse; 
  }

  solve(...data) { 
    this.mouse += 0.1; 
    console.log(this.mouse, ...data); 
  }
}

const ex = new Monitor("Mechanical", 1.5);
ex.solve("extra", "logs", "here");
