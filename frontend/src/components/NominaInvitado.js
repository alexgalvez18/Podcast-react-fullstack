import React, { Component } from "react";
import { Button, Form, Icon } from "antd";

class NominaInvitado extends Component {
  render() {
    return (
      <div className="nomina">
        <h3>
          Quieres escuchar una entrevista con alguien en particular?? Nominalo
        </h3>

        {/* <form action="submit">
          <input type="text" name="email" placeholder="Nomina a alguien" />
          <input type="submit" defaultValue="Vota" />
        </form> */}
        <Form onSubmit={this.handleSubmit} className="form">
          <input type="text" name="email" placeholder="Emprendedor" />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Nominalo
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default NominaInvitado;
