import React from 'react';

const RecipesPDF = () => {
    const pdfDonwload = () => {
        // using Java Script method to get PDF file
        fetch('recipes.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Seasonal Recipes Minh author Minh.pdf';
                alink.click();
            })
        })
    }

    return (
        <>
        <div className='w-11/12 md:w-10/12 mx-auto my-10'>
            <div className='flex flex-col md:flex-row justify-between items-center bg-amber-400 text-white py-10 px-3 rounded-lg '>
                <h2 className='font-bold text-2xl text-center md:text-start mb-3 md:mb-0'>Get a free ebook of seasoanl chinese cuisines recipes for free!</h2>
                <button onClick={pdfDonwload} className='bg-black px-4 py-3'>Donwload PDF</button>
            </div>

        </div>
            
        </>
    );
};

export default RecipesPDF;