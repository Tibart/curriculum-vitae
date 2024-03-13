import Markdown from 'markdown-to-jsx';
// import loadMarkdownContent from './utilities';

export default function Skills(props: MarkdownProps) {
    const text = props.markdown ? props.markdown : ""
	const skillName = ({children, ...props}) => <div{...props}>{children}</div>

    return (
        <>
            <Markdown
                options={{
                    overrides: {
                        
                        h1: {
                            props: {
                                className: '',
                            }
                        },
						h2: {
							component: skillName,
                        },
                    }
                }}>
                {text}
            </Markdown>
        </>
    )
}
