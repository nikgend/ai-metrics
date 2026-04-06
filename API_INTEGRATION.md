# API Integration Guide

## GitHub Copilot API Integration

### Overview
GitHub Copilot metrics are available through the GitHub API. This guide shows how to integrate real GitHub Copilot data.

### Setting Up GitHub Access

#### 1. Create Personal Access Token
```
Settings > Developer settings > Personal access tokens > Generate new token
Required scopes:
- read:org (to read organization data)
```

#### 2. Get GitHub User/Organization

```bash
# Get authenticated user
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/user

# Get organization
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/orgs/YOUR_ORG
```

### Implementing Real Data Integration

#### Update GitHub Copilot Service

```typescript
// services/githubCopilotService.ts
import { Octokit } = require("@octokit/rest");

export class GitHubCopilotService extends BaseService {
  private octokit: Octokit;

  constructor() {
    super();
    this.octokit = new Octokit({
      auth: process.env.GITHUB_API_TOKEN
    });
  }

  async getRepositoryMetrics(owner: string, repo: string) {
    try {
      // Fetch repository statistics
      const stats = await this.octokit.repos.getCodeFrequencyStats({
        owner,
        repo,
      });

      // Fetch commits
      const commits = await this.octokit.repos.listCommits({
        owner,
        repo,
        per_page: 100,
      });

      // Process and return metrics
      return this.processStats(stats, commits);
    } catch (error) {
      console.error('GitHub API Error:', error);
      throw error;
    }
  }

  private processStats(stats: any, commits: any) {
    // Process raw GitHub data into metrics
    return {
      repository: `${owner}/${repo}`,
      acceptanceRate: this.calculateAcceptanceRate(commits),
      suggestionsPerDay: this.calculateSuggestionsPerDay(commits),
      // ... more calculations
    };
  }
}
```

### Useful GitHub API Endpoints

| Endpoint | Purpose |
|----------|---------|
| `GET /user` | Get authenticated user |
| `GET /orgs/{org}` | Get organization info |
| `GET /repos/{owner}/{repo}/stats/code_frequency` | Repository activity |
| `GET /repos/{owner}/{repo}/commits` | List commits |
| `GET /repos/{owner}/{repo}/contributors` | List contributors |
| `GET /users/{username}` | Get user profile |

### Rate Limiting

GitHub API: 60 requests/hour (unauthenticated), 5000/hour (authenticated)

```typescript
// Check rate limit
const rateLimit = await octokit.rateLimit.get();
console.log(rateLimit.data.rate);
```

---

## JIRA API Integration

### Overview
JIRA REST API v3 provides comprehensive project management data integration.

### Setting Up JIRA Access

#### 1. Create API Token
```
Account Settings > Security > API Tokens > Create API Token
```

#### 2. Base URL Requirements
- Cloud: `https://your-domain.atlassian.net`
- Server/Data Center: `https://your-jira-server.com`

#### 3. Authentication
Uses Basic Auth (email:apitoken)

```bash
curl -u email@example.com:YOUR_API_TOKEN \
  https://your-domain.atlassian.net/rest/api/3/
```

### Implementing Real Data Integration

#### Update JIRA Service

```typescript
// services/jiraService.ts
export class JiraService extends BaseService {
  private jiraApi: AxiosInstance;

  constructor() {
    const token = Buffer.from(
      `${process.env.JIRA_USERNAME}:${process.env.JIRA_API_TOKEN}`
    ).toString('base64');

    this.jiraApi = axios.create({
      baseURL: process.env.JIRA_BASE_URL,
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async getProjectMetrics(projectKey: string) {
    try {
      // Get project
      const project = await this.jiraApi.get(
        `/rest/api/3/project/${projectKey}`
      );

      // Get issues
      const issues = await this.jiraApi.get(
        `/rest/api/3/search?jql=project=${projectKey}&maxResults=100`
      );

      // Get issue statistics
      const stats = this.processIssues(issues.data.issues);

      return {
        projectId: project.data.id,
        projectKey: project.data.key,
        projectName: project.data.name,
        description: project.data.description,
        leadName: project.data.lead?.displayName,
        issuesCount: issues.data.total,
        resolvedIssuesCount: stats.resolved,
        averageResolutionTime: stats.avgTime,
      };
    } catch (error) {
      console.error('JIRA API Error:', error);
      throw error;
    }
  }

  private processIssues(issues: any[]) {
    let resolved = 0;
    let totalTime = 0;

    issues.forEach((issue) => {
      if (issue.fields.status.name === 'Done') {
        resolved++;
        
        // Calculate resolution time
        if (issue.fields.created && issue.fields.updated) {
          const created = new Date(issue.fields.created);
          const updated = new Date(issue.fields.updated);
          const days = (updated.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
          totalTime += days;
        }
      }
    });

    return {
      resolved,
      avgTime: resolved > 0 ? totalTime / resolved : 0,
    };
  }

  async getTeamMetrics(projectKey: string, teamName?: string) {
    const jql = teamName 
      ? `project=${projectKey} AND assignee in membersOf("${teamName}")`
      : `project=${projectKey}`;

    const response = await this.jiraApi.get(
      `/rest/api/3/search?jql=${encodeURIComponent(jql)}&maxResults=100`
    );

    const issues = response.data.issues;
    
    return {
      totalIssues: issues.length,
      openIssues: issues.filter((i: any) => i.fields.status.name !== 'Done').length,
      closedIssues: issues.filter((i: any) => i.fields.status.name === 'Done').length,
      averageTimeToResolution: this.calculateAvgTime(issues),
      qualityScore: this.calculateQualityScore(issues),
    };
  }

  async getSprintMetrics(projectKey: string, boardId: string) {
    // Get board sprints
    const board = await this.jiraApi.get(
      `/rest/api/3/board/${boardId}/sprints`
    );

    const activeSprint = board.data.values.find(
      (s: any) => s.state === 'active'
    );

    if (!activeSprint) {
      throw new Error('No active sprint found');
    }

    // Get sprint issues
    const issues = await this.jiraApi.get(
      `/rest/api/3/search?jql=sprint=${activeSprint.id}&maxResults=100`
    );

    return {
      sprintId: activeSprint.id,
      sprintName: activeSprint.name,
      completedPoints: this.calculatePoints(
        issues.data.issues.filter((i: any) => i.fields.status.name === 'Done')
      ),
      plannedPoints: this.calculatePoints(issues.data.issues),
      completionRate: this.calculateCompletionRate(issues.data.issues),
    };
  }

  private calculatePoints(issues: any[]): number {
    return issues.reduce((sum, issue) => {
      return sum + (issue.fields.customfield_10000 || 0); // Story points field
    }, 0);
  }

  private calculateCompletionRate(issues: any[]): number {
    const completed = issues.filter((i) => i.fields.status.name === 'Done').length;
    return (completed / issues.length) * 100;
  }

  private calculateAvgTime(issues: any[]): number {
    let totalTime = 0;
    let count = 0;

    issues.forEach((issue) => {
      if (issue.fields.created && issue.fields.updated) {
        const created = new Date(issue.fields.created);
        const updated = new Date(issue.fields.updated);
        const days = (updated.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
        totalTime += days;
        count++;
      }
    });

    return count > 0 ? totalTime / count : 0;
  }

  private calculateQualityScore(issues: any[]): number {
    const bugCount = issues.filter(
      (i) => i.fields.issuetype.name === 'Bug'
    ).length;
    const totalCount = issues.length;
    
    // Quality score based on bug ratio (0-10)
    return Math.max(0, 10 - (bugCount / totalCount) * 10);
  }
}
```

### Useful JIRA API Endpoints

| Endpoint | Purpose |
|----------|---------|
| `GET /rest/api/3/project` | List projects |
| `GET /rest/api/3/project/{projectKey}` | Get project details |
| `GET /rest/api/3/search?jql=...` | Search issues with JQL |
| `GET /rest/api/3/board` | List boards |
| `GET /rest/api/3/board/{boardId}/sprints` | List sprints |
| `GET /rest/api/3/sprint/{sprintId}` | Get sprint details |
| `GET /rest/api/3/user/search?query=...` | Search users |

### JQL (Jira Query Language) Examples

```jql
// Issues by team
assignee in membersOf("Backend Team") AND status != Done

// Issues by project and date range
project = PROJ AND created >= -30d

// High priority bugs
type = Bug AND priority = High

// Unresolved issues
status in (Open, "In Progress")

// Issues with story points
component = "Core" AND labels = "urgent" AND story_point_estimate > 0
```

### Rate Limiting

JIRA Cloud: 
- 2000 requests in 10 minutes (simple endpoint)
- 1200 requests in 10 minutes (complex endpoint)

```typescript
// Check rate limit from response headers
const remaining = response.headers['x-ratelimit-remaining'];
const limit = response.headers['x-ratelimit-limit'];
```

---

## Data Caching Strategy

```typescript
// services/cacheService.ts
class CacheService {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private TTL = 3600000; // 1 hour

  set(key: string, data: any) {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.TTL) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }
}

// Usage in API routes
const cachedData = cacheService.get(cacheKey);
if (cachedData) return cachedData;

const freshData = await fetchFromAPI();
cacheService.set(cacheKey, freshData);
```

---

## Error Handling

```typescript
// services/errorHandler.ts
class APIError extends Error {
  constructor(
    public statusCode: number,
    public service: string,
    message: string
  ) {
    super(`[${service}] ${message}`);
  }
}

// In API routes
try {
  const data = await service.fetchData();
  return NextResponse.json({ success: true, data });
} catch (error) {
  if (error instanceof APIError) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.statusCode }
    );
  }
  return NextResponse.json(
    { success: false, error: 'Internal server error' },
    { status: 500 }
  );
}
```

---

## Testing API Integrations

```bash
# Test GitHub API
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/user

# Test JIRA API
curl -u email@example.com:YOUR_TOKEN \
  https://your-domain.atlassian.net/rest/api/3/myself
```

---

## Migration to Real APIs

1. Install required packages:
```bash
npm install @octokit/rest
```

2. Update service implementations

3. Test with sample data

4. Deploy to staging

5. Monitor API calls and errors

6. Deploy to production

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 401 Unauthorized | Check token validity and permissions |
| 403 Forbidden | Verify account has required permissions |
| 404 Not Found | Check project key/ID and resource existence |
| Rate limit exceeded | Implement caching and backoff strategy |
| Timeout | Increase timeout; paginate large result sets |
| CORS error | Check API endpoint and domain settings |

---

**Last Updated**: April 2024
