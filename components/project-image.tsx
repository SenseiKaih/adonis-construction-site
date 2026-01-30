import Image from 'next/image';
import { ProjectImage } from '@/lib/images';

interface ProjectImageProps {
  image: ProjectImage;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export default function ProjectImageComponent({
  image,
  priority = false,
  className = 'relative h-64 overflow-hidden bg-muted rounded-lg',
  imageClassName = 'w-full h-full object-cover',
}: ProjectImageProps) {
  return (
    <div className={className}>
      <img
        src={image.url || "/placeholder.svg"}
        alt={image.title}
        className={imageClassName}
        loading={priority ? 'eager' : 'lazy'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
    </div>
  );
}
