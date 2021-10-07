import Title from "./Title";
const Header = ({name, onExit}) => {
    return (
        <header>
            <Title name={name} />
            <button onClick={ onExit }>exit</button>
        </header>
    )
}

export default Header;