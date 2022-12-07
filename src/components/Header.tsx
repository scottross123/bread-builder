type HeaderProps = {
    heading: string
}

const Header = (props: HeaderProps) => {
    const { heading } = props;

    return (
        <header className="h-20 flex content-center ">
            <h1 className="text-2xl p-4">{heading}</h1>
        </header>
    );
}

export default Header;