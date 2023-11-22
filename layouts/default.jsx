const React = require("react");
const LeftNav = require("./leftNav");

function layout(props) {
  return (
    <>
      <script src="./index.js"></script>
      <div id="root">
        <LeftNav props={props} />
        <div>
          <h1 onClick={() => console.log("HIYA")}>My Site</h1>
          {props.contents}
        </div>
      </div>
    </>
  );
}

module.exports = layout;

// head?
// alter plugin with props?
