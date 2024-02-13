import Markdown from 'markdown-to-jsx';
// import loadMarkdownContent from './utilities';

export default function Details(props: MarkdownProps) {
    const text = props.markdown ? props.markdown : ""

    return (
        <>
            <Markdown options={{ }}>
                {text}
            </Markdown>
        </>
    )
}