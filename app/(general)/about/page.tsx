import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Esta es la página de informaciones de la empresa',
 keywords: ['About Page','Esteban', 'información']
};


export default function AboutPage(){
    return (
        <>
        <span className="text-7xl">About Page</span>
        </>
    )
}