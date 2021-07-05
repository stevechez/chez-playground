import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Link to="/">
            <Image size='mini' src='/sm.jpg' style={{ marginRight: '1.5em' }} />
          </Link>
            Chez's Playground
          </Menu.Item>
        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/version-context">Version Context</Link>
            </Dropdown.Item>
            {/* <Dropdown.Divider /> */}
            <Dropdown.Item>
              <Link to="/counter-view">Counter View</Link>
            </Dropdown.Item>
            {/* <Dropdown.Item>
              <Link to="/expense-tracker">Expense</Link>
            </Dropdown.Item> */}
            <Dropdown.Item>
              <Link to="/netlify-form">Netlify Form</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/react-query">React Query</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/usestate">useSate </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/modal">Modal </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

  </div>
)

export default NavBar