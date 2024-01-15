"use client"

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary"
import Image from "next/image";


interface ImageUploadProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}
export const ImageUpload = ({
    value,
    onChange,
    disabled
}: ImageUploadProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <div className="space-y-4 w-4 flex flex-col justify-center items-center">
            <CldUploadButton
                options={{
                    maxFiles: 1,
                }}
                uploadPreset="czw3wsko"
            >
                <div className="
                p-4
                border-4
                border-dashed
                border-primary/10
                rounded-lg
                hover:opacity-75
                transition
                flex
                flex-col
                space-y-2
                items-center
                justify-center
                ">
                    <div className="relative h-40 w-40">
                        <Image
                            fill
                            alt="upload"
                            src="/placeholder.svg"
                            className="rounded-lg object-cover"
                        />
                    </div> 
                </div> 
            </CldUploadButton>

        </div>
    )
}