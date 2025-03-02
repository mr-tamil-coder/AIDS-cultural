import React from 'react';
import '../text.css'; // Make sure to import your font CSS file
import 'animate.css';

const CollegeName = () => {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-6 xl:p-6">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-0 bg-gradient-to-r from-[#fc00ff] to-[#00dbde] bg-clip-text text-transparent font-otherfont animate__animated animate__fadeInUp duration-500">
        JERUSALEM COLLEGE OF ENGINEERING
      </h1>
      <br />
      {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 bg-gradient-to-r from-[#66FCF1] to-[#C5C6C7] bg-clip-text text-transparent font-collegefont">
        Department Of Computer Science Engineering
      </h2> */}
      <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold bg-gradient-to-br from-[#fc03e3] to-[#a6033c] bg-clip-text text-transparent font-otherfont animate__animated animate__fadeInUp duration-500">
        PRESENTS
      </h2>
      {/* style={{ textShadow: '0 0 8px white' }} */}
      <br />
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-9xl font-extrabold bg-white bg-clip-text text-transparent font-aboutfont animate__animated animate__fadeInUp duration-500" style={{textShadow : "0 0 8px white"}}>
       EXCELSIOR 2025 <br /> {/*<p className='className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold bg-white bg-clip-text text-transparent font-otherfont'>2024-'25</p> */}
      </h1>
    </div>
  );
}

export default CollegeName;
