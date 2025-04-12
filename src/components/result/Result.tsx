export const Result = () => {
  return (
    <section
      className="result bg-light-slate-blue hover:opacity-85 py-6 px-8 text-center text-white flex flex-col gap-2 items-center
    rounded-b-4xl
    "
    >
      {" "}
      <h1 className="text-1xl font-extrabold">Your Result</h1>
      <div
        className="bg-linear-to-b from-circle-violet-blue to-light-slate-blue rounded-full w-[150px] h-[150px]
      flex justify-center items-center flex-col gap-2"
      >
        <p className="text-5xl font-extrabold">76</p>
        <p>of 100</p>
      </div>
      <h2 className="font-black mt-1.5">Great</h2>
      <p className="font-medium text-sm w-[90%]">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};
