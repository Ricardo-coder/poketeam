import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/atoms";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  link: string;
}

export function ImageCard({ src, alt, title, link }: ImageCardProps) {
  return (
    <Link data-image-card href={link}>
      <Image src={src} alt={alt} width={300} height={300} />
      <Label>{title}</Label>
    </Link>
  );
}