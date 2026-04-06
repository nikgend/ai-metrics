# Deployment Guide

## 🚀 Production Deployment Strategies

### Option 1: Vercel (Recommended for Next.js)

**Pros**: 
- One-click deployment
- Automatic scaling
- Edge functions
- Built-in monitoring

**Steps**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod --env-file=.env.local
```

**Environment Setup**:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add:
   - `GITHUB_API_TOKEN`
   - `GITHUB_API_BASE_URL`
   - `JIRA_BASE_URL`
   - `JIRA_API_TOKEN`
   - `JIRA_USERNAME`
   - `NEXT_PUBLIC_API_URL` (set to your deployed URL)

### Option 2: AWS (EC2)

**Setup**:
```bash
# SSH into EC2 instance
ssh -i your-key.pem ubuntu@your-instance-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <your-repo-url>
cd ai-metrics

# Install dependencies
npm install

# Set environment variables
cp .env.local.example .env.local
nano .env.local  # Edit with values

# Build
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start with PM2
pm2 start npm --name "ai-metrics" -- start
pm2 startup
pm2 save
```

**With Nginx Reverse Proxy**:
```bash
# Install Nginx
sudo apt-get install nginx

# Configure Nginx
sudo nano /etc/nginx/sites-available/default
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Option 3: Docker on AWS ECS

**Build Docker Image**:
```bash
docker build -t ai-metrics:1.0.0 .
```

**Push to ECR**:
```bash
# Create ECR repository
aws ecr create-repository --repository-name ai-metrics

# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com

# Tag image
docker tag ai-metrics:1.0.0 <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/ai-metrics:1.0.0

# Push
docker push <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/ai-metrics:1.0.0
```

**Create ECS Task Definition**:
```json
{
  "family": "ai-metrics",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "ai-metrics",
      "image": "<aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/ai-metrics:1.0.0",
      "portMappings": [
        {
          "containerPort": 3000,
          "hostPort": 3000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        },
        {
          "name": "NEXT_PUBLIC_API_URL",
          "value": "https://your-domain.com"
        }
      ],
      "secrets": [
        {
          "name": "GITHUB_API_TOKEN",
          "valueFrom": "arn:aws:secretsmanager:us-east-1:123456789:secret:github_token"
        },
        {
          "name": "JIRA_API_TOKEN",
          "valueFrom": "arn:aws:secretsmanager:us-east-1:123456789:secret:jira_token"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/ai-metrics",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

### Option 4: Google Cloud Run

**Deploy**:
```bash
# Authenticate
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Build and deploy
gcloud run deploy ai-metrics \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GITHUB_API_TOKEN=xxx,JIRA_BASE_URL=xxx,JIRA_API_TOKEN=xxx,JIRA_USERNAME=xxx
```

### Option 5: Heroku (Legacy but simple)

```bash
# Install Heroku CLI
npm i -g heroku

# Login
heroku login

# Create app
heroku create ai-metrics

# Set environment variables
heroku config:set GITHUB_API_TOKEN=xxx
heroku config:set JIRA_BASE_URL=xxx
heroku config:set JIRA_API_TOKEN=xxx
heroku config:set JIRA_USERNAME=xxx

# Deploy
git push heroku main
```

## 🔒 Security Best Practices

1. **Never commit credentials**
   ```bash
   # Ensure .gitignore includes .env.local
   echo ".env.local" >> .gitignore
   ```

2. **Use secrets manager** (AWS Secrets Manager, Google Secret Manager, etc.)

3. **Enable HTTPS** - Use SSL certificate (free with Let's Encrypt)

4. **Set CORS headers properly**
   ```javascript
   // In next.config.js or API route
   headers: {
     'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGINS,
   }
   ```

5. **Rate limiting** - Add rate limiting to API endpoints

6. **Monitor deployments** - Set up logging and monitoring

## 📊 Monitoring & Logging

### CloudWatch (AWS)
```bash
# View logs
aws logs tail /ecs/ai-metrics --follow
```

### DataDog
```bash
# Add DataDog agent to docker-compose.yml
```

### New Relic
```bash
npm install newrelic
# Add to top of server file
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## 📈 Performance Optimization

1. **Enable caching**
   ```javascript
   // In API routes
   res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
   ```

2. **Use CDN** - Vercel, CloudFront, or Cloudflare

3. **Minify & compress** - Next.js does this automatically

4. **Database query optimization** - Add indexes, use pagination

## 🚨 Scaling Considerations

- **Load balancing** - Distribute traffic across instances
- **Database replication** - For high availability
- **Caching layer** - Redis for session/data caching
- **Message queues** - For async operations
- **Auto-scaling** - Based on CPU/memory

## ✅ Deployment Checklist

- [ ] Dependencies installed (`npm ci`)
- [ ] Environment variables configured
- [ ] Tests passing (`npm run type-check`)
- [ ] Build successful (`npm run build`)
- [ ] Linting passed (`npm run lint`)
- [ ] API endpoints tested
- [ ] API connections verified
- [ ] SSL certificate configured
- [ ] Monitoring enabled
- [ ] Backup strategy in place
- [ ] Rollback plan ready
- [ ] Documentation updated

## 🔄 Rollback Procedures

### Vercel
```bash
vercel rollback
```

### AWS
```bash
# Redeploy previous version
git checkout <previous-commit>
git push
```

### Manual
Keep previous build files; restore if needed.

---

**For more help**: Consult the specific platform's documentation.
