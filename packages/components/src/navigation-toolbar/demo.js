const React = require("react");
const Pattern = require(".");
const Button = require("../button");
const Themer = require("../demo-themer");

const tools = ["react", "search", "reload"];
const toolComponents = tools.map(item => <Button key={item} symbol={item} />);

module.exports.default = function NavigationToolbarDemo() {
  return (
    <Themer>
      <Pattern>{toolComponents}</Pattern>
    </Themer>
  );
};
