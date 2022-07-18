import { Link } from 'react-router-dom'
import logout from '../assets/icons/logout.svg'

export const Login = () => {
  return (
    <div style={{display:'flex',justifyContent:'right'}}>
        <Link to='/login'><img src={logout} height='40.5px' alt='icon-login'/></Link>
    </div>
  )
}
