class Pool {
  constructor(factoryFn, initialSize = 0) {
    this.pool = [];
    this.poolIndex = 0;
    this.factoryFunc = factoryFn;

    for (var i = 0; i < initialSize; i++) {
      this.pool.push(factoryFn());
    }
  }

  poolLength() {
    return this.pool.length - this.poolIndex;
  }

  addToPool() {
    this.pool.push(this.factoryFunc());
  }

  getFromPool() {
    if (!this.poolLength()) {
      this.addToPool();
    }

    const bullet = this.pool[this.poolIndex];
    this.poolIndex += 1;
    return bullet;
  }
}

export default Pool;
