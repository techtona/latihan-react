import React, {Component} from 'react';
import CardProduct from "./CardProduct";

class Portofolio extends Component {
    constructor(){
        super();
        this.state = {
            products : []
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h2>Halaman Portofolio</h2>
                <br/>
                {this.state.products.map((data) => {
                    return(
                        <CardProduct title={data.nama} price={data.harga}/>
                    )
                })}
            </div>
        );
    }
}

export default Portofolio;
