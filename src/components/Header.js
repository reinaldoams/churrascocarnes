import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='rgb(135, 68, 202)' text={showAdd ? 'Fechar' : 'Adicionar'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Carne do dia'
}

export default Header
