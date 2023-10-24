'use client';
import 'react-toastify/dist/ReactToastify.css'
import { usePathname } from 'next/navigation'
import { FacebookShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, TwitterIcon, LinkIcon } from '@components/SocialMediaIcons'
import { useCopyToClipboard } from 'react-use'
import { ToastContainer, toast } from 'react-toastify'

export default function ShareButtons() {
  const pathname = usePathname()
  const fullUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT + pathname

  const [state, copyToClipboard] = useCopyToClipboard();

  function handleClick(text: string) {
    copyToClipboard(text);
    toast("Link copied to clipboard!");
  }

  return <div className="flex gap-3.5 items-center justify-center">
    <h5 className="mobile-h5 desktop-h5 !mb-0">Share Post</h5>
    <div className="h-full flex items-center gap-4">
      <FacebookShareButton url={fullUrl}>
        <FacebookIcon color="royal-purple" />
      </FacebookShareButton>

      <TwitterShareButton url={fullUrl}>
        <TwitterIcon color="royal-purple" />
      </TwitterShareButton>
      <button type="button" onClick={() => handleClick(fullUrl)}>
        <LinkIcon color="royal-purple" />
      </button>

    </div>
    <ToastContainer hideProgressBar={true} />
  </div>
}
