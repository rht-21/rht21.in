const Description = ({ text }: { text: string[] }) => {
  return (
    <main className="border-b">
      <div className="border-vertical align-center flex items-center">
        {text.map((item, index) => (
          <p
            key={index}
            className="p-4 text-lg text-neutral-700 dark:text-neutral-300"
          >
            {item}
          </p>
        ))}
      </div>
    </main>
  );
};

export default Description;
