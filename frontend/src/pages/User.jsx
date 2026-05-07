// File: src/pages/User.jsx
import { useParams } from 'react-router-dom';

const User = () => {
  const { userid } = useParams();
  
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="glass-card p-12 rounded-[3rem] text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">User Profile</h1>
        <div className="text-6xl font-bold text-primary mb-6">{userid}</div>
        <p className="text-zinc-400">This is a dynamic route for client {userid}. You can use this to show personalized galleries or invoices.</p>
      </div>
    </div>
  );
};

export default User;
