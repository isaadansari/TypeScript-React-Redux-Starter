// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import "./zone.scss";
import { Resources } from "../../resources";
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Zone extends React.Component {
  render() {
    return (
      <section>
        <div className="container-fluid zone">
          <div className="row">
            <div className="col-md-12">
              <p>some text</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
