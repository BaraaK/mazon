import React from 'react';
import { Link } from 'react-router-dom';
import data from '../products'

function productDetails(props) {
    console.log(props.match.params.id)
    const product = data.products.find((item) => item._id === props.match.params.id) 
    return (
        <div class='product-details'>
            <div>
                <Link to='/'><i class="fas fa-chevron-circle-left"></i>Back</Link>
                <div>
                    <ul className="home-page-products-ul">
                        <li className="home-page-product-li">
                            <img src={product.image}/>
                        </li>
                        <li className="home-page-product-li">
                            <div>
                                {product.name}
                            </div>
                        </li>
                        <li className="home-page-product-li">
                            <div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default productDetails;