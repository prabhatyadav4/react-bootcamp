import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([])
  // useEffect(()=>{
  //     fetch('https://api.github.com/users/prabhatyadav4')
  //     .then(response => response.json())
  //     .then(data => {setData(data)})
  // }, [])

  return (
  <div className="flex justify-center items-center p-8 min-h-screen" style={{ background: 'white' }}>
    <div className="rounded-2xl p-8 max-w-sm w-full text-center" style={{ background: 'black', border: '0.5px solid #30363D' }}>

      {/* Avatar */}
      <div className="relative inline-block mb-4">
        <img
          src={data.avatar_url}
          alt="github-profile-photo"
          className="w-24 h-24 rounded-full"
          style={{ border: '2px solid #30363D' }}
        />
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full" style={{ background: '#3FB950', border: '2px solid #161B22' }}></span>
      </div>

      {/* Name & username */}
      <p className="text-lg font-medium mb-1" style={{ color: '#E6EDF3' }}>{data.name}</p>
      <p className="text-xs mb-1" style={{ color: '#8B949E' }}>@{data.login}</p>

      {/* Active badge */}
      <span className="inline-block text-xs px-3 py-0.5 rounded-full mb-5"
        style={{ background: '#1F6FEB22', color: '#58A6FF', border: '0.5px solid #1F6FEB55' }}>
        Active on GitHub
      </span>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        <div className="rounded-xl py-3" style={{ background: '#0D1117', border: '0.5px solid #30363D' }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#8B949E' }}>Followers</p>
          <p className="text-2xl font-medium" style={{ color: '#58A6FF' }}>{data.followers}</p>
        </div>
        <div className="rounded-xl py-3" style={{ background: '#0D1117', border: '0.5px solid #30363D' }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#8B949E' }}>Following</p>
          <p className="text-2xl font-medium" style={{ color: '#58A6FF' }}>{data.following}</p>
        </div>
      </div>

    {/* CTA */}
    <a
      href={data.html_url}
      target="_blank"
      className="block rounded-xl py-2.5 text-sm font-medium text-white"
      style={{ background: '#238636', border: '0.5px solid #2EA043' }}
    >
      View on GitHub
    </a>

  </div>
</div>
);
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/prabhatyadav4");
  return response.json();
};
