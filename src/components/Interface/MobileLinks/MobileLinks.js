import React from 'react'
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'

import links from '../../../misc/links'
import './index.css'

const MobileLinks = () => (
  <BottomNavigation
    showLabels
    className="interface-mobile-links"
  >
    {links && links.length > 0 &&
      links.map(link =>
        <BottomNavigationAction
          key={link.name}
          label={link.name}
          icon={<link.icon />}
        />
      )
    }
  </BottomNavigation>
)

export default MobileLinks
