// lib/config.ts
export const config = {
  // Feature flags
  useMockData: process.env.USE_MOCK_DATA === 'true',
  
  // API Configuration
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiBaseUrl: process.env.GITHUB_API_BASE_URL || 'https://api.github.com',
  
  // JIRA Configuration
  jiraBaseUrl: process.env.JIRA_BASE_URL,
  jiraApiToken: process.env.JIRA_API_TOKEN,
  jiraUsername: process.env.JIRA_USERNAME,
  
  // Application
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  nodeEnv: process.env.NODE_ENV || 'development',
  cacheTtl: parseInt(process.env.CACHE_TTL || '3600', 10),
  
  // Database
  databaseUrl: process.env.DATABASE_URL,
  
  // Derived flags
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}

export default config
