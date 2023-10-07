import "./App.css";
import rocketdab from "./img/rocketdab.png";

function App() {
  return (
    <div className="min-h-screen  bg-slate-50 dark:bg-black dark:text-white ">
      <header className="bg-teal-700 top-0 left-0 z-10 text-white sticky">
        <section className=" p-4 max-w-4xl  flex mx-auto justify-between">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rocket</a>
          </h1>
          <div>
            <button
              className="text-3xl sm: focus:outline-none sm:hidden"
              id="mobile-open-button"
            >
              &#9776;
            </button>
            <nav className="text-xl hidden sm:block space-x-8">
              <a href="#rockets" className="hover:opacity-70 ">
                our Rockets
              </a>

              <a href="#rockets" className="hover:opacity-70 ">
                Testimonials
              </a>

              <a href="#rockets" className="hover:opacity-70 ">
                contact us
              </a>
            </nav>
          </div>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
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
      </main>
    </div>
  );
}

export default App;
