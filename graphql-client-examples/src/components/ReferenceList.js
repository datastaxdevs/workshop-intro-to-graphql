import { useState, useEffect } from "react" 
  
function ReferenceList() {
  const [genres, setGenres] = useState(null)

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenresAstra", {
      method: "POST",
    })
    const responseBody = await response.json()
    setGenres(responseBody.data.reference_list.values)
  }

  useEffect(() => {
    fetchData()
  }, [])
    
  if (genres !== null) {
      return genres.map(({ value }) => (
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

export default ReferenceList;