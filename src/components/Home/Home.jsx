import React from 'react';

const LandingPage = () => {
  return (
    <>
      <div className="landing-page bg-gray-100 min-h-screen flex flex-col justify-between p-4">
      
        <section className="course-details bg-white py-10 p-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="course-description md:w-1/2 md:pr-10">
              <h2 className="text-4xl font-bold mb-4">Accurate Classes</h2>
              <p className="mb-4 text-xl text-purple-700 font-bold">"Empowering Minds, Igniting Futures: Your Journey Starts Here"</p>
            </div>
            <div className="enroll-section md:w-1/2 md:pl-10">
              <h2 className="text-2xl font-bold mb-4">Enroll Now!</h2>
              <p className="mb-4">Join today and start your journey towards mastery!</p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>
          <div className="landing-page bg-gray-100 p-8 mt-8">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold">Welcome to Full Stack Technology Course</h1>
              <p className='text-xl mt-8'>Unlock your potential with our comprehensive course covering MERN Stack and more</p>
            </header>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="course-description md:w-1/2 md:pr-8 mt-8">
                <h2 className="text-3xl font-bold mb-4">About the Course</h2>
                <div className="mb-4">
                  <img className="w-full md:w-auto mb-4 md:mb-0" src="h12.png" alt="" />
                  <h3 className="text-lg font-semibold mb-2">Technologies Covered:</h3>
                  <ul className="list-disc pl-6">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>Cloud Deployment with Vercel</li>
                    <li>Networking</li>
                    <li>SQL</li>
                    <li>Git</li>
                    <li>GitHub</li>
                  </ul>
                </div>
                <p className="mb-4">It includes live classes, hands-on doubt clearing sessions, live coding with projects, weekend 3-hour doubt classes, mentorship, and guidance.</p>
              </div>
              <div className="enroll-section md:w-1/2 md:pl-8">
                <h2 className="text-xl font-bold mb-4">Enroll Now!</h2>
                <p className="mb-4">Sign up today to kickstart your journey into Full Stack Development!</p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Enroll Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials mt-8">
          <h2 className="text-xl font-bold mb-4">What Our recent Students Say</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="testimonial bg-white p-4 rounded shadow-md mb-4 md:mr-4">
              <p className="text-lg">"The course content is excellent! I gained a solid understanding of Full Stack development and secured a job within weeks of completing it."</p>
              <p className="text-gray-600 mt-2">- Akhil Sharma</p>
            </div>
            <div className="testimonial bg-white p-4 rounded shadow-md mb-4 md:ml-4">
              <p className="text-lg">"I highly recommend this course to anyone looking to become a proficient Full Stack developer. The live classes and mentorship were invaluable."</p>
              <p className="text-gray-600 mt-2">- Akansha Negi</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
