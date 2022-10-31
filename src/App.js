import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          codigo: 1,
          descripcion: "coca-cola",
          precio: 2.5,
        },
        {
          codigo: 2,
          descripcion: "inka-cola",
          precio: 2.2,
        },
        {
          codigo: 3,
          descripcion: "fanta",
          precio: 1.7,
        },
      ],
    };
    this.borrar = this.borrar.bind(this);
  }
  render() {
    return (
      <div className="container p-5">
        <table className="table" border="2">
          <thead className="table-dark text-center">
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borra?</th>
            </tr>
          </thead>
          <tbody className="table-warning text-center">
            {this.state.articulos.map((elemento) => {
              return (
                <tr key={elemento.codigo}>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.descripcion}</td>
                  <td>{elemento.precio}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => this.borrar(elemento.codigo)}>
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  borrar(cod) {
    var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
    this.setState({
      articulos: temp
    })
}
}
export default App;
