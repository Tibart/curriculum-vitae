import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

export default function LoadMarkdown(props: MarkdownProps) {

    const path = `./markdown/${props.markdown}`
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        import(path /* @vite-ignore */)
            .then(res => {
                fetch(res.default,)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <>  
            <Markdown>{markdown}</Markdown>
        </>
    )
}