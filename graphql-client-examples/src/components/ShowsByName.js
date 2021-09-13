import { useState, useEffect } from "react" 
   
function ShowsByName() {
  const [shows, setShows] = useState(null)

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getShowsAstra", {
      method: "POST",
    })
    const responseBody = await response.json()
    setShows(responseBody)
  }

  useEffect(() => {
    fetchData()
  }, [])
    
  if (shows !== null) {
    if (shows.data) {
      if (shows.data.show_by_name.values.length !== 0) {
        return shows.data.show_by_name.values.map(({ title, releaseYear }) => (
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
    } else if (shows.errors) {
      console.log("show_by_name ERROR IS: ", shows.errors)
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

export default ShowsByName;