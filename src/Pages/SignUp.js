import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="card bg-base-100 shadow-xl my-20 lg:w-2/5 w-5/6 mx-auto">
            <div className="items-center text-center p-10">
                <h1 className="mb-5 text-3xl font-semibold">Register Your Account!</h1>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="divider w-3/4 mx-auto mt-10"></div>
                    <h1 className='text-center font-bold'>Account Type</h1>
                    <div className="flex justify-evenly my-5">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                <span style={{ color: '#d44040' }} className="font-bold label-text ml-2">Seller</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                <span style={{ color: '#0371EC' }} className="font-bold label-text ml-2">Buyer</span>
                            </label>
                        </div>
                    </div>
                    <p>Already have an account? <Link style={{ color: '#0371EC' }} className=' link link-hover' to='/login'>Login</Link> </p>
                    <div className="form-control mt-6">
                        <button type='submit' className="text-white border-0 btn btn-primary bg-[#D44040] font-semibold">Login</button>
                    </div>

                </form>
            </div>
        </div >
    );
};

export default SignUp;