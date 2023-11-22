const metalsmith = require("metalsmith");
const templates = require("metalsmith-react-tpl").default;

metalsmith(__dirname)
  .source("docs")
  .destination("build")
  .use(
    templates({
      baseFile: "default.jsx",
      directory: "layouts",
      preserve: false,
      static: false,
    })
  )
  .build();
