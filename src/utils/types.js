export class CssStyleSheet {
  constructor(){
    this.classList = []
  }
  addClass(name){
    this.classList.push(new CssClass(name))
    return this
  }
  getCss(){
    return this.classList.map(cssClass => cssClass.getCss()).join("")
  }
}

export class CssClass {
  constructor(name, props = []) {
    this.name = name
    this.props = props
  }
  addProp(name, type){
    this.props.push(new CssProp(name, type))
    return this
  }
  getCss() {
    return `.${this.name}{${this.props.reduce((prop) => prop.getCss(), "")}}`
  }
}

export class CssProp {
  constructor(name, type) {
    this.name = name
    if(type === "color")
      this.value = new CssColorValue()
    if(type === "numeric")
      this.value = new CssNumericValue()
    if(type === "text")
      this.value = new CssTextValue()
  }
  getCss() {
    return `${this.name}: ${this.value.getCss()};`
  }
}

export class CssColorValue {
  constructor(red = 0, green = 0, blue = 0, alpha = 1) {
    this.red = red
    this.green = green
    this.blue = blue
    this.alpha = alpha
  }
  getCss() {
    if (this.alpha === 1) return `rgb(${this.red},${this.green},${this.blue})`
    else return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`
  }
}

export class CssNumericValue {
  constructor(value = 0, unit = "px") {
    this.value = value
    this.unit = unit
  }
  getCss() {
    return `${this.value}${this.unit}`
  }
}

export class CssTextValue {
  constructor(value = "initial") {
    this.value = value
  }
  getCss() {
    return this.value
  }
}

// export class CssValueList {
//   constructor(values){
//     this.values = values
//   }
//   getCss() {
//     return this.values.map(value => value.getCss()).join(",")
//   }
// }
