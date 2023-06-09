// template[tags(pages,routes)]
import { Set, Router, Route, Private } from '@redwoodjs/router'

import { useAuth } from './auth'
import { AdminLayout } from './layouts/Admin/AdminLayout'
import { RolesLayout } from './layouts/Admin/RolesLayout'
import { TeamsLayout } from './layouts/Admin/TeamsLayout'
import { UsersLayout } from './layouts/Admin/UsersLayout'
import { MainLayout } from './layouts/Main/MainLayout/MainLayout'
import { ProfileLayout } from './layouts/ProfileLayout'
import { PublicLayout } from './layouts/PublicLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={PublicLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/pricing" page={PricingPage} name="pricing" />
        <Route path="/blog" page={BlogPage} name="blog" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/create-password" page={CreatePasswordPage} name="createPassword" />
        <Route path="/verification" page={VerificationPage} name="verification" />
        <Route path="/verification-reset" page={VerificationResetPage} name="verificationReset" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/app/dashboard" page={AppDashboardPage} name="appDashboard" />
        <Route notfound page={NotFoundPage} />
        <Route path="/forbidden" page={ForbiddenPage} name="forbidden" />
        <Private unauthenticated="forbidden">
          <Set wrap={ProfileLayout}>
            <Route path="/profile" page={ProfileEditProfilePage} name="profile" />
            <Route path="/profile/edit_password" page={ProfileEditPasswordPage} name="editPassword" />
            <Route path="/profile/edit_email" page={ProfileEditEmailPage} name="editEmail" />
          </Set>
        </Private>
      </Set>
      <Set wrap={AdminLayout}>
        <Private roles="super admin" unauthenticated="forbidden">
          <Route path="/admin/dashboard" page={AdminDashboardPage} name="adminDashboard" />
          <Set wrap={TeamsLayout}>
            <Route path="/admin/teams/new" page={AdminTeamNewTeamPage} name="adminNewTeam" />
            <Route path="/admin/teams/{id}/edit" page={AdminTeamEditTeamPage} name="adminEditTeam" />
            <Route path="/admin/teams/{id}" page={AdminTeamTeamPage} name="adminTeam" />
            <Route path="/admin/teams" page={AdminTeamTeamsPage} name="adminTeams" />
          </Set>
          <Set wrap={RolesLayout}>
            <Route path="/admin/roles/new" page={AdminRoleNewRolePage} name="adminNewRole" />
            <Route path="/admin/roles/{id}/edit" page={AdminRoleEditRolePage} name="adminEditRole" />
            <Route path="/admin/roles/{id}" page={AdminRoleRolePage} name="adminRole" />
            <Route path="/admin/roles" page={AdminRoleRolesPage} name="adminRoles" />
          </Set>
          <Set wrap={UsersLayout}>
            <Route path="/admin/users/new" page={AdminUserNewUserPage} name="adminNewUser" />
            <Route path="/admin/users/{id}/edit" page={AdminUserEditUserPage} name="adminEditUser" />
            <Route path="/admin/users/{id}" page={AdminUserUserPage} name="adminUser" />
            <Route path="/admin/users" page={AdminUserUsersPage} name="adminUsers" />
          </Set>
        </Private>
      </Set>
    </Router>
  )
}

export default Routes
