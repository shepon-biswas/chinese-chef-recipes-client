import React from "react";

const Cuisines = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 my-10 mx-auto">
        {/*  */}
        <div>
            <h2 className="text-3xl font-bold text-center mb-4">Explore Some of The <span className="text-amber-400"> Most Popular Chinese Cuisines!</span></h2>
            <p className="text-center w-2/3 mx-auto mb-10">With a long history, unique features, numerous styles, and exquisite cooking, Chinese cuisine is one of the important constituent parts of Chinese culture. Chinese traditional dishes are famous for their color, aroma, taste, meanings, and appearance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/mb6tQyJ/d247e7d25b164b77841f6022-cut-750x400-39.webp"
                alt="Peking Roasted Duck!"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Peking Roasted Duck!</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/T1zZXFC/31acb7b302ec4b48b17443ed-cut-750x400-39.webp"
                alt="Kung Pao Chicken"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Kung Pao Chicken</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/ZNb5KzN/a4ad4a7fe0cb401cb0be6383-cut-750x400-39.webp"
                alt="Sweet and Sour Pork"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Sweet and Sour Pork!</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/Mcqmhxy/482fb1f829ce4e6496b94fea-cut-750x400-39.webp"
                alt="Hot Pot"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Hot Pot!</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/zP4RF4f/16d96371fd2944be86ffbdc1-cut-750x400-39.webp"
                alt="Dim Sum"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Dim Sum!</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/MPj8nDq/9b7159f6d89449d997eaa5ab-cut-750x400-39.webp"
                alt="Dumplings"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Dumplings!</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/Tm2Bk5t/62745d5a726045e4a99a3885-cut-750x400-39.webp"
                alt="Ma Po Tofu"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Ma Po Tofu!</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/0s4806x/a57fdce570494d41b624119d-cut-750x400-39.webp"
                alt="Char Siu"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Char Siu!</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-md image-full">
            <figure>
              <img
                src="https://i.ibb.co/mtdJJMD/10725167158a4b8589bf3140-cut-750x400-39.webp"
                alt="Chow Mein"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-4 left-[30%]">Chow Mein!</h2>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Cuisines;
