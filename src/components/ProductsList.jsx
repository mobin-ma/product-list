import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../redux/actions/productAction'

const ProductsList = ({ products, deleteP }) => {
    console.log(products);
    return (
        <div className='product-list'>
            <ul className='list-title'>
                <li>Name:</li>
                <li>Price:</li>
                <li>Id:</li>
            </ul>
            {
                products.map((product,i) => {
                    return (
                        <ul key={i} className="list-items">
                            <li>{product.name}</li>
                            <li>{product.price}</li>
                            <li>{product.id}</li>
                            <button onClick={() => deleteP(product.id)}>delete</button>
                        </ul>
                    );
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productState.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteP: (id) => dispatch(deleteProduct(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);