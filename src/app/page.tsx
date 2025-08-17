import ProjectCard from "@/components/project-cards";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <section id="intro">
                    <h1>Valentin Gelly</h1>
                    <p>
                        Bienvenu sur mon site personnel. Je m&#39;appel Valentin Gelly et je suis un développeur web.
                        Cela fais maintenant 5 années que je réalise des site ainsi que des applications web dans le cadre de mes formations ainsi que des projets annexes.
                        Dans ce site vous pourrez retrouvé les différents projet que j&#39;ai pu réalisé ainsi que mon parcours.
                    </p>
                </section>
                <section id="projects" className="flex wrap gap-8">
                    <ProjectCard
                        name="Projet 1"
                        description="Description du projet 1."
                        links={[
                            { href: "#", type: "github" },
                            { href: "#", type: "demo" },
                        ]}
                    />
                    <ProjectCard
                        name="Projet 2"
                        description="Description du projet 2."
                        links={[
                            { href: "#", type: "github" },
                        ]}
                    />
                </section>
            </main>
        </div>
    );
}