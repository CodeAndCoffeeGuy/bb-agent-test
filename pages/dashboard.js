import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('7d');

  useEffect(() => {
    // Mock dashboard data
    const mockData = {
      summary: {
        totalRevenue: 127850,
        totalOrders: 342,
        avgOrderValue: 373.98,
        inventoryValue: 89450,
        revenueGrowth: 12.5,
        ordersGrowth: 8.3
      },
      salesByCategory: [
        { category: 'Winter Apparel', sales: 45200, percentage: 35.4 },
        { category: 'Camping Gear', sales: 38750, percentage: 30.3 },
        { category: 'Winter Sports', sales: 25900, percentage: 20.3 },
        { category: 'Climbing Equipment', sales: 18000, percentage: 14.0 }
      ],
      recentOrders: [
        { id: 'ORD-2024-001', customer: 'Alpine Adventures Inc.', amount: 2450.00, status: 'shipped', date: '2024-01-20' },
        { id: 'ORD-2024-002', customer: 'Mountain Peak Outfitters', amount: 1275.50, status: 'processing', date: '2024-01-20' },
        { id: 'ORD-2024-003', customer: 'Nordic Expedition Co.', amount: 890.00, status: 'delivered', date: '2024-01-19' },
        { id: 'ORD-2024-004', customer: 'Frost Gear Retail', amount: 3200.75, status: 'shipped', date: '2024-01-19' },
        { id: 'ORD-2024-005', customer: 'Summit Sports Ltd.', amount: 675.25, status: 'processing', date: '2024-01-18' }
      ],
      topProducts: [
        { name: 'Arctic Pro Winter Jacket', units: 45, revenue: 13495.55 },
        { name: 'Mountaineer Hiking Boots', units: 38, revenue: 7219.62 },
        { name: 'Alpine Tent 4-Person', units: 22, revenue: 9899.78 },
        { name: 'Carbon Fiber Ski Poles', units: 67, revenue: 6029.33 }
      ],
      alerts: [
        { type: 'warning', message: '3 products are low on stock and need reordering' },
        { type: 'success', message: 'Q1 revenue target exceeded by 15%' },
        { type: 'info', message: 'New supplier partnership with Nordic Gear Co. established' }
      ]
    };

    setTimeout(() => {
      setDashboardData(mockData);
      setLoading(false);
    }, 1000);
  }, [timeframe]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return '#4CAF50';
      case 'shipped': return '#2196F3';
      case 'processing': return '#FF9800';
      case 'pending': return '#757575';
      default: return '#757575';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'success': return '#4CAF50';
      case 'warning': return '#FF9800';
      case 'error': return '#F44336';
      case 'info': return '#2196F3';
      default: return '#757575';
    }
  };

  if (loading || !dashboardData) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px'
      }}>
        Loading dashboard data...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: '#f5f5f5'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px 5%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem' }}>❄️ Arctic Supply Co.</h1>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Business Analytics Dashboard</p>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: 'none',
                background: 'rgba(255,255,255,0.9)',
                fontSize: '14px'
              }}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <a href="/" style={{
              color: 'white',
              textDecoration: 'none',
              padding: '10px 20px',
              border: '1px solid white',
              borderRadius: '20px'
            }}>
              ← Back to Home
            </a>
          </div>
        </div>

        {/* Key Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h3 style={{ margin: '0 0 5px', fontSize: '1.8rem' }}>
              ${dashboardData.summary.totalRevenue.toLocaleString()}
            </h3>
            <p style={{ margin: '0', opacity: 0.9, fontSize: '14px' }}>Total Revenue</p>
            <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#4CAF50' }}>
              ↗ +{dashboardData.summary.revenueGrowth}% vs last period
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h3 style={{ margin: '0 0 5px', fontSize: '1.8rem' }}>
              {dashboardData.summary.totalOrders.toLocaleString()}
            </h3>
            <p style={{ margin: '0', opacity: 0.9, fontSize: '14px' }}>Total Orders</p>
            <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#4CAF50' }}>
              ↗ +{dashboardData.summary.ordersGrowth}% vs last period
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h3 style={{ margin: '0 0 5px', fontSize: '1.8rem' }}>
              ${dashboardData.summary.avgOrderValue.toFixed(2)}
            </h3>
            <p style={{ margin: '0', opacity: 0.9, fontSize: '14px' }}>Avg Order Value</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h3 style={{ margin: '0 0 5px', fontSize: '1.8rem' }}>
              ${dashboardData.summary.inventoryValue.toLocaleString()}
            </h3>
            <p style={{ margin: '0', opacity: 0.9, fontSize: '14px' }}>Inventory Value</p>
          </div>
        </div>
      </header>

      <div style={{ padding: '30px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', marginBottom: '30px' }}>
          {/* Sales by Category */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 20px', color: '#333' }}>Sales by Category</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {dashboardData.salesByCategory.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ minWidth: '150px', fontSize: '14px', fontWeight: '500' }}>
                    {item.category}
                  </div>
                  <div style={{ flex: 1, background: '#f0f0f0', borderRadius: '10px', height: '8px' }}>
                    <div style={{
                      width: `${item.percentage}%`,
                      height: '100%',
                      background: `hsl(${220 + index * 40}, 70%, 50%)`,
                      borderRadius: '10px'
                    }}></div>
                  </div>
                  <div style={{ minWidth: '80px', textAlign: 'right' }}>
                    <div style={{ fontWeight: 'bold' }}>${item.sales.toLocaleString()}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 20px', color: '#333' }}>Alerts & Notifications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {dashboardData.alerts.map((alert, index) => (
                <div key={index} style={{
                  padding: '15px',
                  borderRadius: '8px',
                  background: `${getAlertColor(alert.type)}10`,
                  borderLeft: `4px solid ${getAlertColor(alert.type)}`
                }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>{alert.message}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <button style={{
                background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
                color: 'white',
                padding: '12px 20px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                📞 Contact Support Team
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Top Products */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 20px', color: '#333' }}>Top Performing Products</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {dashboardData.topProducts.map((product, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: index < dashboardData.topProducts.length - 1 ? '1px solid #f0f0f0' : 'none'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{product.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{product.units} units sold</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 'bold', color: '#4CAF50' }}>
                      ${product.revenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 20px', color: '#333' }}>Recent Orders</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {dashboardData.recentOrders.map((order, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: index < dashboardData.recentOrders.length - 1 ? '1px solid #f0f0f0' : 'none'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{order.id}</div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>
                      {order.customer}
                    </div>
                    <div style={{ fontSize: '11px', color: '#999' }}>{order.date}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      ${order.amount.toLocaleString()}
                    </div>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      color: 'white',
                      background: getStatusColor(order.status)
                    }}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <a href="/orders" style={{
                color: '#2196F3',
                textDecoration: 'none',
                fontSize: '14px'
              }}>
                View All Orders →
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}