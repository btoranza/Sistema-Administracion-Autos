import React, { Component } from 'react';

class AddVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
  
    onSubmit(e){
        e.preventDefault();

        let brand = (this.brandInput.value);
        let model = (this.modelInput.value);
        let color = (this.colorInput.value);
        let license = (this.licenseInput.value);

        this.props.onAdd(brand, model, color, license);

        this.brandInput.value = '';
        this.modelInput.value = '';
        this.colorInput.value = '';
        this.licenseInput.value = '';
    }

    render() {
  
        return(
            <div id='addBar'>
                <form onSubmit={this.onSubmit} id='form'>
                    <input type='text' placeholder='Marca' ref={brandInput => this.brandInput = brandInput} required></input>
                    <input type='text' placeholder='Modelo' ref={modelInput => this.modelInput = modelInput} required></input>
                    <input type='text' placeholder='Color' ref={colorInput => this.colorInput = colorInput} required></input>
                    <input type='text' placeholder='Patente' ref={licenseInput => this.licenseInput = licenseInput} required></input>
                    <button>Agregar <i className="material-icons">add_circle</i></button>
                </form>
            </div>

        )   
    }
}
  
  export default AddVehicle;