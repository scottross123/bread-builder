type EditorLayoutProps = {
    children: JSX.Element
}

const EditorLayout = (props: EditorLayoutProps) => {
    const { children } = props;
    return (
        <div>
            { children }
        </div>
    )
};

export default EditorLayout;