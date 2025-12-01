import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, PieChart, Smartphone, Zap, CheckCircle2, BarChart3, Wallet, LineChart } from 'lucide-react';

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-white/30">
              <Zap className="w-4 h-4" />
              Track. Analyze. Save Money.
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Master Your Money
              <span className="block mt-2">with SmartExpense</span>
            </h1>
            
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              The smartest way to track expenses, visualize spending patterns, and achieve your financial goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register" className="group bg-white hover:bg-gray-50 text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-xl transition-all flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all">
                Sign In
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-indigo-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Free forever
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="container mx-auto px-6 -mt-20 mb-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-500">
            {/* Mock Browser Bar */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded-lg px-4 py-1 text-sm text-gray-500 ml-4">
                smartexpense.com/dashboard
              </div>
            </div>
            
            {/* Mock Dashboard */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-xs font-semibold opacity-80 mb-1">Total Balance</div>
                  <div className="text-3xl font-bold">$2,847</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-xs font-semibold opacity-80 mb-1">This Month</div>
                  <div className="text-3xl font-bold">$1,234</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-xs font-semibold opacity-80 mb-1">Transactions</div>
                  <div className="text-3xl font-bold">48</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg"></div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="space-y-3">
                    <div className="h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg"></div>
                    <div className="h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg"></div>
                    <div className="h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Everything You Need to Manage Money
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make expense tracking effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Visual Analytics',
                description: 'Beautiful charts and graphs that make understanding your finances easy and intuitive.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure & Private',
                description: 'Bank-level encryption with JWT authentication keeps your financial data safe.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: 'Smart Categories',
                description: 'Organize expenses automatically into categories and see spending patterns.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Mobile First',
                description: 'Fully responsive design works perfectly on desktop, tablet, and mobile.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: 'Real-Time Tracking',
                description: 'Watch your balance update instantly as you add expenses throughout the day.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Built with modern technology for blazing fast performance.',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center text-white">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '$2M+', label: 'Expenses Tracked' },
              { number: '99.9%', label: 'Uptime' },
              { number: '4.9★', label: 'User Rating' }
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-110 transition-transform">
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.number}</div>
                <div className="text-indigo-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-16 border border-indigo-100">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands who've transformed their finances with SmartExpense.
          </p>
          <Link to="/register" className="inline-flex group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:shadow-2xl transition-all items-center gap-3">
            Start Free Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                Smart<span className="text-indigo-600">Expense</span>
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 SmartExpense. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;