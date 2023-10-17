/* eslint-disable no-octal-escape */
import "./App.css";
import rocketdab from "./img/rocketdab.png";

function App() {
  return (
    <div className="min-h-screen  bg-slate-50 dark:bg-black dark:text-white ">
      <header className="bg-teal-700 top-0 left-0 z-10 text-white sticky">
        <section className=" p-4 max-w-4xl flex mx-auto justify-between">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button
              className="text-3xl focus:outline-none sm:hidden"
              id="mobile-open-button"
            >
              &#9776;
            </button>
            <nav className="text-xl hidden sm:block space-x-8">
              <a href="#rockets" className="hover:opacity-70 ">
                Our Rockets
              </a>

              <a href="#rockets" className="hover:opacity-70 ">
                Testimonials
              </a>

              <a href="#rockets" className="hover:opacity-70 ">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center min-h-[80vh] sm:flex-row p-6 items-center gap-8 mb-12"
        >
          <article className="sm:w-1/2 ">
            <h2 className="max-w-md text-4xl font-bold sm:text-5xl text-slate-900 dark:text-white capitalize">
              we boldly go{" "}
              <span className="text-indigo-700 dark:text-indigo-300">
                where no rocket{" "}
              </span>
              has gone before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We're building rockets for the next century today. From the moon
              to Mars, Jupiter and beyond...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 capitalize">
              think acme rockets.
            </p>
          </article>
          <img src={rocketdab} alt="" />
        </section>

        <hr className="w-1/2 mx-auto bg-black dark:bg-white" />

        <section id="rockets" className="p-6 my-12">
          <h2 className="text-4xl font-bold text-center sm:text-5xl dark:text-white pb-5">
            Our Rockets
          </h2>
          <ul className="flex items-center flex-col gap-9 sm:flex-row py-5">
            <li className="border dark:border-slate-300 border-black rounded-3xl sm:w-1/3 w-5/6 text-center p-5">
              <img
                src={require("./img/rocketman.png")}
                alt=""
                className="w-3/5 mx-auto mb-5"
              />

              <p className="text-3xl">Explorer</p>
              <p className="text-3xl text-slate-400 hidden sm:block">$</p>
              <p className="sm:hidden capitalize text-2xl text-slate-500">
                affordable exploration
              </p>
            </li>
            <li className="border dark:border-slate-300 border-black rounded-3xl sm:w-1/3 w-5/6 text-center p-5">
              <img
                src={require("./img/rocketman.png")}
                alt=""
                className="w-3/5 mx-auto mb-5"
              />
              <p className="text-3xl">Explorer</p>
              <p className="text-3xl text-slate-400">$</p>
            </li>
            <li className="border dark:border-slate-300 border-black rounded-3xl sm:w-1/3 w-5/6 text-center p-5">
              <img
                src={require("./img/rocketman.png")}
                alt=""
                className="w-3/5 mx-auto mb-5"
              />
              <p className="text-3xl">Explorer</p>
              <p className="text-3xl text-slate-400">$</p>
            </li>
          </ul>
        </section>
        <hr className="w-1/2 mx-auto bg-black dark:bg-white" />

        <section id="rockets" className="p-6 my-12">
          <h2 className="text-4xl font-bold text-center sm:text-5xl dark:text-white">
            Testimonials
          </h2>

          <figure className="my-12 relative">
            <blockquote className="px-4 py-6">
              <p className="text-slate-600 text-3xl  before:content-['\201c'] before:absolute before:top-0 before:text-6xl ">
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption>--wile E. Coyote, Genius</figcaption>
          </figure>
        </section>
        <hr className="w-1/2 mx-auto bg-black dark:bg-white" />

        <section id="rockets" className="p-6 my-12">
          <h2 className="text-4xl font-bold text-center sm:text-5xl dark:text-white">
            Our Rockets
          </h2>
        </section>
      </main>
      <footer className="max-w-4xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 lg:grid-rows-none grid-rows-2 items-start">
        <address className="bg-red-300 ">
          <p>
            Acme Rocket-Powered Products, Inc. <br /> 555 Astro Way <br />{" "}
            Fairfield, New Jersey 12345-5555 <br /> Email:
            Inquires@AcmeRockets.com <br /> Phone: (555) 555-5555
          </p>
        </address>
        <nav className="bg-red-300 lg:col-auto  lg:row-start-auto col-span-full row-start-2 lg:col-start-3">
          <ul className="flex justify-between ">
            <li>rockets</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <p className="bg-red-300 self-stretch lg:col-start-2 lg:row-start-1">
          Copyright © 2022 All Rights Reserved
        </p>
        {/* <p>john</p> */}
      </footer>
    </div>
  );
}

export default App;
