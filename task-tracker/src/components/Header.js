import Button from './Button'
const Header = ({ title }) => {
  let onClick = () => {

  }
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button label='Add' varClass='btn-add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
