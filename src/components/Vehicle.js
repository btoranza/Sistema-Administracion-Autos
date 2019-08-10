import React, { Component } from 'react';

class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.saveEdit = this.saveEdit.bind(this);

    }

    onDelete(){
        const { onDelete } = this.props;
        const { id } = this.props.data;
        onDelete(id);
    }
  
    onEdit(){
        this.setState({
            isEdit: true,
        })
    }

    saveEdit(e){

        e.preventDefault();

        let brand = (this.brandInput.value);
        let model = (this.modelInput.value);
        let color = (this.colorInput.value);
        let license = (this.licenseInput.value);
        let id = (this.props.data.id);

        this.props.saveEdit(brand, model, color, license, id);

    }

    render() {

        const { id, brand, model, color, license } = this.props.data;
  
        return(

            <tbody>
                {this.state.isEdit ? ( 
                    <tr className='editInputs' id={id}>
                    <td>
                        <input type='text' placeholder='Marca' ref={brandInput => this.brandInput = brandInput} required defaultValue={brand}></input>
                    </td>
                    <td>
                        <input type='text' placeholder='Modelo' ref={modelInput => this.modelInput = modelInput} required defaultValue={model}></input>
                    </td>
                    <td>
                        <input type='text' placeholder='Color' ref={colorInput => this.colorInput = colorInput} required defaultValue={color}></input>
                    </td>
                    <td>
                        <input type='text' placeholder='Patente' ref={licenseInput => this.licenseInput = licenseInput} required defaultValue={license}></input>
                    </td>
                    <td className='editTd'>
                        <button className='editBtn' onClick={this.saveEdit}>Guardar 
                            <i className="material-icons">save</i> 
                        </button>
                    </td>
                    <td className='deleteTd'>
                        <button className='deleteBtn' onClick={this.onDelete}>Eliminar 
                            <i className="material-icons">delete</i>
                        </button>
                    </td>
                </tr>
                ) 
                    :
                <tr id={id}>
                    <td>{brand}</td>
                    <td>{model}</td>
                    <td>{color}</td>
                    <td>{license}</td>
                    <td className='editTd' onClick={this.onEdit}>
                        <button className='editBtn'>Editar 
                            <i className="material-icons">edit</i>
                        </button>
                    </td>
                    <td className='deleteTd'>
                        <button className='deleteBtn' onClick={this.onDelete}>Eliminar 
                            <i className="material-icons">delete</i>
                        </button>
                    </td>
                </tr>
            }
            </tbody>
        )
    }
}
  
  export default Vehicle;