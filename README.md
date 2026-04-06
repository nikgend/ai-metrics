# AI Metrics ROI Dashboard

A comprehensive Next.js application for measuring the return on investment (ROI) of GitHub Copilot and JIRA integration across your organization at multiple levels: organization, team, feature, and individual member level.

## 📊 Features

### Core Metrics
- **Organization-level metrics** - Aggregate metrics across entire organization
- **Team-level analytics** - Performance metrics per team
- **Individual metrics** - Developer-specific productivity and quality metrics
- **Feature tracking** - Development efficiency and quality for individual features
- **Release management** - Release performance and deployment success metrics
- **Comparative analysis** - Compare metrics across different time periods

### Dashboard Views
1. **Organization Dashboard** - High-level ROI with team breakdown
2. **Team Analytics** - Team performance with member details
3. **Individual Metrics** - Developer productivity and contribution
4. **Feature Metrics** - Feature development analytics
5. **Release Metrics** - Release quality and timeline analysis
6. **Comparison** - Period-over-period comparison

### Visualizations
- Line charts for trend analysis
- Bar charts for comparative metrics
- Pie charts for distribution analysis
- Data tables with sortable columns
- Key metric cards with trend indicators

## 🏗️ Architecture

### Backend Services
- **GitHub Copilot Service** - Integrates with GitHub API to fetch Copilot usage metrics
- **JIRA Service** - Connects to JIRA API for issue and sprint metrics
- **Metrics Service** - Aggregates and processes data from multiple sources

### API Endpoints
- `GET /api/health` - Health check
- `GET /api/metrics/organization` - Organization-level metrics
- `GET /api/metrics/team` - Team metrics
- `GET /api/metrics/user` - Individual user metrics
- `GET /api/metrics/feature` - Feature metrics
- `GET /api/metrics/release` - Release metrics
- `GET /api/metrics/comparison` - Period comparison metrics

### Frontend Architecture
- **Next.js App Router** - Modern routing with React Server Components
- **Reusable Components** - MetricCard, MetricsChart, MetricsTable, Navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Data visualization library

## 📦 Tech Stack

### Frontend
- **Next.js 14** - React framework with built-in optimization
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling
- **Recharts** - Charts and graphs
- **Axios** - HTTP client
- **Date-fns** - Date utilities

### Backend
- **Next.js API Routes** - Backend API endpoints
- **Node.js** - Runtime environment

### Integration Services
- **GitHub API** - Copilot metrics and code insights
- **JIRA REST API** - Issue and project management metrics
- **PostgreSQL** (optional) - Data persistence for historical metrics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- GitHub personal access token (for Copilot metrics)
- JIRA API token and account credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-metrics
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure API credentials** (edit `.env.local`)
   ```env
   # GitHub Configuration
   GITHUB_API_TOKEN=your_github_token_here
   GITHUB_API_BASE_URL=https://api.github.com

   # JIRA Configuration
   JIRA_BASE_URL=https://your-domain.atlassian.net
   JIRA_API_TOKEN=your_jira_api_token_here
   JIRA_USERNAME=[REDACTED_EMAIL_ADDRESS_1]

   # Application Configuration
   NEXT_PUBLIC_API_URL=http://localhost:3000
   NODE_ENV=development
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

#### Production Build
```bash
npm run build
npm start
```

#### Type Checking
```bash
npm run type-check
```

#### Linting
```bash
npm run lint
```

## 📋 Environment Setup

### Getting GitHub Token
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Create a new token with `read:org` and `read:user` scopes
3. Copy the token and add to `.env.local`

### Getting JIRA Token
1. Go to [JIRA Account Settings > Security > API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Create API token
3. Add your email and token to `.env.local`

## 📂 Project Structure

```
ai-metrics/
├── app/
│   ├── api/
│   │   ├── health/
│   │   │   └── route.ts
│   │   └── metrics/
│   │       ├── organization/
│   │       │   └── route.ts
│   │       ├── team/
│   │       │   └── route.ts
│   │       ├── user/
│   │       │   └── route.ts
│   │       ├── feature/
│   │       │   └── route.ts
│   │       ├── release/
│   │       │   └── route.ts
│   │       └── comparison/
│   │           └── route.ts
│   ├── components/
│   │   ├── MetricCard.tsx
│   │   ├── MetricsChart.tsx
│   │   ├── MetricsTable.tsx
│   │   ├── Navigation.tsx
│   │   └── index.ts
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── organization/
│   │   └── page.tsx
│   ├── teams/
│   │   └── page.tsx
│   ├── users/
│   │   └── page.tsx
│   ├── features/
│   │   └── page.tsx
│   ├── releases/
│   │   └── page.tsx
│   └── comparison/
│       └── page.tsx
├── services/
│   ├── baseService.ts
│   ├── githubCopilotService.ts
│   ├── jiraService.ts
│   ├── metricsService.ts
│   └── index.ts
├── types/
│   └── metrics.ts
├── lib/
│   └── (utility functions)
├── public/
│   └── (static assets)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🔑 Key Metrics Explained

### Copilot Acceptance Rate
Percentage of GitHub Copilot suggestions that developers accept and use in their code.

### Productivity Gain
Percentage improvement in development speed due to AI assistance.

### Cost Savings
Estimated monetary savings from reduced development time and improved efficiency.

### Quality Score
Composite score based on code review feedback, defect rates, and test coverage (0-10 scale).

### Bug Rate
Percentage of deployed code that results in production defects.

### Time to Market
Number of days from feature conception to production deployment.

## 🔄 Data Integration Flow

1. **Data Collection**
   - GitHub Copilot Service fetches usage metrics from GitHub API
   - JIRA Service fetches issue and sprint data from JIRA API

2. **Data Processing**
   - Metrics Service aggregates data from multiple sources
   - Data is normalized and processed

3. **API Exposure**
   - Next.js API routes expose processed metrics
   - Frontend consumes via HTTP requests

4. **Visualization**
   - React components render charts, tables, and cards
   - User can filter and compare metrics

## 📊 Dashboard Features in Detail

### Organization Dashboard
- Organization-wide adoption metrics
- Team performance comparison
- Trend analysis over time
- Cost/benefit analysis

### Team Dashboard
- Team-specific acceptance rates
- Member performance breakdown
- Sprint velocity trends
- Quality metrics

### Individual Dashboard
- Personal productivity metrics
- Code contribution statistics
- Skill and language distribution
- Performance trends

### Feature Dashboard
- Feature development timeline
- Estimated vs actual time
- Quality assurance metrics
- Defect tracking

### Release Dashboard
- Release metrics and quality
- Feature completeness
- Bug resolution metrics
- Deployment success rate

### Comparison Dashboard
- Period-over-period analysis
- Trend identification
- Performance improvement tracking
- Business impact measurement

## 🎯 ROI Measurement Scenarios

### Scenario 1: Developer Efficiency
**Measurement**: Time to complete tasks
- Before: 8 hours/task (estimated)
- After: 5 hours/task (with Copilot)
- ROI: 37.5% efficiency gain

### Scenario 2: Code Quality
**Measurement**: Defect rate
- Before: 3.2% defects
- After: 1.8% defects
- ROI: 43.75% improvement in quality

### Scenario 3: Team Velocity
**Measurement**: Tasks completed per sprint
- Before: 35 tasks/sprint
- After: 45 tasks/sprint
- ROI: 28.6% velocity improvement

### Scenario 4: Release Reliability
**Measurement**: Time from feature to production
- Before: 90 days
- After: 55 days
- ROI: 38.9% faster deployment

## 🛠️ Development Workflows

### Adding a New Metric Type
1. Define type in `types/metrics.ts`
2. Create API endpoint in `app/api/metrics/[type]/route.ts`
3. Add service method in `services/metricsService.ts`
4. Create page component in `app/[view]/page.tsx`
5. Update navigation in `app/components/Navigation.tsx`

### Customizing Visualizations
- Charts: Edit `app/components/MetricsChart.tsx`
- Tables: Modify `app/components/MetricsTable.tsx`
- Cards: Update `app/components/MetricCard.tsx`

### Extending Backend Integration
1. Create new service class extending `BaseService`
2. Implement data fetch methods
3. Integrate in `MetricsService`
4. Expose via new API endpoint

## 🔐 Security Considerations

- Store sensitive credentials in `.env.local` (never commit)
- Use environment variables for all API tokens
- Implement rate limiting for API endpoints
- Validate and sanitize all user inputs
- Consider adding authentication/authorization layer
- Implement CORS properly for production

## 📈 Performance Optimization

- API responses are cached (configurable TTL)
- Frontend uses Next.js automatic code splitting
- Tailwind CSS is optimized for production
- Images are optimized with Next.js Image component
- Consider adding database indexes for large datasets

## 🧪 Testing

(Extend with your testing framework)

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📚 API Documentation

### Health Check
```
GET /api/health
```

### Organization Metrics
```
GET /api/metrics/organization?id=org-id
```

### Team Metrics
```
GET /api/metrics/team?id=team-id
```

### User Metrics
```
GET /api/metrics/user?id=user-id
```

### Feature Metrics
```
GET /api/metrics/feature?id=feature-id
```

### Release Metrics
```
GET /api/metrics/release?id=release-id
```

### Comparison Metrics
```
GET /api/metrics/comparison?period1=Q1-2024&period2=Q2-2024
```

## 🚢 Deployment

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to AWS
1. Build: `npm run build`
2. Configure environment variables in deployment platform
3. Deploy using AWS CLI or through AWS Console

### Deploy to Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next .next
COPY public public

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
docker build -t ai-metrics:latest .
docker run -p 3000:3000 --env-file .env.local ai-metrics:latest
```

## 🐛 Troubleshooting

### GitHub API Connection Issues
- Verify token has correct scopes
- Check token expiration
- Ensure rate limit not exceeded

### JIRA API Connection Issues
- Verify JIRA URL is correct
- Check username/email format
- Confirm API token is valid

### Data Not Showing
- Check browser console for errors
- Verify API endpoints return data
- Check environment variables are set
- Ensure services return valid data

### Chart Not Rendering
- Check data format matches expected schema
- Verify data array is not empty
- Check browser compatibility

## 📝 Future Enhancements

1. **Database Integration** - Store historical metrics for trend analysis
2. **Authentication** - Add user authentication and role-based access
3. **Advanced Analytics** - ML-based insights and predictions
4. **Real-time Updates** - WebSocket integration for live metrics
5. **Export Functionality** - Export reports to PDF/Excel
6. **Custom Dashboards** - Allow users to create custom metric views
7. **Alerts & Notifications** - Set up alerts for metric thresholds
8. **Integration Tests** - Comprehensive API testing
9. **Dark Mode** - Dark theme support
10. **Mobile App** - React Native mobile application

## 📄 License

MIT License - see LICENSE file for details

## 👥 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🙏 Acknowledgments

- GitHub Copilot API documentation
- JIRA REST API documentation
- Next.js documentation
- Recharts library
- Tailwind CSS framework

---

**Happy measuring! 📊**
