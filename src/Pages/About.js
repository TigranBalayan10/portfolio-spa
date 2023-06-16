import React from "react";

function About() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full md:w-1/2 p-4 bg-blue-900 rounded-3xl shadow-lg">
        <img
          src={require(`../assets/images/7.jpg`)}
          alt="Tigran Balayan"
          className="rounded-full w-40 h-40 p-5"
        />
        <h1 className="text-3xl font-bold text-white p-5">About Me</h1>
        <div className="text-white p-5">
          <p>
            Welcome to my website! I'm Tigran Balayan, a passionate and
            dedicated Junior Full Stack Web Developer with a zest for creating
            innovative and user-friendly web applications. At 39 years old, I
            bring a unique blend of professional experience and a well-rounded
            perspective to my work. I am not only committed to honing my
            programming skills but also have the important role of being a
            parent to three amazing children, who constantly inspire me to push
            my boundaries and achieve new heights.
          </p>
          <br></br>
          <p>
            With a strong foundation in front-end and back-end development, I
            excel at crafting visually appealing and responsive user interfaces
            using HTML, CSS, and JavaScript. I take pride in my attention to
            detail and strive to deliver high-quality websites that leave a
            lasting impression on users.
          </p>
          <br></br>
          <p>
            On the back-end, I possess a solid understanding of server-side
            programming languages such as JavaScript. Leveraging frameworks like
            Node.js, I efficiently build robust and scalable web applications.
            My expertise in database management and querying enables me to
            optimize data storage and retrieval, enhancing the overall
            performance of the applications I develop.
          </p>
          <br></br>
          <p>
            Despite being a junior developer, I have a growth mindset and
            actively seek opportunities to expand my knowledge. By engaging in
            personal projects and staying connected with the web development
            community, I stay up to date with the latest industry trends and
            technologies.
          </p>
          <br></br>
          <p>
            Outside of my professional pursuits, my greatest joy comes from
            being a parent. Balancing the demands of work and family life has
            taught me invaluable skills in time management, organization, and
            perseverance. My children are a constant reminder of the importance
            of hard work and the rewards that come with it.
          </p>
          <br></br>
          <p>
            Thank you for visiting my website. I invite you to explore my
            portfolio and see firsthand the projects I've worked on. If you're
            looking for a dedicated and passionate web developer who can bring
            creativity and functionality to your team, I would be thrilled to
            connect with you. Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
