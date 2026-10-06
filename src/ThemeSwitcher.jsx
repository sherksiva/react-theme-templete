// App.jsx
import { useTheme } from './ThemeContext';

export default function App() {
  const { theme, setTheme } = useTheme();

  const themesList = ['default', 'dark', 'neon', 'forest'];

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Multi-Theme Selector</h1>
      <p>Current Theme Active: <strong>{theme}</strong></p>

      {/* Theme Control Buttons */}
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        {themesList.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--primary-color)',
              color: 'var(--bg-color)',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              textTransform: 'capitalize',
              fontWeight: theme === t ? 'bold' : 'normal',
              outline: theme === t ? '2px solid white' : 'none'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Styled Card Example */}
      <div style={{
        border: '1px solid var(--text-color)', 
        padding: '20px', 
        borderRadius: '8px'
      }}>
        <h2>Dynamic Component Box</h2>
        <p>This layout uses CSS variables dynamically mapped on the html root node!</p>
      </div>
    </main>
  );
}
