/**
 * Created by zhouyong on 2018/3/29.
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default class Demo2 extends React.Component {

  render() {
    return (
      <div className="demo">
        <Link to="/demo1">跳转</Link>
      </div>
    );
  }
}