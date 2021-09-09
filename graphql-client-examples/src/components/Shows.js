import {
    useQuery,
    gql
  } from "@apollo/client";
   
  const SHOWS = gql`
    query {
    shows {
        title,
        releaseYear                            
      }
    }
  `;
  
  function Shows() {
  
    const { loading, error, data } = useQuery(SHOWS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    if (data.shows !== null) {
        return data.shows.map(({ title, releaseYear }) => (
            <div key={title}>
                <p>
                {title}: {releaseYear}
                </p>
            </div>
        ));
    } else {
        return (
            <div>
                <p>NO DATA</p>
            </div>
        )
    }
  }

  export default Shows;