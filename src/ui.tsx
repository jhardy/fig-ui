import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, Checkbox, Icon, IconButton, Input, Label, OptionButton, OptionStrip, Text, Select, Switch, SectionTitle} from "figma-styled-components";
import "./ui.css";

const selectGroups = [
  { label: "Ellipse", value: "ellipse" },
  { label: "Triange", value: "triange" },
  { label: "Rectangle", group: [{label: 'Rectange', value: 'rectangle'}, {label: 'Rounded Rectangle', value:'round-rect'}] }

];

const layerOptions = [
  {label: 'group 1', group:[{label: 'Pass Through', value: 'pass-through'}, {label: 'Normal', value: 'normal'}]},
  {label: 'group 2', group:[{label: 'Darken', value: 'Darken'}, {label: 'Multiply', value: 'multiply'}, {label: 'Color Burn', value: 'color-burn'}]},
  {label: 'group 3', group:[{label: 'Lighten', value: 'lighten'}, {label: 'Screen', value: 'screen'}, {label: 'Color Dodge', value: 'color-Dodge'}]}

]

const typeOptions = [
  {label: 'group 1', group:[
    {label: 'Thin', value: 'thin'},
    {label: 'Light', value: 'light'},
    {label: 'Regular', value: 'regular'},
    {label: 'Medium', value: 'medium'},
    {label: 'Bold', value: 'bold'},
    {label: 'Black', value: 'black'}]},
  {label: 'group 2', group:[
    {label: 'Thin Italic', value: 'thin-italic'},
    {label: 'Light Italic', value: 'light-italic'},
    {label: 'Italic', value: 'italic'},
    {label: 'Medium Italic', value: 'medium-italic'},
    {label: 'Bold Italic', value: 'bold-italic'},
    {label: 'Black Italic', value: 'black-italic'}]},

]

const textAlignmentOptions = [
  {label: <Icon name="TextAlignLeft" />, value: "left"},
  {label: <Icon name="TextAlignCenter" />, value: "center"},
  {label: <Icon name="TextAlignRight" />, value: "right"},
]

const typeVerticalAlignmentOptions = [
  {label: <Icon name="AlignTop" />, value: "top"},
  {label: <Icon name="AlignVerticalCenter" />, value: "center"},
  {label: <Icon name="AlignBottom" />, value: "bottom"},
]

const zoomOptions = [
  {label: 'zoom options',group: [
    {label: '50%', value: 'zoom-half'},
    {label: '100%', value: 'zoom-full'},
    {label: '200%', value: 'zoom-double'},
  ]}
]


class App extends React.Component<
  {},
  {
    selectValue: string;
    switchValue: boolean;
    checkboxValue: boolean;
    textAreaValue: string;
    inputValue: string;
  }
> {
  textbox: HTMLInputElement;
  textAreaBox: HTMLTextAreaElement;

  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      switchValue: false,
      checkboxValue: true,
      textAreaValue: "",
      inputValue: "",

    };

  }

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = "5";
    this.textbox = element;
  };

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10);
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  // The switch and Checkbox components return a click event object
  handleBooleanChange = (event: any) => {
    console.log("boolean event:", event.target, event.target.value, event.target.checked)
  }

  // The select component returns the value of the selected option
  handleSelectChange = (value: string) => {
    console.log("select change", value)
  }

  // You can use onchange or a ref to manage inputs
  handleInputChange = (e:any) => {
    this.setState({inputValue: e.target.value})
  }

  // Option strip component returns the event oject
  handleOptionStripChange = (event: any) => {
    console.log("option strip!!!", event.target, event.value)
  }

  handleButtonClick = (event: any) => {
    console.log("button clicked")
  }

  render() {
    return (
      <div>

        <div className="app-bar">
          <div className="avatar"></div>
          <Button variant="primary">Share</Button>
          <IconButton icon={<Icon name="Play" />} />
          <Select options={zoomOptions} />
        </div>


        <div className="ui-section">
        <SectionTitle>Design</SectionTitle>
          <div className="icon-bar">
            <IconButton icon={<Icon name="LayoutAlignLeft" />} />
            <IconButton icon={<Icon name="LayoutAlignHorizontalCenters" />} />
            <IconButton icon={<Icon name="LayoutAlignRight" />} />
            <IconButton icon={<Icon name="LayoutAlignTop" />} />
            <IconButton icon={<Icon name="LayoutAlignVerticalCenters" />} />
            <IconButton icon={<Icon name="LayoutAlignBottom" />} />
          </div>
        </div>

        <div className="ui-section">
          <div className="pos-size-row">
            <Input icon={<Text>X</Text>} value='100' />
            <Input icon={<Text>Y</Text>} value='100' />
          </div>
          <div className="pos-size-row">
            <Input icon={<Text>W</Text>} value='100' />
            <Input icon={<Text>H</Text>} value='100' />
            <OptionButton icon={<Icon name="LinkBroke" />} />
          </div>
          <div className="pos-size-row">
            <Input icon={<Icon name='Angle' />} value='0°' />
            < Input icon={<Icon name="CornerRadius" />} value='0' />
            <OptionButton icon={<Icon name="Corners" />} />
          </div>
        </div>

        <div className="ui-section">
          <SectionTitle>Layer</SectionTitle>
            <div className="layer-options">
            <Select options={layerOptions} />
            <Input value="100%" />
            <IconButton icon={<Icon name="Visible" />} />
          </div>
        </div>

        <div className="ui-section">
          <div className="section-title-icon">
          <SectionTitle>Text</SectionTitle>
          <IconButton icon={<Icon name="Styles" />} />
          </div>
          <div>
            <Input value="Roboto" />
          </div>
          <div className="type-weight">
            <Select options={typeOptions} />
            <Input value="16" />
          </div>

          <div className="type-option-row">
            <Input icon={<Icon name="LineHeight" />} value="Auto"  />
            <Input icon={<Icon name="LetterSpacing" />} value="0%"  />
          </div>

          <div className="type-option-row">
            <Input icon={<Icon name="ParagraphSpacing" />} value="0"  />
            <Input icon={<Icon name="ParagraphIndent" />} value="0"  />
          </div>

          <div className="type-option-strips">
            <OptionStrip options={textAlignmentOptions} />
            <OptionStrip options={typeVerticalAlignmentOptions} />
            <IconButton icon={<Icon name="Kebab" />} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
