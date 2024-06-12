function App() {
  return (
    <>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"></img>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_1_170)">
                <path d="M21.6299 16V20C21.6299 20.5304 21.4192 21.0391 21.0441 21.4142C20.669 21.7893 20.1603 22 19.6299 22H5.62988C5.09945 22 4.59074 21.7893 4.21567 21.4142C3.8406 21.0391 3.62988 20.5304 3.62988 20V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.62988 11L12.6299 16L17.6299 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.6299 16V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <filter id="filter0_f_1_170" x="0.529883" y="0.9" width="24.2" height="24.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="1.05" result="effect1_foregroundBlur_1_170" />
                </filter>
              </defs>
            </svg>

          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="">
        <div className="w-[100%] text-white ">
          <h1 className='font-bold text-center text-[150px]'>gobinath s</h1>
          <div className="flex justify-center">
            <img className="" src="./logo192.png"></img>
          </div>
          <h1 className="font-bold text-center text-[60px]">Full stock developer</h1>
        </div>
        <div className=" flex flex-row justify-around text-white text-4xl">
          <h1 className="">Full stock developer</h1>
          <h1 className="">Chennai,Tamil Nadu</h1>
        </div>
        <div className="flex flex-row justify-around mt-4 mb-4">
          <button className="bg-white w-28 h-10 rounded-[67px]">Get in touch</button>
          <button className="bg-white w-28 h-10 rounded-[67px]">Learn more</button>
        </div>
        <div className="flex flex-row justify-center">
          <div className="text-white w-[50%] flex flex-col p-10">
            <p className="font-bold text-[60px]">Services<br /> That I Offer</p>
            <p className="text-4xl">Transforming visions into vibrant digital experiences with custom UI/UX design and responsive frontend development.</p>
          </div>
          <div className="w-[50%] h-[500px] flex flex-col justify-between p-10">
            <div className="w-[100%] h-[1px] bg-white"></div>
            <div className="flex justify-between"><p className="text-white">1/</p><h2 className="text-white text-6xl">Frontend<br />Developer</h2><div className="rounded-full bg-white w-20 h-20 flex justify-center item-center"><p className="text-[50px] font-bold">↗</p></div></div>
            <div className="w-[100%] h-[1px] bg-white"></div>
            <div className="flex justify-between"><p className="text-white">2/</p><h2 className="text-white text-6xl">Backend<br />Engineer</h2><div className="rounded-full bg-white w-20 h-20 flex justify-center item-center"><p className="text-[50px] font-bold">↗</p></div></div>
            <div className="w-[100%] h-[1px] bg-white"></div>
            <div className="flex justify-between"><p className="text-white">3/</p><h2 className="text-white text-6xl">DevOps<br />Engineer</h2><div className="rounded-full bg-white w-20 h-20 flex justify-center item-center"><p className="text-[50px] font-bold">↗</p></div></div>
            <div className="w-[100%] h-[1px] bg-white"></div>
          </div>
        </div>
        <div className="flex flex-row justify-center ">
          <div className="w-[30%] flex items-center justify-center"><img className="" src="./logo192.png"></img></div>
          <div className="w-[70%] text-white font-bold text-4xl text-right text-wrap"><p className="">"I thrive on building frontend wonders that scale smoothly, while sprinkling them with delightful user experiences!"</p></div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-[60px]">Latest Projects</h1>
          <img className=" rounded-[37px] mt-10" width={'80%'} src='img3.png'></img>

        </div>
        <div className=" h-[500px] flex flex-col justify-between p-10">
          <div className="w-[100%] h-[1px] bg-white"></div>
          <div className="flex justify-between"><p className="text-white">1/</p><h2 className="text-white text-6xl">MovieFlix - Online Movies<br />
            & TV Shows Application</h2><div className="rounded-full outline-white border-2 text-white w-20 h-20 flex justify-center item-center"><p className="text-[50px] font-bold">↘</p></div></div>
          <div className="w-[100%] h-[1px] bg-white"></div>
          <div className="flex justify-between"><p className="text-white">2/</p><h2 className="text-white text-6xl">HealthTracker -<br />
            Mobile App</h2><div className="rounded-full bg-white w-20 h-20 flex justify-center item-center"><p className="text-[50px] font-bold">↗</p></div></div>
          <div className="w-[100%] h-[1px] bg-white"></div>
          <div className="flex justify-between"><p className="text-white">3/</p><h2 className="text-white text-6xl">DevOps<br />Engineer</h2><div className="rounded-full bg-white w-20 h-20 flex justify-center item-center"><p className="text-[50px] font-bold">↗</p></div></div>
          <div className="w-[100%] h-[1px] bg-white"></div>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-white w-28 h-10 rounded-[67px]">Explore More</button>
          <h1 className="text-white font-bold text-[60px]">Testimonials</h1>
          <div className="w-[100%] h-[1px] bg-white"></div>
          <div><div className="flex justify-between"><p className="text-white">1/</p><h2 className="text-white text-4xl">"Working with Juan was an absolute pleasure! His creativity and attention to detail transformed our project into a visually stunning masterpiece. Juan's expertise in frontend development and UX design brought our vision to life, exceeding our expectations. Highly recommended for anyone seeking top-notch design and development services!"</h2></div>
            <div className="w-[100%] h-[1px] bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-[60px]">Get In Touch</h1>
          <form>
            <div> <label className="text-white">Full Name</label><input placeholder="Enter Your Name"></input>
              <label className="text-white">Mail</label>
              <input placeholder="Enter Mail"></input>
            </div>
            <div>
              <label className="text-white ">Message</label>
              <input placeholder="Don’t Be Shy, Write A Sweet Message And Send It Now"></input></div>
          </form>
        </div>
        <div className="w-[100%] h-[1px] bg-white"></div>
        <div>
          <div>
            <h1 className="text-white font-bold text-[130px]">Follow Me</h1>
            <p className="text-white text-4xl">Stay tuned for the latest design trends and development insights!</p>
          </div>
          <div></div>
        </div>
        <div className="w-[100%] h-[1px] bg-white"></div>
        <div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div></div>
      </div>

    </>


  );
}

export default App;
