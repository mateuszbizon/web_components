export const CONTAINER_TEXT_CODE = `import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type ContainerProps = ComponentProps<"div">

function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn('size-full max-w-300 mx-auto px-5', className)} {...props}>
            {children}
        </div>
    )
}

export default Container`

export const SHADOW_TEXT_CODE = `import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type ShadowProps = ComponentProps<"div">

function Shadow({ className, ...props }: ShadowProps) {
  return (
    <div className={cn('absolute inset-0 bg-black/60 -z-10', className)} {...props}></div>
  )
}

export default Shadow`

export const HERO_TEXT_CODE = `"use client"

import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import Shadow from '../ui/shadow'
import { HERO_IMAGE } from '@/constants/images'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function HeroSection() {
    useGSAP(() => {
        gsap.fromTo(".text-animate", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
        })
    }, [])

  return (
    <header id='header' style={{ backgroundImage: 'url()' }} className='relative py-section-padding lg:h-screen lg:py-0 bg-cover bg-center bg-no-repeat z-0'>
        <Shadow />
        <Container>
            <div className='flex flex-col justify-center gap-5 md:gap-10 h-full'>
                <h1 className='text-animate heading1 text-center text-light'>Twoje włosy, nasza pasja</h1>
                <p className='text-animate bigger-text text-center text-light'>Profesjonalne strzyżenie, koloryzacja i stylizacja dla kobiet i mężczyzn. Odwiedź nasz salon i odkryj, jak dobrze możesz wyglądać — i czuć się — każdego dnia.</p>
                <div className='text-animate flex justify-center'>
                    <Button size={"lg"} className='text-lg' asChild>
                        <Link href={"https://booksy.com/pl-pl/"} target='_blank'>
                            Zarezerwuj
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default HeroSection`

export const GLOBALS_CSS_TEXT_CODE = `@layer components {
    .heading1 {
        @apply text-4xl md:text-5xl xl:text-6xl font-bold
    }

    .heading2 {
        @apply text-3xl md:text-4xl xl:text-5xl font-bold
    }

    .heading3 {
        @apply text-2xl md:text-3xl xl:text-4xl font-semibold
    }

    .bigger-text {
        @apply text-xl md:text-2xl font-medium
    }

    .little-bigger-text {
        @apply text-lg md:text-xl
    }

    .heading-margin-bottom {
        @apply mb-10 md:mb-16
    }
}`

export const SUB_PAGE_HEADER_TEXT_CODE = `import React from 'react'
import Container from '../ui/container'

type SubPageHeaderProps = {
    title: string
}

function SubPageHeader({ title }: SubPageHeaderProps) {
  return (
    <header className='py-section-padding'>
        <Container>
            <h1 className='heading1 text-center'>{title}</h1>
        </Container>
    </header>
  )
}

export default SubPageHeader`

export const FOOTER_TEXT_CODE = `import React from 'react'
import Container from '../ui/container'
import { NAV_ITEMS, SERVICE_ITEMS } from '@/constants/navItems'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { EMAIL, PHONE } from '@/constants'
import { LOGO } from '@/constants/images'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='pt-section-padding pb-7 bg-foreground text-white'>
        <Container className='max-w-350'>
            <div className='grid md:grid-cols-[repeat(auto-fit,_280px)] gap-10 md:gap-20'>
                <div className='space-y-4 text-center md:text-left'>
                    <figure className='relative size-16 mx-auto md:mx-0'>
                        <Image src={LOGO.src} alt={LOGO.alt} fill />
                    </figure>
                    <p className='md:text-lg'>
                        <em>
                            Tworzę nowoczesne strony dla firm, które nie tylko dobrze wyglądają, ale też skutecznie sprzedają. Zadbam również o widoczność Twojej wizytówki w Google, by lokalni klienci mogli Cię łatwo znaleźć.
                        </em>
                    </p>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Nawigacja</p>
                    <nav>
                        <ul className='space-y-2'>
                            {NAV_ITEMS.map(item => {
                                if (item.isLink) return (
                                    <li key={item.label}>
                                        <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )

                                if (!item.isLink && item.href) return (
                                    <li key={item.label}>
                                        <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Oferta</p>
                    <nav>
                        <ul className='space-y-2'>
                            {SERVICE_ITEMS.map(item => (
                                <li key={item.label}>
                                    <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Dane kontaktowe</p>
                    <div className='space-y-5'>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-white hover:text-white/50' asChild>
                                <Link href={""}>
                                    <Phone /> {PHONE}
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-white hover:text-white/50' asChild>
                                <Link href={""}>
                                    <Mail /> {EMAIL}
                                </Link>
                            </Button>
                        </div>
                        {/* <div className='flex justify-center lg:justify-start items-center gap-3 text-foreground'>
                            <Button size={"icon"} asChild>
                                <Link href={INSTA} target='_blank' title='Instagram'>
                                    <Instagram />
                                    <span className='sr-only'>Instagram</span>
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='mt-section-padding flex flex-col sm:flex-row justify-between gap-3 items-center'>
                <p>
                    &copy; {new Date().getFullYear()} | <span className='font-semibold'>Mateusz Bizoń</span>
                </p>
                <p>
                    <Button variant={"link"} size={"link"} className='text-white hover:text-white/50' asChild>
                        <Link href="/polityka-prywatnosci">
                            Polityka prywatności
                        </Link>
                    </Button>
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer`

export const ROOT_LAYOUT_TEXT_CODE = `import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Nav />
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
}`