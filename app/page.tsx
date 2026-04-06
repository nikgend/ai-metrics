export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mb-12">
        <h1 className="section-title">Welcome to AI Metrics ROI Dashboard</h1>
        <p className="text-gray-600 text-lg mb-8">
          Measure the return on investment of GitHub Copilot and JIRA integration across your organization
        </p>
      </div>

      <div className="grid-3 mb-8">
        <div className="card">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-xl font-bold mb-2">Organization Metrics</h2>
          <p className="text-gray-600 mb-4">
            Get comprehensive ROI metrics at the organization level
          </p>
          <a href="/organization" className="btn btn-primary">
            View Details
          </a>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">👥</div>
          <h2 className="text-xl font-bold mb-2">Team Performance</h2>
          <p className="text-gray-600 mb-4">
            Analyze team-level metrics and productivity gains
          </p>
          <a href="/teams" className="btn btn-primary">
            View Details
          </a>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">👤</div>
          <h2 className="text-xl font-bold mb-2">Individual Metrics</h2>
          <p className="text-gray-600 mb-4">
            Track individual developer productivity and impact
          </p>
          <a href="/users" className="btn btn-primary">
            View Details
          </a>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">⚙️</div>
          <h2 className="text-xl font-bold mb-2">Feature Metrics</h2>
          <p className="text-gray-600 mb-4">
            Measure feature development efficiency and quality
          </p>
          <a href="/features" className="btn btn-primary">
            View Details
          </a>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-xl font-bold mb-2">Release Metrics</h2>
          <p className="text-gray-600 mb-4">
            Monitor release performance and deployment success
          </p>
          <a href="/releases" className="btn btn-primary">
            View Details
          </a>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">📈</div>
          <h2 className="text-xl font-bold mb-2">Comparison</h2>
          <p className="text-gray-600 mb-4">
            Compare metrics across different periods
          </p>
          <a href="/comparison" className="btn btn-primary">
            View Details
          </a>
        </div>
      </div>

      <div className="card bg-blue-50 border-2 border-primary mb-8">
        <h3 className="text-xl font-bold mb-4">📋 Key Metrics Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-gray-600 text-sm">Overall Acceptance Rate</p>
            <p className="text-2xl font-bold text-primary">81.2%</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Productivity Gain</p>
            <p className="text-2xl font-bold text-primary">35.5%</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Cost Savings</p>
            <p className="text-2xl font-bold text-primary">$245K</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Active Teams</p>
            <p className="text-2xl font-bold text-primary">8</p>
          </div>
        </div>
      </div>
    </div>
  )
}
