import React from 'react';

const Contact = () => {
    return (
        <>
            <div className=" w-11/12 md:w-10/12 mx-auto my-5">
                <h2 className='text-center text-3xl font-bold'>Contact With Us</h2>
                <div className='h-96 my-5'>
                <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439724.1092628667!2d114.02019236263735!3d30.56781600101289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x342eaef8dd85f26f%3A0x39c2c9ac6c582210!2sWuhan%2C%20Hubei%2C%20China!5e0!3m2!1sen!2sbd!4v1683205641092!5m2!1sen!2sbd" ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;