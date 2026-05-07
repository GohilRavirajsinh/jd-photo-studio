// File: src/pages/Github.jsx
import { useLoaderData } from 'react-router-dom';
import { Users, BookOpen } from 'lucide-react';
import { Github as GithubIcon } from '../components/SocialIcons';

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="glass-card p-12 rounded-[3rem] max-w-xl w-full">
        <div className="flex flex-col items-center gap-6">
          <img src={data.avatar_url} alt="Github" className="w-32 h-32 rounded-full border-4 border-primary shadow-2xl" />
          <div className="text-center">
            <h1 className="text-3xl font-bold">{data.name || data.login}</h1>
            <p className="text-zinc-500 mb-6">@{data.login}</p>
            
            <div className="flex gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{data.followers}</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-1 justify-center">
                  <Users size={12} /> Followers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{data.public_repos}</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-1 justify-center">
                  <BookOpen size={12} /> Repos
                </div>
              </div>
            </div>

            <a 
              href={data.html_url} 
              target="_blank" 
              rel="noreferrer"
              className="premium-button-outline inline-flex items-center gap-2"
            >
              <GithubIcon size={18} />
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
