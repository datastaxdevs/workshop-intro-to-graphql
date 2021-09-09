import { useState, useEffect } from "react" 
   
function ShowsByName() {
  const [shows, setShows] = useState(null)

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getShowsAstra", {
      method: "POST",
    })
    const responseBody = await response.json()
    setShows(responseBody.data.show_by_name.values)
  }

  useEffect(() => {
    fetchData()
  }, [])
    
  if (shows !== null) {
    return shows.map(({ title, releaseYear }) => (
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

export default ShowsByName;