import React from "react";

const quotes = [
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
];

const Hero = () => {
  const { quote, author } = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <main className="border-b">
      <section className="align-center border-vertical relative flex h-40 max-w-2xl flex-col items-center justify-center gap-2 overflow-hidden border-dashed bg-[url('/light-bg.svg')] bg-cover bg-center bg-no-repeat p-4 md:h-72 dark:bg-[url('/dark-bg.svg')]">
        <h3 className="font-mono text-xl text-center text-balance">{quote}</h3>
        <p className="font-sans">
          By <span className="font-medium">{author}</span>
        </p>
      </section>
    </main>
  );
};

export default Hero;
