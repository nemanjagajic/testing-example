import './App.css'
import root from 'react-shadow'
import { useEffect } from "react"

function App() {

  // useEffect(() => {
  //   const someDiv = document.createElement("div")
  //   someDiv.innerText = "Nemanja"
  //   const iframe = document.getElementsByTagName("iframe")[0]
  //   console.log({ iframe })
  //   iframe.contentWindow.document.getElementsByTagName("body")[0].appendChild(someDiv)
  // }, [])

  return (
    <div style={{ height: "100vh" }}>
      <div>Something above the iframe</div>
      <iframe
        title="revpowerIframe"
        style={{ width: "400px", height: "400px" }}
        src={"http://46.101.119.178/"}
      />
      {/*<root.div>*/}
      {/*  <div>In shadow dom</div>*/}
      {/*</root.div>*/}
      <div>Below the iframeeeee</div>
    </div>
  );
}

export default App;
