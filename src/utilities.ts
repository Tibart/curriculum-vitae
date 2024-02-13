export default function loadMarkdownContent(fileName: string): string {
    let markdownContent: string = '';

    import(fileName /* @vite-ignore */)
        .then(res => {
            fetch(res.default,)
                .then(res => res.text())
                .then(res => markdownContent = res)
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));

    console.log("Markdown -> ", loadMarkdownContent);
    
    return markdownContent;
}