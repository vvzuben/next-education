import Image from 'next/image';
import { ACF } from "@app/_wordpress/Types"

export type MediaProps = ACF.Type.Image.Array & {
  className?: string
  fallback?: boolean
  loading?: "lazy" | "eager"
  full?: boolean
};

export default function Media({ className, sizes, ...props }: MediaProps) {
  let url = props.url

  if (!url && props.fallback) {
    url = `https://placehold.co/${props.width}x${props.height}/efe7e1/6c45aa/webp?text=`
  }

  if (!props.full && sizes) {
    const thumbnail = `${props.width}x${props.height}`
    url = sizes[`${thumbnail}_cropped`] ?? sizes[thumbnail] ?? props.url
  }

  return (
    <Image
      loading={props.loading ?? "lazy"}
      className={`w-full h-[${props.height}px] object-cover relative object-center ${className ?? ''}`}
      src={url}
      alt=""
      width={props.width}
      height={props.height}
    />
  );
}

