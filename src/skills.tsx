import Markdown from 'markdown-to-jsx';
// import loadMarkdownContent from './utilities';

export default function Skills(props: MarkdownProps) {
    const text = props.markdown ? props.markdown : ""

    return (
        <>
            <Markdown
                options={{
                    overrides: {
                        h2: {
                            props: {
                                className: 'm-10 p-10'
                            }
                        }
                    }
                }}>
                {text}
            </Markdown>
        </>
    )
}
