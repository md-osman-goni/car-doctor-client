import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';



const Login = () => {

    const {signIn} = useContext(AuthContext);


    const handleLogin = e =>{
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .catch(error => {
            console.error(error.message)
        })
    }

    return (
        <div className=" my-10">
            <div className="hero-content flex-col lg:flex-row gap-12">


                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>


                <div className="card flex-shrink-0 w-1/2 shadow-xl bg-base-100 py-14 px-10 border-gray-300 border-2">
                    <h1 className="text-3xl font-bold text-center p-">Login</h1>

                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">

                            <input className='btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700' type="submit" value="Login" />

                        </div>

                    </form>

                    <p className='text-center'>New to Car-Doctor? <Link to="/signUp"><span className='font-bold text-[#FF3811]'>Sing Up</span></Link></p>

                </div>


            </div>
        </div>
    );
};

export default Login;