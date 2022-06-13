import React from 'react'
import styled from 'styled-components'
import {useMoralis, useNativeBalance, useNFTBalances} from 'react-moralis'

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 22px;
  text-align: center;
`

const NFTContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const ContainerComponent = () => {
  const {isAuthenticated, user} = useMoralis()
  const { data: balance } = useNativeBalance()
  const { data } = useNFTBalances()

  const CryptoBalances = () => <p style={{marginTop: 80, textAlign: 'center'}}><b>Balance on current network: </b>{balance.formatted}</p>

  const NFTBalances = () =>
    <div style={{marginTop: 80}}>
        {data
          ? <>
              <Title>NFT's on this network</Title>
              <NFTContainer>
                { data.result.map((item) => (
                  <div key={item.token_id}>
                    {item.image && <img style={{width: '150px', display: 'block', margin: 'auto'}} alt="NFT" src={item.image} />}
                    <p style={{textAlign: 'center'}}>{item.name} #{item.token_id}</p>
                  </div>
                ))}
              </NFTContainer>
            </>
          : <Title>No NFT's found on this network</Title>
        }
    </div>

  return (
    <Container>
      {isAuthenticated
        ? <>
            <Title>Welcome {user.get("username")}</Title>
            <CryptoBalances/>
            <NFTBalances/>
          </>
        : <Title>Connect to see your balance and NFT's</Title>
      }
    </Container>
  )
}

export default ContainerComponent