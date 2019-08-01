import React, { Component } from "react";
import { Button, Form } from "antd";

class Suscribe extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("funciona");
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     const { keys, names } = values;
    //     console.log("Received values of form: ", values);
    //     console.log("Merged values:", keys.map(key => names[key]));
    //   }
    // });
  };

  render() {
    return (
      <div className="suscribe">
        <h3>Enterate de todas las noticias y nuevos episodios</h3>
        <Form onSubmit={this.handleSubmit} className="form">
          <input type="text" name="email" placeholder="email" />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Suscribete
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Suscribe;
