import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Img from 'gatsby-image'

import Nav from './Nav'

export default class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.location.pathname)
    if (this.props.location.pathname == '/') {
      console.log(this.container)
    } else {
      this.container.animate([{ height: '100vh' }, { height: '35vh' }], {
        duration: 300,
        fill: 'forwards',
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        iterations: 1,
      })
    }
  }
  render() {
    return (
      <Container
        ref={container => (this.container = ReactDOM.findDOMNode(container))}
      >
        <HeaderContainer>
          <div>
            <Link to="/" style={{ textDecoration: `none` }}>
              <Title>{this.props.siteTitle}</Title>
            </Link>
          </div>
          <NavContainer>
            <Nav />
          </NavContainer>
        </HeaderContainer>
        <Img
          sizes={this.props.image.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Container>
    )
  }
}

const Container = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const NavContainer = styled('div')`
  justify-self: flex-end;
`

const Title = styled('h1')`
  color: #fff;
  font-size: 60px;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
`
const HeaderContainer = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 10px;
  position: relative;
  z-index: 2;
`
