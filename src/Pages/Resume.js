import React from "react";

function Resume() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full md:w-1/2 p-4 bg-blue-900 rounded-3xl shadow-lg">
        <div className="content w-full p-12 text-white">
          <div>
            <h2 className="text-3xl font-bold mb-2">Profile</h2>
            <p>
              I'm a self-taught and also graduated from UCLA Bootcamp web
              developer focusing on the core web fundamentals - HTML, CSS and
              JS. I'm experienced in graphic design field from my other
              specialties which helps me to design websites with the help of
              Adobe AI and Photoshot. I write SCSS or use CSS frameworks like
              TailwindCSS, Bootstrap or Bulma to speed up styling of my
              projects.
            </p>
            <p>
              I am highly motivated in expanding my horizons day by day for
              better performance, testing and user experience.
            </p>
          </div>
          <hr className="mt-8 mb-12" />
          <div>
            <h2 className="text-2xl font-bold">Development skills</h2>
            <div className="mb-16">
              <section className="mb-6"></section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Front-end:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <ul className="list-disc list-inside">
                    <li className="mb-2">
                      <span className="font-bold">HTML</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">CSS</span>
                    </li>
                    </li>
                      <span className="font-bold">React</span>
                    <li className="mb-2">
                    <li className="mb-2">
                    </li>
                      <span className="font-bold">Next.js</span>
                    <li className="mb-2">
                      <span className="font-bold">TailwindCSS</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">Bootstrap</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">Bulma</span>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Back-end:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <ul className="list-disc list-inside">
                    <li className="mb-2">
                      <span className="font-bold">Javascript</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">TypeScript</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">SQL</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">Express</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">Node.js</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">MongoDB</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <hr className="mt-8 mb-12" />
          <div>
            <h2 className="text-2xl font-bold">Expand my skills</h2>
            <div className="mb-16">
              <h4 className="mb-3">
                I'd like to expand my skills and knowledge in several fields
              </h4>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <span className="font-bold">TypeScript</span>
                </li>
                <li className="mb-2">
                  <span className="font-bold">
                    Testing, e.g. with Mocha, Chai, Jest
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-bold">
                    Web Components, e.g. with StencilJS, LitElement
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-bold">
                    Prototyping and Wireframing, e.g. with Figma, Adobe XD
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-bold">Scalable Vector Graphics</span>
                </li>
                <li className="mb-2">
                  <span className="font-bold">Mobile development</span>
                </li>
                <li className="mb-2">
                  <span className="font-bold">
                    {" "}
                    Backend development, e.g. learn additional language like Go,
                    Python, PHP, Ruby, Java, Rust
                  </span>
                </li>
              </ul>
              <div className="mt-5">
                <h2 className="flex justify-center">Download full Resume</h2>
              </div>
              <div className="flex justify-center mt-3">
                <a
                  href="https://drive.google.com/file/d/1MYlpoGXO7pj_fXak_mFGTFsfRl3_Cwn9/view?usp=drive_link"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
