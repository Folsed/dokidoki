import Link from 'next/link'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { GrSearch } from 'react-icons/gr'
import { LuUserRound } from 'react-icons/lu'
import { SlMenu } from 'react-icons/sl'
import { LogoIcon } from '@/app/assets/svg/LogoIcon'
import { Button } from '@/app/assets/ui/shadcn/button'
import { Logo } from '@/app/assets/svg/Logo'

const Header = () => {
    return (
        <header className='bg-primary fixed z-50 flex h-[60px] w-full justify-center top-0'>
            <div className='content-padding flex w-full justify-between max-md:p-0'>
                <div className='flex h-full'>
                    <Button className='fill-font hover:bg-primary-active hover:fill-font-hover hover:text-font-hover flex h-full cursor-pointer items-center rounded-none px-4 text-[16px] font-normal duration-200 md:hidden'>
                        <SlMenu size={22} />
                    </Button>
                    <Link
                        href={'/'}
                        className='fill-secondary flex items-center px-[10px] duration-200 hover:fill-white'
                    >
                        <LogoIcon className='block w-[30px] sm:hidden' />
                        <Logo className='hidden w-[150px] sm:block' />
                    </Link>

                    <div className='hidden md:flex'>
                        <Button className='fill-font hover:bg-primary-active hover:fill-font-hover hover:text-font-hover flex h-full cursor-pointer items-center rounded-none px-2 text-[16px] font-normal duration-200'>
                            <span>Каталог</span>
                            <RiArrowDropDownFill size={22} />
                        </Button>

                        <Link
                            href={''}
                            className='hover:bg-primary-active hover:text-font-hover flex items-center px-2 duration-200'
                        >
                            Новини
                        </Link>
                    </div>
                </div>
                <div className='flex h-full'>
                    {/* there will be a separate Search component */}
                    <button
                        className='stroke-font hover:bg-primary-active hover:stroke-font-hover flex items-center px-4 duration-200 hover:fill-white'
                        title='Пошук'
                    >
                        <GrSearch size={22} />
                    </button>
                    {/* ===== */}
                    {/* there will be a separate User Menu component */}
                    <Link
                        className='hover:stroke-red stroke-font hover:bg-primary-active hover:stroke-font-hover flex items-center fill-transparent px-4 duration-200'
                        href={'/login'}
                        title='Вхід в акаунт'
                    >
                        <LuUserRound size={24} />
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header
