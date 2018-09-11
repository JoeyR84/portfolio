import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => (
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/work/">Work</ListLink>
    <ListLink to="/services/">Services</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
  </ul>
)

export default Nav
