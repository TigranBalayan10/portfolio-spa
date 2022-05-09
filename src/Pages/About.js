import React from "react";

function About() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full md:w-1/2 p-4 bg-blue-900 rounded-3xl shadow-lg">
        <img src={require(`../assets/images/7.jpg`)} alt="Tigran Balayan" className="rounded-full w-40 h-40 p-5" />
        <h1 className="text-3xl font-bold text-white p-5">About Me</h1>
        <div className="text-white p-5">
          <p>
            My name is Tigran Balayan. I’m 37 years old. I’m in the US 7 years
            from Armenia. At 37 I decided to pursuit new career in
            web-developing. Currently I’m attending UCLA Boot Camp. After
            the course I hope to get my certificate and continue to pursuit
            coding career.
          </p>
          <br></br>
          <p>
            I’m married have 3 children two girls and a boy. Parallel to
            studying I have small business, which I manage and own. It’s a
            transportation and limo company. Before this business I was graphic
            designer for multiple print-shops both in Armenia and in the US. I
            was mostly involved in pre-press operation in offset printing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
