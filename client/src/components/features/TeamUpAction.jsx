function TeamUpAction() {
  return (
    <div className="bg-gray-50 p-1 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10">
        See TeamUp in Action
      </h1>
      <p className="text-md text-gray-500 text-center mt-2">
        Experience the power of real-time-collaboration
      </p>

      <div className="mt-5 mb-10 max-w-4xl mx-auto p-6 rounded-lg shadow hover:shadow-md transition flex">
        <div>
          <img src="/assets/codeSnippet.png" alt="" />
        </div>
        <div>
          <img src="/assets/chat.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TeamUpAction;
