import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios'

import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Pages/Loading';

const BookingModal = ({ productDetails, setProductDetails }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const product = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        axios({
            method: 'post',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            url: 'https://mobile-resell-wizards-server.vercel.app/bookings',
            data: {
                email,
                name,
                img,
                product,
                price,
                phone,
                location,
            }
        })
            .then(function (response) {
                console.log(response.data);
                if (response.data.acknowledged) {
                    setProductDetails(null);
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error(response.data.message);
                }
            })

        axios({
            method: 'post',
            url: 'https://mobile-resell-wizards-server.vercel.app/bookings',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        });


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => { setProductDetails(null) }} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <h1 className="my-5 text-xl font-semibold text-center">Book This Product Right Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" disabled defaultValue={user.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" disabled defaultValue={user.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="product" placeholder="Product Name" className="input input-bordered" disabled defaultValue={productDetails.name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="img" placeholder="Product Name" className="input input-bordered" disabled defaultValue={productDetails.img} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" disabled defaultValue={productDetails.Price} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Meeting Location" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="text-white border-0 btn btn-primary bg-[#D44040] font-semibold">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;