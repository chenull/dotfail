import { render } from '@redwoodjs/testing/web'

import AppDashboardPage from './AppDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AppDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppDashboardPage />)
    }).not.toThrow()
  })
})
