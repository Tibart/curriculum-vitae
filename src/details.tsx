import Markdown from 'markdown-to-jsx';
// import loadMarkdownContent from './utilities';

export default function Details(props: MarkdownProps) {
    const text = props.markdown ? props.markdown : ""
	const detail = ({children, ...props}) => <div{...props}>{children}</div>

    return (
        <>
            <Markdown options={{
				overrides:{
					p: {
						component: detail, 
					},
				},
			}}>
                {text}
            </Markdown>
        </>
    )
}
