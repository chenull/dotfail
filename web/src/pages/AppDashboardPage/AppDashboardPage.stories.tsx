import type { ComponentMeta } from '@storybook/react'

import AppDashboardPage from './AppDashboardPage'

export const generated = () => {
  return <AppDashboardPage />
}

export default {
  title: 'Pages/AppDashboardPage',
  component: AppDashboardPage,
} as ComponentMeta<typeof AppDashboardPage>
