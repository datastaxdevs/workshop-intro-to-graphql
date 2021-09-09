import {
    useQuery,
    gql
  } from "@apollo/client";
   
  const GENRES = gql`
    query {
      genres {
        value
      }
    }
  `;
  
  function Genres() {
  
    const { loading, error, data } = useQuery(GENRES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    if (data.genres !== null) {
        return data.genres.map(({ value }) => (
            <div key={value}>
                <p>
                {value}
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

  export default Genres;