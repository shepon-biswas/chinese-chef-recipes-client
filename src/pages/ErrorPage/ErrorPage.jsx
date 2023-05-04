import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../shared/Header/Header';

const ErrorPage = () => {
    return (
        <>
            <>
            {/* Header */}
            <Header></Header>
            <div className='w-11/12 md:w-10/12 mx-auto flex justify-center items-center h-screen'>
                    <div className='text-center'>
                        <img src="https://i.ibb.co/hX618hz/oops-warning-sign-Gk8yz-Di-O-thumb.jpg" alt="Error Image" />
                        <h1 className='text-xl font-bold text-center'>Oppss! Something Went Wrong...</h1>
                        <Link to={'/'}>
                            <button className='px-4 py-2 text-white bg-amber-400 rounded-lg font-semibold my-8 hover:bg-cyan-600 flex items-center w-full text-center justify-center'>
                            <FaArrowLeft className='me-2'></FaArrowLeft>
                                Go Back HomePage
                            </button>
                            </Link>
                    </div>
            </div>
        </>
        </>
    );
};

export default ErrorPage;