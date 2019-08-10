import React from 'react';
import { Component } from 'react'; 
import './App.scss';

//Importing the components
import Hero from './components/Hero';
import AddVehicle from './components/AddVehicle';
import TableHeader from './components/TableHeader';
import Vehicle from './components/Vehicle';


let vehicles = [{
        id: 1,
        brand: 'Peugeot',
        model: 208, 
        color: 'Rojo',
        license: 'BQP005'
    },
    {
        id: 2,
        brand: 'Ford', 
        model: 'Fiesta', 
        color: 'Azul', 
        license: 'AA56JS'
    }
]

localStorage.setItem('vehicles', JSON.stringify(vehicles))

class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            vehicles: JSON.parse(localStorage.getItem('vehicles')),
        }

        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }

    componentWillMount() {

        const vehicles = this.getVehicles();

        this.setState({ vehicles })
    }

    getVehicles() {
        return this.state.vehicles;
    }

    getId() {
        let nextId = 1;
        let vehicles = this.state.vehicles;
        
        (vehicles.length > 0) ? nextId = vehicles[vehicles.length-1].id+1 : nextId = 1;

        return nextId;
        }

    onAdd(brand, model, color, license){
        const vehicles = this.getVehicles();
        vehicles.push({
            id: this.getId(),
            brand: brand, 
            model: model, 
            color: color, 
            license: license
        })

        this.setState({
            vehicles
        })
    }

    saveEdit(brand, model, color, license, id){
        console.log(brand, model, color, license)

        const vehicles = this.getVehicles();

        vehicles = vehicles.map( v => {
            if(v.id === id){
                v.brand = brand;
                v.model = model;
                v.color = color;
                v.license = license;
            }
        })

        this.setState({ vehicles })
        
    }

    onDelete(id) {
        const vehicles = this.getVehicles();
        const filteredVehicles = vehicles.filter( v => {
            return v.id !== id
        })

        console.log(filteredVehicles);

        this.setState({
            vehicles: filteredVehicles
        })
    }

    render() {

        return(
            <div id='app'>
                <Hero />

                <AddVehicle 
                onAdd={this.onAdd}
                />

                <div id='dataContent'>
                    <table className='tableContent'>
                            <TableHeader />
                            {this.state.vehicles.map( v => { 
                                return <Vehicle 
                                    data={v} 
                                    onDelete={this.onDelete}
                                    saveEdit={this.saveEdit}
                                    /> 
                                })
                            }
                    </table>
                </div>
            </div>
        )
    }
}

export default App;