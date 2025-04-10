import Header from './components/Header'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='__content'>
            <Header />
            <main className='mt-[60px]'>{children}</main>
        </section>
    )
}
export default DefaultLayout
