import React from 'react';
// import { Card, CardBlock, CardText } from 'reactstrap';
import { Card, CardText, CardBody } from 'reactstrap';

export default function Sidebar() {
  return (
    <aside className="col-sm-12 col-md-4">
      <Card>
        <CardBody>
          <CardText>Sidebar content</CardText>
        </CardBody>
      </Card>
    </aside>
  );
}
