import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions/productAction';

const ProductAdder = ({ adder }) => {
    const save = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('productName');
        const price = form.get('productPrice');
        const id = form.get('productId');

        adder({name, price, id});
        alert('add item sucss...');

        e.target.reset();
    }

    return (
        <div className='product-adder'>
            <form onSubmit={(e) => save(e)}>
                <div>
                    <label htmlFor="">Product Name:</label>
                    <input type="text" name='productName' placeholder='name....' />
                </div>
                <div>
                    <label htmlFor="">Product Price:</label>
                    <input type="number" name='productPrice' placeholder='price....' />
                </div>
                <div>
                    <label htmlFor="">Product Id:</label>
                    <input type="number" name='productId' placeholder='id....' />
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        adder: (item) => dispatch(addProduct(item))
    };
}

export default connect(null, mapDispatchToProps)(ProductAdder);