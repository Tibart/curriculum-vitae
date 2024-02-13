import { useState, useEffect } from 'react';
import Intro from './intro';
import Profile from "./profile";
import Details from './details';

export default function CV() {

    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        loadMarkdown(`./markdown/cv.md`);
    });
    
    const [section, setSection] = useState(new Array<string>())
    useEffect(() => {
        setSection(splitMarkdown(markdown))
    }, [markdown])

    return (
        <div className="h-screen items-start flex justify-center font-sans bg-neutral">

            <div className="mt-10 w-800px b-rd-1 bg-light drop-shadow">

                <header className="p-2 text-4xl text-center">
                    <Intro markdown={section[0]} />
                </header>

                <nav className="p-1 text-center">
                    GitHub | LinkedIn | Stuff
                </nav>

                <section className="flex flex-nowrap">
                    
                    <div id="Left" className="p-3 basis-1/3 text-left bg-amber b-rd-tr-3">
                        <Details markdown={section[1]} />
                    </div>

                    <div className="p-3 basis-2/3">
                        <Profile markdown={section[2]} />
                    </div>

                </section>

            </div>

        </div>
    )


    function loadMarkdown(path: string) {
        import(path /* @vite-ignore */)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    function splitMarkdown(markdown: string): Array<string> {
        if (markdown == "")  {
            //console.error("No Markdown document loaded!")
            return ["", ""]
        }

        const rawHeader = markdown.split(/\n(?=#\s)/);

        // const header = new Map<string, string>()s
        // for (let i = 0; i < rawHeader.length; i++) {
        //     const v = rawHeader[i];
        //     const k = v.split('\n')[0].replace('#', '').trim().toLowerCase()
        //     header.set(k, v)
        // }

        // TODO: validate markdown structure

        return rawHeader
    }
}
