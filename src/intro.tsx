import Markdown from 'markdown-to-jsx';
// import loadMarkdownContent from './utilities';

export default function Intro(props: MarkdownProps) {
    const text = props.markdown ? props.markdown : ""

    return (
        <>
            <Markdown
                options={{
                    overrides: {
                        h1: { props: { className: 'hidden' } },
                        p: { props: { className: 'm-0 p-0 text-5' } },
                        img: { props: { className: 'w-150px al' } },
                    }
                }}>
                {text}
            </Markdown>
        </>
    )
}
