export const fakeData = [
  {
    id: "app1",
    name: "WeatherApp",
    endpoints: [
      {
        id: "endpoint1",
        url: "https://weatherapp.com/api/v1/weather",
        status: "up",
        responseTime: 120,
        lastChecked: "2024-04-05T12:00:00Z",
      },
      {
        id: "endpoint2",
        url: "https://weatherapp.com/api/v1/forecast",
        status: "down",
        responseTime: 0,
        lastChecked: "2024-04-05T12:05:00Z",
      },
    ],
  },
  {
    id: "app2",
    name: "FinanceTracker",
    endpoints: [
      {
        id: "endpoint3",
        url: "https://financetracker.com/api/balance",
        status: "up",
        responseTime: 80,
        lastChecked: "2024-04-05T12:10:00Z",
      },
      {
        id: "endpoint4",
        url: "https://financetracker.com/api/transactions",
        status: "up",
        responseTime: 95,
        lastChecked: "2024-04-05T12:15:00Z",
      },
    ],
  },
  {
    id: "app3",
    name: "SocialNetwork",
    endpoints: [
      {
        id: "endpoint5",
        url: "https://socialnetwork.com/api/v1/posts",
        status: "down",
        responseTime: 0,
        lastChecked: "2024-04-05T12:20:00Z",
      },
      {
        id: "endpoint6",
        url: "https://socialnetwork.com/api/v1/friends",
        status: "up",
        responseTime: 150,
        lastChecked: "2024-04-05T12:25:00Z",
      },
    ],
  },
  {
    id: "app4",
    name: "EduPlatform",
    endpoints: [
      {
        id: "endpoint7",
        url: "https://eduplatform.com/api/courses",
        status: "up",
        responseTime: 200,
        lastChecked: "2024-04-05T12:30:00Z",
      },
      {
        id: "endpoint8",
        url: "https://eduplatform.com/api/enroll",
        status: "up",
        responseTime: 190,
        lastChecked: "2024-04-05T12:35:00Z",
      },
    ],
  },
  {
    id: "app5",
    name: "TravelAdvisor",
    endpoints: [
      {
        id: "endpoint9",
        url: "https://traveladvisor.com/api/destinations",
        status: "up",
        responseTime: 250,
        lastChecked: "2024-04-05T12:40:00Z",
      },
      {
        id: "endpoint10",
        url: "https://traveladvisor.com/api/bookings",
        status: "down",
        responseTime: 0,
        lastChecked: "2024-04-05T12:45:00Z",
      },
    ],
  },
];
