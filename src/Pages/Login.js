import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="card bg-base-100 shadow-xl my-20 lg:w-2/5 w-5/6 mx-auto">
            <div className="items-center text-center p-10">
                <h1 className="mb-5 text-3xl font-semibold">Login To Your Account!</h1>
                <form>
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
                        <p className="mt-5 ">Don't have an account? <Link style={{ color: '#0371EC' }} className=' link link-hover' to='/signup'>Register</Link> </p>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="text-white border-0 btn btn-primary bg-[#D44040] font-semibold">Login</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Login;