import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BsGoogle } from 'react-icons/bs';
const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { singUpWithEmailPassword, updateUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleEmailPasswordSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const type = form.type.value;
        const password = form.password.value;


        const newUser = {
            email,
            name,
            type,
        }
        singUpWithEmailPassword(email, password)
            .then((result) => {
                const userInfo = {
                    displayName: name,
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => {
                        console.log(err)
                    })
                userDB(newUser)
                form.reset();
                setError('');
                navigate('/');

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    const HandleGoogleSignIn = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                const newUser = {
                    email: user.email,
                    name: user.displayName,
                    type: "buyer",
                }
                userDB(newUser)
                setError('');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }


    const userDB = (user) => {

        fetch(`https://mobile-resell-wizards-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className="card bg-base-100 shadow-xl my-20 lg:w-2/5 w-5/6 mx-auto">
            <div className="items-center text-center p-10">
                <h1 className="mb-5 text-3xl font-semibold">Register Your Account!</h1>
                <button onClick={HandleGoogleSignIn} className="btn btn-primary text-white hover:bg-[#d44040] w-3/4 mx-auto my-4"><BsGoogle className='mr-2'></BsGoogle>SignUp With Google</button>
                <div className="divider">OR</div>
                <form onSubmit={handleEmailPasswordSignUp}>
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
                                <input type="radio" name="type" className="radio checked:bg-red-500" value="seller" />
                                <span style={{ color: '#d44040' }} className="font-bold label-text ml-2">Seller</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="radio" defaultChecked name="type" className="radio checked:bg-blue-500" value="buyer" />
                                <span style={{ color: '#0371EC' }} className="font-bold label-text ml-2">Buyer</span>
                            </label>
                        </div>
                    </div>
                    <p className='text-error'>{error}</p>
                    <p>Already have an account? <Link style={{ color: '#0371EC' }} className=' link link-hover' to='/login'>Login</Link> </p>
                    <div className="form-control mt-6">
                        <button type='submit' className="text-white border-0 btn btn-primary bg-[#D44040] font-semibold">Register</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default SignUp;