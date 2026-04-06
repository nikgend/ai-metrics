# Quick Start Guide

## ⚡ 5-Minute Quick Start

### 1. Prerequisites Check
```bash
node --version  # Should be v18 or higher
npm --version
```

### 2. Install & Setup
```bash
npm install
cp .env.local.example .env.local
```

### 3. Configure Credentials
Edit `.env.local` with your:
- GitHub API Token
- JIRA URL and API Token

### 4. Run Development Server
```bash
npm run dev
```

### 5. Open Browser
Navigate to http://localhost:3000

You should see the dashboard home page with 6 main sections:
- 📊 Organization Metrics
- 👥 Team Performance  
- 👤 Individual Metrics
- ⚙️ Feature Metrics
- 🚀 Release Metrics
- 📈 Comparison

## 🔑 Getting API Credentials

### GitHub Token (2 minutes)
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `read:org`, `read:user`
4. Copy token to `.env.local`

### JIRA Token (2 minutes)
1. Go to https://id.atlassian.com/manage-profile/security/api-tokens
2. Click "Create API token"
3. Copy token
4. In `.env.local`, set:
   - `JIRA_USERNAME` = your email
   - `JIRA_API_TOKEN` = copied token
   - `JIRA_BASE_URL` = your Atlassian URL

## 📖 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check types
npm run type-check

# Run linter
npm run lint
```

## 🎯 First Steps

1. **Explore Organization Dashboard**
   - See overall metrics
   - View team breakdown
   - Check productivity trends

2. **Check Team Performance**
   - Select different teams
   - View member productivity
   - Track team velocity

3. **Analyze Individual Metrics**
   - View developer stats
   - See skill distribution
   - Track personal trends

4. **Compare Periods**
   - Select two periods Q1/Q2
   - See improvements
   - Identify trends

## 🚀 Deployment Options

### Quick Deployment (Vercel)
```bash
npm i -g vercel
vercel --env-file=.env.local
```

### Docker Deployment
```bash
docker build -t ai-metrics .
docker run -p 3000:3000 --env-file .env.local ai-metrics
```

### npm start
```bash
npm run build
npm start
```

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Dashboard is blank | Check console for API errors; verify credentials in .env.local |
| GitHub API error | Verify token scopes and expiration |
| JIRA connection failed | Check JIRA_BASE_URL format (include https://) |
| Port 3000 in use | Change port: `npm run dev -- -p 3001` |

## 📊 Sample Data

The app includes mock data for demonstration. To customize:
1. Open `services/metricsService.ts`
2. Modify mock data in each method
3. Or connect to real GitHub Copilot & JIRA APIs

## ✨ Next Steps

1. Read full [README.md](./README.md)
2. Explore dashboard pages
3. Customize mock data
4. Connect real APIs
5. Deploy to production

## 💡 Pro Tips

- Use browser DevTools to inspect API responses
- Check `/api/health` endpoint to verify API is working
- Look at `services/` to understand data integration
- Edit components in `app/components/` to customize UI
- Add new metrics in `types/metrics.ts`

---

**Need help?** Check the full README.md for detailed documentation.
