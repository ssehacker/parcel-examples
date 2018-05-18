/**
 * Created by zhouyong on 2018/3/29.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Demo.css';

export default class Demo extends React.Component {
  componentDidMount() {
    const a = Promise.resolve('support promise.');
    a.then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="demo">
        <h3>支持postcss/autoprefixer</h3>
        <h3>支持React</h3>
        <h3>支持es6／es7</h3>
        <h3>开箱即用Typescript</h3>
        <Link to="/demo2">跳转到demo2</Link>
      </div>
    );
  }
}