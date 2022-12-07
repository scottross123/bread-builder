type HeaderProps = {
    heading: string
}

const Header = (props: HeaderProps) => {
    const { heading } = props;

    return (
        <header className="h-16 flex content-center row-span-1">
            <h1 className="text-2xl p-4">{heading}</h1>
        </header>
    );
}

export default Header;