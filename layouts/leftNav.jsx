const React = require("react");

function LeftNav(props) {
  const { file, metadata } = props;
  if (file.docSite === "reference")
    // use metadata[docSites]["reference"]["leftNavData"] to generate the reference left nav
    return (
      <div>
        <h1>Left Nav</h1>
        <ul>
          <li>Test</li>
          <li>Test2</li>
          <li>Test3</li>
        </ul>
      </div>
    );
}

module.exports = LeftNav;
