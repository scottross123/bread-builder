type EditorLayoutProps = {
    children: JSX.Element
}

const EditorLayout = (props: EditorLayoutProps) => {
    const { children } = props;
    return (
        <div className="p-4 flex flex-col gap-8">
            { children }
        </div>
    )
};

export default EditorLayout;