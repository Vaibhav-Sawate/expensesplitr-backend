import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Bright, SaaS-style colors
const COLORS = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#6366F1'];

function ExpenseChart({ expenses }) {
  const data = expenses.reduce((acc, curr) => {
    const found = acc.find(item => item.name === curr.category);
    if (found) {
      found.value += curr.amount;
    } else {
      acc.push({ name: curr.category, value: curr.amount });
    }
    return acc;
  }, []);

  if (data.length === 0) return null;

  return (
    <div style={{ width: '100%', height: 400 }} className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/50 flex flex-col items-center justify-center">
      <h3 className="text-xl font-black text-gray-800 mb-4">Breakdown</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80} // Donut style
            outerRadius={110}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `$${value}`} 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;