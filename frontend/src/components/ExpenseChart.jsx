import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = {
  Food: '#F59E0B',
  Transport: '#3B82F6',
  Utilities: '#EAB308',
  Entertainment: '#A855F7',
  Other: '#6B7280'
};

const GRADIENTS = {
  Food: ['#F59E0B', '#EF4444'],
  Transport: ['#3B82F6', '#06B6D4'],
  Utilities: ['#EAB308', '#F59E0B'],
  Entertainment: ['#A855F7', '#EC4899'],
  Other: ['#6B7280', '#4B5563']
};

function ExpenseChart({ expenses }) {
  // Aggregate data by category
  const data = expenses.reduce((acc, curr) => {
    const found = acc.find(item => item.name === curr.category);
    if (found) {
      found.value += curr.amount;
    } else {
      acc.push({ 
        name: curr.category, 
        value: curr.amount,
        icon: getCategoryIcon(curr.category)
      });
    }
    return acc;
  }, []);

  function getCategoryIcon(category) {
    const icons = {
      Food: '🍔',
      Transport: '🚗',
      Utilities: '💡',
      Entertainment: '🎬',
      Other: '📦'
    };
    return icons[category] || '📦';
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-12 h-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <p className="text-gray-500 font-medium">No data to display</p>
        <p className="text-gray-400 text-sm mt-1">Add expenses to see analytics</p>
      </div>
    );
  }

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const percent = ((payload[0].value / total) * 100).toFixed(1);
      return (
        <div className="bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100">
          <p className="font-bold text-gray-800 mb-1">
            {payload[0].payload.icon} {payload[0].name}
          </p>
          <p className="text-sm text-gray-600">
            ${payload[0].value.toFixed(2)} ({percent}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Hide labels for small slices

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="font-bold text-xs"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="relative" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {Object.entries(GRADIENTS).map(([key, colors]) => (
                <linearGradient key={key} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={colors[0]} />
                  <stop offset="100%" stopColor={colors[1]} />
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={`url(#gradient-${entry.name})`}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className="text-xs font-semibold text-gray-500 mb-1">Total</p>
          <p className="text-2xl font-black text-gray-900">${total.toFixed(0)}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2">
        {data.sort((a, b) => b.value - a.value).map((item, index) => {
          const percentage = ((item.value / total) * 100).toFixed(1);
          return (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-sm"
                  style={{ 
                    background: `linear-gradient(135deg, ${GRADIENTS[item.name][0]}, ${GRADIENTS[item.name][1]})` 
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{percentage}% of total</p>
                </div>
              </div>
              <p className="font-black text-gray-900">${item.value.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseChart;