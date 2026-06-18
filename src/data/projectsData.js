export const projectsData = [
  {
    id: 1,
    title: 'Centralized Docker Monitoring System',
    github: 'https://github.com/pramodbaghel/central-monitoring-tool',
    tech: [
      'TypeScript',
      'Node.js',
      'Express',
      'Docker',
      'Prometheus',
      'Grafana',
      'Loki',
      'Alertmanager',
      'Slack API',
    ],
    description:
      'Built complete observability stack for Docker containers with metrics (cAdvisor + Node Exporter), logs (Loki + Promtail), and real-time Slack alerts. Configured alert rules for container down, high CPU (>70%), high memory (>0.5GB), high error rate (>10%), and high latency (P95 >500ms). Implemented load testing script. Reduced debugging time by 70% — all metrics, logs, and alerts in one Grafana dashboard.',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Network Anomaly Detector',
    github: 'https://github.com/pramodbaghel/ai-network-analyzer',
    tech: ['React', 'FastAPI', 'scikit-learn', 'Docker', 'PostgreSQL'],
    description:
      'Network traffic analysis with 94% anomaly detection accuracy using isolation forest. Fully containerized responsive dashboard with real-time charts (Chart.js). Deployed on cloud with CI/CD (GitHub Actions).',
    featured: true,
    live: true,
  },
  {
    id: 3,
    title: 'Weather App',
    github: null,
    tech: ['jQuery', 'AJAX', 'OpenWeatherMap API', 'HTML5/CSS3'],
    description:
      'Fetches live weather data asynchronously using jQuery AJAX. Fully responsive with error handling and loading states.',
    featured: false,
  },
];
