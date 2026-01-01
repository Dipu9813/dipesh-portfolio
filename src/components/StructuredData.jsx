import { Helmet } from 'react-helmet-async';

export const StructuredData = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dipesh Singh",
    "url": "https://singhdipesh.com.np",
    "sameAs": [
      "https://github.com/Dipu9813",
      "https://www.linkedin.com/in/dipesh--singh"
    ],
    "jobTitle": "Full Stack Developer",
    "knowsAbout": ["Web Development", "React", "JavaScript", "Node.js", "Python", "AI/ML"],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University"
    },
    "description": "Full Stack Developer specializing in modern web technologies and AI/ML",
    "image": "https://singhdipesh.com.np/profile.jpg"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personData)}
      </script>
    </Helmet>
  );
};
