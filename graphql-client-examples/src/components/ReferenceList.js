import { useState, useEffect } from "react" 
  
function ReferenceList() {
  const [genres, setGenres] = useState(null)

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenresAstra", {
      method: "POST",
    })
    const responseBody = await response.json()
    setGenres(responseBody)
  }

  useEffect(() => {
    fetchData()
  }, [])
    
  if (genres !== null) {
    if (genres.data) {
      if (genres.data.reference_list.values.length !== 0) {
        return genres.data.reference_list.values.map(({ value }) => (
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
    } else if (genres.errors) {
      console.log("reference_list ERROR IS: ", genres.errors)
      return (
        <div>
            <p>ERROR</p>
        </div>
      )
    }
  } else {
    return (
      <div>
          <p>NO DATA</p>
      </div>
    )
  }
}

export default ReferenceList;