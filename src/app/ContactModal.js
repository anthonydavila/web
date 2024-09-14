'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react'

const contactOptions = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/86210768', color: 'text-green-500' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony-d%C3%A1vila-3818b42b3/', color: 'text-blue-700' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/anthonydavila', color: 'text-gray-400' },
]

export default function ContactModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
                    Let's Connect
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-purple-900 text-white border-purple-600">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Let's Connect</DialogTitle>
                    <DialogDescription className="text-center text-purple-200">
                        Choose your preferred method to get in touch
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 mt-4">
                    {contactOptions.map((option, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            className="h-auto py-4 px-6 bg-purple-800/50 hover:bg-purple-700/50 border-purple-600 text-white hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                            asChild
                        >
                            <a href={option.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3">
                                <option.icon className={`w-6 h-6 ${option.color}`} />
                                <span className="text-lg">{option.label}</span>
                            </a>
                        </Button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}