import Button from './Button'

const Header = ({ title, onAdd,showAdd}) => {
  
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showAdd ? 'Close' : 'Add'} varClass='btn-add' onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
