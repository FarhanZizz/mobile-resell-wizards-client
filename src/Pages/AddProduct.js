import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const name = form.name.value;
        const img = form.image.value;
        const Price = form.price.value;
        const orginal_price = form.orginal_price.value;
        const used = form.used.value;
        const seller = form.seller.value;
        const location = form.location.value;
        const seller_email = user.email;
        const time = format(new Date(), 'p');
        const status = "Available";

        const product = {
            category,
            Price,
            orginal_price,
            seller,
            used,
            time,
            img,
            name,
            location,
            seller_email,
            status
        }
        fetch('https://mobile-resell-wizards-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Product Successfully added')
                    navigate('/dashboard/myproducts');
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div className='lg:w-1/2 w-2/3 mx-auto my-10'>
            <h1 className="mb-5 text-xl font-semibold text-center">Add a Product!</h1>
            <form onSubmit={handleAddProduct}>
                <label className="label">
                    <span className="label-text">Select Your Product Brand</span>
                </label>
                <select name='category' className="select w-full">
                    <option value="1">Apple</option>
                    <option value="2">Google</option>
                    <option value="3">Xiaomi</option>
                </select>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="Enter Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Original Price (When you bought it)</span>
                    </label>
                    <input type="number" name="orginal_price" placeholder="Orginal Price" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Used For</span>
                    </label>
                    <input type="text" name="used" placeholder="Used for" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" readOnly defaultValue={user.displayName} name="seller" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="text-white border-0 btn btn-primary bg-[#D44040] font-semibold">Book Now</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;