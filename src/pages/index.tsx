import { Header } from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

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
                        src='/images/Band_logo.jpg'
                        alt="Bogobes"
                        fill
                        className="object-center"
                        priority
                    />
                </section>

                {/* О группе */}
                <section id="about" className="bg-url('/images/black_coal.jpg') bg-cover bg-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-cinzel font-bold text-left">О группе</h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg mb-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni non fuga amet? Vitae deserunt expedita inventore praesentium obcaecati nihil optio non, enim nulla iste dolor eos accusantium facere dignissimos!
                            </p>
                            {/* Карусель участников */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-cinzel font-bold mb-6">Участники</h3>
                            {/* Здесь будет Swiper карусель с участниками */}
                            </div>
                        </div>
                    </div>  
                </section>
            </main>
        </>
    )
}

export default Index;