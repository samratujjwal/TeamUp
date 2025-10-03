function ChooseTeamUp() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mt-10">
          Why Choose TeamUp?
        </h1>
        <p className="text-gray-500 text-md text-center mt-3">
          See how we stack up against competition
        </p>
      </div>
      <div className="overflow-x-auto max-w-5xl mx-auto mt-10 mb-10 p-2 border rounded border-gray-600 hover:shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr className="">
              <th className="px-4 py-3 text-left text-md font-bold text-gray-700">
                Features
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-blue-600">
                TeamUp
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-700">
                Google Docs
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-700">
                Notion
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-700">
                Slack
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="">
              <td className="px-4 py-3 text-sm ont-bold ">
                Real-time Code Editing
              </td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
              <td className="px-4 py-3 text-md text-red-600">✘</td>
              <td className="px-4 py-3 text-md text-red-600">✘</td>
              <td className="px-4 py-3 text-md text-red-600">✘</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 text-sm ont-bold ">
                Integrated Video Chat
              </td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
              <td className="px-4 py-3 text-md text-red-600">✘</td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-md ont-bold ">
                Workflow Automation
              </td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
              <td className="px-4 py-3 text-md text-red-600">✘</td>
              <td className="px-4 py-3 text-md text-yellow-600">Limited</td>
              <td className="px-4 py-3 text-md text-yellow-600">Limited</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-3 text-md ont-bold ">Live Analytics</td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
              <td className="px-4 py-3 text-md text-red-600">✘</td>
              <td className="px-4 py-3 text-md text-red-600">✘</td>
              <td className="px-4 py-3 text-md text-yellow-600">Basic</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-md ont-bold ">Task Management</td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
              <td className="px-4 py-3 text-md text-yellow-600">Basic</td>
              <td className="px-4 py-3 text-md text-green-600">✔</td>
              <td className="px-4 py-3 text-md text-yellow-600">Limited</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChooseTeamUp;
