function JoinTeam() {
  return (
    <div className="py-10" style={{ backgroundColor: "#246aea" }}>
      <div className=" mx-30 mb-10">
        <h1 className=" text-center text-4xl font-bold text-white">
          Ready to Transform Your Team's Collaboration ?
        </h1>
        <p className="mt-5 mb-8 text-center text-xl text-white">
          Join thousands of teams already using TeamUp to work smarter together.
        </p>
        <div className="flex justify-center space-x-4 p-2">
          <button className="px-2 py-2 bg-white text-blue-500 font-semibold rounded border border-white hover:bg-blue-600 hover:text-white">
            Join Your Team Today
          </button>
          <button className="px-2 py-2 bg-blue-500 text-white font-semibold rounded border border-white hover:text-blue-600 hover:bg-white">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinTeam;
