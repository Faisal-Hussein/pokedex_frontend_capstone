import Body from '../components/Body'
import LoginForm from '../components/forms/LoginForm'

export default function LoginPage() {
  return (
    <Body sidebar={false}>
      <LoginForm />
    </Body>
  )
}