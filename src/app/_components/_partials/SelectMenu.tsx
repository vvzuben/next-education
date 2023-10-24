"use client"
import { WP } from '@app/_wordpress/Types'
import { colorNameToCode } from '@app/helpers'
import { useRouter } from 'next/navigation'
import Select from 'react-select'

type Props = {
  categories: WP.Term[]
  post_type?: "post" | "workshop"
}

export default function SelectMenu({ categories, post_type }: Props): React.JSX.Element | null {
  const router = useRouter()

  if (!post_type) {
    return null;
  }

  const pearlWhite = colorNameToCode("pearl-white")

  const _post_type = post_type === 'post' ? 'posts' : 'workshops'

  return <Select styles={{
    menu: (baseStyles, state) => ({
      ...baseStyles,
      zIndex: 9999
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: pearlWhite
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: pearlWhite
    })
  }}
    isClearable={true}
    placeholder="Filter By:"
    options={categories
      .filter((category) => category.acf.post_type == post_type)
      .map(category => {
        return {
          value: category.slug,
          label: category.name
        }
      })} onChange={(e: any) => {
        if (e == null) {
          router.push(_post_type ?? "")
        } else {
          router.push(`${_post_type}?category=${e.value}`)
        }
      }} />
}
