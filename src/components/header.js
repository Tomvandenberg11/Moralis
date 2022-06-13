import styled from 'styled-components'
import {useMoralis} from "react-moralis";
import React from "react";

const Header = styled.div`
  height: 100px;
  width: 100vw;
  background-color: lightblue;
`

const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  border: 1px solid #000;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  font-size: 18px;
`

const HeaderComponent = () => {
  const {authenticate, isAuthenticated, logout} = useMoralis()

  return (
    <Header>
      <Container>
        <img style={{width: '150px'}} src="https://www.web3.ca/wp-content/uploads/web3-logo-favicon.png" alt="Logo"/>
        {!isAuthenticated
          ? <div>
            <Button onClick={() => authenticate({ onComplete: () => alert("Connected 🎉") })}>Log in</Button>
          </div>
          : <div>
            <Button onClick={() => logout()}>Log out</Button>
          </div>}
      </Container>
    </Header>
  )
}

export default HeaderComponent