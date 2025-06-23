import { Header } from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { AboutBand } from "@/components/AboutBand";

const Index = () => {
    return (
        <>
            <Head>
                <title>Bogobes | Официальный сайт</title>
                <meta name="description" content="Описание от Дёна" />
                <meta name="keywords" content="блэк-метал, дэт-метал, Bogobes, Bgbs, Богобес, Новороссийск" />
                <link rel="icon" href="#"/>
            </Head>

            <Header />
            {/* Секция с фото группы */}
            <main className="relative">
                <section className="relative h-screen w-full">
                    <Image 
                        src='/images/Backgrounds/Hero_black_logo.webp'
                        alt="Bogobes"
                        fill
                        className="object-center"
                        priority
                    />
                </section>
                {/* О группе */}
                <AboutBand />
            </main>
        </>
    )
}

export default Index;