function Collab() {
  const features = [
    {
      title: "Live Code Editor",
      description:
        "Real-time collaborative coding with syntax highlighting and intelligent autocomplete.",
      icon: "</>",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Video Chat",
      description:
        "Seamless video calls with screen sharing and team presence indicators.",
      icon: "🎥",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      title: "Task Workflow",
      description:
        "Organize and track project progress with intuitive kanban boards and tasks management.",
      icon: "✅",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Analytics",
      description:
        "Integrated Git support for branching, commits, and code history.",
      icon: "🗂️",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];
  return (
    <div className="mx-30 mt-10 mb-20">
      <h1 className="text-3xl font-bold text-center">
        Everything You Need to Collaborate
      </h1>
      <p className="mt-4  text-center text-xl text-gray-600">
        Poweful features designed for modern teams
      </p>
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl  transition-all duration-300 ease-in-out w-full border border-gray-300"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 ${feature.bgColor} rounded-full mb-4 `}
            >
              <span className={`${feature.iconColor} text-xl font-bold`}>
                {feature.icon}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collab;
