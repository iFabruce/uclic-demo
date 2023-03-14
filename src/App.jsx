export default function App() {
  return (
    <div>
      <div class="bg-primary grid grid-cols-6 py-10  ">
        <div className="col-span-1 pl-20 ">  <h1 class="text-3xl">Uclic</h1> <br /></div>
        <div className="col-span-4 mt-2 pl-2 ">
          <ul class="flex flex-wrap items-center justify-center space-x-14 > *">
            <li><a href="" class="tracking-wider ">How it works ?</a></li>
            <li><a href="" class="tracking-wider ">Prices</a></li>
            <li><a href="" class="tracking-wider ">FAQ</a></li>
            <li><a href="" class="tracking-wider ">Blog</a></li>
            <li><a href="" class="tracking-wider ">Log in</a></li>
          </ul>
        </div>
        <div className="col-span-1 pr-20">
        <div class="btn py-2 bg-black text-white text-center tracking-wider font-semibold hover:bg-white text-white hover:text-black transtion ease-in duration-100"><a href="" >Start free trial</a><br /></div>
        </div>
      </div>
      <div class="bg-primary grid grid-cols-4 -mt-14">
        <div class=" col-span-2 p-20 ml-10">
          <h2 class="font-semibold text-4xl">Welcome back!</h2>
          <div class="mt-12 font-medium text-xl "><a href="#" class=" tracking-wide rounded-3xl border border-black  bg-white px-28 py-3 mt-2 "> <i class="fa-brands fa-google"></i> <span class="ml-2">Login with Google</span></a></div>
          <div>
          <h2 class="pb-2 font-semibold text-3xl text-center mt-10 border-b-2  border-black">Or</h2>
         
          <div class="mt-10 border-b-2 border-gray-300">
            <input type="email" placeholder="E-mail" class=" tracking-wide font-light text-xl py-2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
          </div>
          
          <div class="mt-5 border-b-2 border-gray-300">
            <input type="password" placeholder="Password" class="tracking-wide font-light text-xl py-2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
          </div>
           <div class="text-right mt-4"><a href="" class="text-blue-500  tracking-wide">Forgot password?</a></div>
          </div>

          <div class="btn bg-black mt-12 ml-2 py-3 hover:bg-white text-white hover:text-black transtion ease-in duration-100 ">
            <a href="#" class=" font-semibold text-xl  px-44  ">Log in</a>
          </div>
          <div class="mt-6 text-center tracking-wide text-lg">
            <span class="text-gray-400 font-regular "> Don't have an account? </span><a href="" class="font-semibold"> Sign up</a>
          </div>

        </div>
        <div class="bg-blue col-span-2">
          <div class="m-10 mt-36 hover:-translate-x-1 hover:-translate-y-1 transition ease-out duration-1000"> 
            <img class="border-2 border-black rounded-custom shadow-3xl" src={process.env.PUBLIC_URL+"pic.jpg"}/>
          </div>
        </div>
      </div>
    
      <div class="bg-black grid grid-cols-12 text-white rounded-t-custom px-16 py-14 space-x-28 > *">
        <div className="col-span-2">
          <h1 class="text-5xl">U<span class="font-bold">clic</span></h1> <br />
          <p>We offer top industry solutions for Sales reps, Marketers, Startups, Recruiters and anyone who relies on social outreach or outbound research.</p>
        </div>
        <div className="col-span-4">
          <h1 class="text-lg font-semibold tracker-wider">Navigation</h1><br />
          <ul class="space-y-4 > * tracking-wider">
            <li><a href=""><i class="fa-solid fa-arrow-right"></i> How does Uclic</a></li>
            <li><a href=""><i class="fa-solid fa-arrow-right"></i> Prices</a></li>
            <li><a href=""><i class="fa-solid fa-arrow-right"></i> FAQ</a></li>
            <li><a href=""><i class="fa-solid fa-arrow-right"></i> API Documentation</a></li>
            <li><a href=""><i class="fa-solid fa-arrow-right"></i> Template library</a></li>
            <li><a href=""><i class="fa-solid fa-arrow-right"></i> Affiliate program</a></li> <br />
            <div class="btn py-2 bg-yellow-200 text-black text-center"><a href="" >Log in</a><br /></div>
            <div class="btn py-2 bg-green-200 text-black text-center"><a href="" >Start free trial</a><br /></div>
            <div class="btn py-2 bg-white text-black text-center"><a href="" >Contact us</a><br /></div>
          </ul>
        </div>
        <div className="col-span-3">
        <h1 class="text-lg font-semibold tracker-wider">Blog</h1><br />
        <ul class="space-y-4 > * tracking-wider">
            <li><a href="">What is Phantombuster for LinkedIn ?</a></li>
            <li><a href="">What is Linked Helper 2 and how can it help you ?</a></li>
            <li><a href="">Use Prospectin for Linkedin with Uclic.co</a></li>
            <li><a href="">How to cold message someonoe on LinkedIn</a></li>
          </ul>
        </div>
        <div className="col-span-3">
        <h1 class="text-lg font-semibold tracker-wider">Our social media</h1><br />
          <div>
            <div class="space-x-10 > *">
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
            </div> <br />
              <p class="tracker-wider">Follow us to stay tuned about our latest features and releases !</p> <br />
            <h1 class="text-lg font-semibold tracker-wider">Support</h1><br />
            <a href="" class="tracker-wider"><i class="fa-solid fa-arrow-right"></i> Contact form</a>
          </div>
        </div>
      </div>
    </div>
  )
}