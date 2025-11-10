import './Education.css';

function Education() {
  const educationData = [
    {
      title: "Java Full-Stack Developer",
      category: "Certification Course",
      institute: "Besant Technologies",
      duration: "Jul 2025 – Present",
      score: "CGPA: 10",
    },
    {
      title: "B.E Mechanical Engineer",
      category: "Bachelor's Degree",
      institute: "Anna University, Trichy",
      duration: "Aug 2020 – Jun 2024",
      score: "CGPA: 8",
    },
    {
      title: "HSC",
      category: "Higher Secondary",
      institute: "Laurel Hr. Sec School, Pudukkottai",
      duration: "Jun 2019 – Apr 2020",
      score: "Percentage: 71%",
    },
    {
      title: "SSLC",
      category: "Secondary School",
      institute: "Laurel Hr. Sec School, Pudukkottai",
      duration: "Jun 2017 – Apr 2018",
      score: "Percentage: 87%",
    }
  ];

  return (
    <div className="Education">
      <header className="educationtitle">
        <h1 className="myeducation">EDUCATION</h1>
        <p className="edusummary">
          My professional journey and educational background
        </p>
      </header>

      <section className="alleducation">
        {educationData.map((item, index) => (
          <div className="course" key={index}>
            <div className="design">
              <h3 className="coursename">{item.title}</h3>
              <span className="coursecategory">{item.category}</span>
            </div>

            <h4 className="institute">{item.institute}</h4>

            <div className="yearofcourse">
              <div className="courseduration">{item.duration}</div>
              <div className="percentageofcourse">{item.score}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Education;
