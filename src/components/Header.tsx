type HeaderProps = {
    heading: string
}

const Header = (props: HeaderProps) => {
    const { heading } = props;

    return (
        <header className="h-16 flex content-center">
            <h1 className="text-2xl">{heading}</h1>
        </header>
    );
}

export default Header;