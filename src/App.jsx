import Profile from "./components/Profile";

export default function App() {
  const profiles = [
    {
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      name: "John Doe",
      bio: "Full-stack JavaScript developer at Acme Inc.",
      email: "john.doe@email.com",
      phone: "+5511987654321",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
    },
  ];

  return (
    <div className="app">
      {profiles.map((profile, index) => (
        <Profile
          key={index} 
          avatar={profile.avatar}
          name={profile.name}
          bio={profile.bio}
          email={profile.email}
          phone={profile.phone}
          githubUrl={profile.githubUrl}
          linkedinUrl={profile.linkedinUrl}
          twitterUrl={profile.twitterUrl}
        />
      ))}
    </div>
  );
}
