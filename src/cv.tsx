import { useState, useEffect } from 'react';
import Intro from './intro';
import Profile from "./profile";
import Details from './details';
import History from './history';
import Skills from './skills';

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
        <div className="h-full items-start flex justify-center font-sans bg-neutral">

            <div className="mt-10 mb-5 w-800px b-rd-1 bg-light drop-shadow">

                <header className="p-2 text-4xl text-center">
                    <Intro markdown={section[0]} />
                </header>

                <nav className="p-1 text-center">
                    GitHub | LinkedIn | Stuff
                </nav>

                <section className="flex flex-nowrap">
                    
                    <div id="Left" className="p-8 basis-1/3 text-left bg-amber b-rd-tr-3 b-rd-bl-1">
                        <Details markdown={section[1]} />
						<Skills markdown={section[4]} /> 
                    </div>

                    <div className="p-3 basis-2/3">
                        <Profile markdown={section[2]} />
						<History markdown={section[3]} />
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

        // TODO: validate markdown structure

        return rawHeader
    }
}
