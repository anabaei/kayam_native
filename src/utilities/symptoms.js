const Symptoms = {
  getAll() {
    return fetch('https://kayamspa.herokuapp.com/results/index').then(res => res.json());

  }
}

export { Symptoms };
