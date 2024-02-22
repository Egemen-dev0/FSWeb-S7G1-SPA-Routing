const PeopleDetail = (props) => {
  const { name, known_for_department, profile_path, popularity } = props;

  return (
    <>
      <h1> Name: {name}</h1>
      <h2>Proffession :{known_for_department}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} />
      <h2>Fame:{popularity}</h2>
    </>
  );
};

export default PeopleDetail;
