type AppElement = {
  name: string;
  endpoints: {
    id: string;
    url: string;
    status: "up" | "down";
    responseTime: number;
    lastChecked: string;
  }[];
};

const AppElement: React.FC<{ appData: AppElement }> = ({ appData }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold">{appData.name}</h2>
      <ul className="mt-4 space-y-2">
        {appData.endpoints.map((endpoint) => (
          <li key={endpoint.id} className="flex items-center">
            <span
              className={`w-2 h-2 rounded-full ${
                endpoint.status === "up" ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <a
              href={endpoint.url}
              className="ml-2 text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {endpoint.url}
            </a>
            <span className="ml-2 text-gray-500">
              Response Time: {endpoint.responseTime}ms
            </span>
            <span className="ml-2 text-gray-500">
              Last Checked: {endpoint.lastChecked}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppElement;
