import Link from 'next/link'
import { ReactElement } from 'react'

interface ThemeButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'placeholder'> {
    placeholder?: string
    link?: string
    icon?: ReactElement
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
    placeholder,
    className,
    link,
    icon,
    ...rest
}) => {
    const Skin = link ? Link : 'div'

    return (
        <button
            {...rest}
            className={`text-lg font-medium text-black ${className}`}
        >
            <Skin
                href={link ? link : ''}
                className='flex h-full w-full items-center justify-center'
            >
                {icon ? <span>{icon}</span> : ''}
                {placeholder ? <span>{placeholder}</span> : ''}
            </Skin>
        </button>
    )
}
export default ThemeButton
