import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Nav = () => (
  <UL>
    <Link to="/" style={{ textDecoration: `none` }}>
      <LI>
        <Text>Home</Text>
      </LI>
    </Link>
    <Link to="/about/" style={{ textDecoration: `none` }}>
      <LI>
        <Text>About</Text>
      </LI>
    </Link>
    <Link to="/work/" style={{ textDecoration: `none` }}>
      <LI>
        <Text>Work</Text>
      </LI>
    </Link>
    <Link to="/services/" style={{ textDecoration: `none` }}>
      <LI>
        <Text>Services</Text>
      </LI>
    </Link>
    <Link to="/contact/" style={{ textDecoration: `none` }}>
      <LI>
        <Text>Contact</Text>
      </LI>
    </Link>
    {/* <Link to="/blog/" style={{ textDecoration: `none` }}>
      <LI>
        <Text>Blog</Text>
      </LI>
    </Link> */}
  </UL>
)

export default Nav

const LI = styled('div')`
  height: 100px;
  width: 100px;
  flex-wrap: wrap;
  display: inline-flex;
  background-image: radial-gradient(
    circle,
    #000,
    rgba(0, 0, 0, 0.8),
    rgb(255, 255, 255, 1)
  );
  border-radius: 90px;
  text-align: center;
  justify-content: space-around;
  margin: 10px;
`
const Text = styled('p')`
  color: #f90000;
  font-size: 25px;
  justify-content: center;
  align-self: center;
`
const UL = styled('div')`
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
`
