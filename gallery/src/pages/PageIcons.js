import React from 'react'
import styled from 'styled-components'
import * as UI from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'

const { Card, Text } = UI

const icons = Object.entries(UI)
  .filter(([name]) => name.startsWith('Icon'))
  .reduce(
    (icons, [name, Icon]) => [
      ...icons,
      {
        name: `<${name} />`,
        Icon: Icon,
      },
    ],
    []
  )

const PageIcons = ({ title }) => (
  <Page title={title}>
    <Main>
      {icons.map(({ name, Icon }) => (
        <IconCard key={name} width="180px" height="140px">
          <IconWrap>
            <Icon />
          </IconWrap>
          <Text size="small">{name}</Text>
        </IconCard>
      ))}
    </Main>
  </Page>
)

const Main = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  width: 100%;
  margin-left: -20px;
`

const IconCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
`

const IconWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`

export default PageIcons
