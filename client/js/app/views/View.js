class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  template() {
    throw new Error("O Método _template dever ser implementado");
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}
