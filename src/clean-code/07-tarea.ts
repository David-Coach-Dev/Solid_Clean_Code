(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia
  //?type
  type HtmlType = "input" | "select" | "textarea" | "radio";
  //?interlace
  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }
  //?class
  class HtmlElement {
    public id: string;
    public type: HtmlType;
    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }
  //?interface
  interface InputAttributesProps {
    placeholder: string;
    value: string;
  }
  class InputAttributes {
    public placeholder: string;
    public value: string;
    constructor({ placeholder, value }: InputAttributesProps) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }
  //?class
  class InputEvents {
    constructor() {}
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }
  //?interfaces
  interface InputElementProps {
    id: string;
    placeholder: string;
    type?: HtmlType;
    value: string;
  }
  //?class
  class InputElements {
    public html: HtmlElement;
    public Attributes: InputAttributes;
    public Events: InputEvents;
    constructor({ id, placeholder, value }: InputElementProps) {
      this.html = new HtmlElement({ id, type: "input" });
      this.Attributes = new InputAttributes({ placeholder, value });
      this.Events = new InputEvents();
    }
  }
  //?const
  const nameField = new InputElements({
    value: "Fernando",
    placeholder: "Enter first name",
    id: "txtName",
  });
  //*print to console
  console.log({ nameField });
})();
