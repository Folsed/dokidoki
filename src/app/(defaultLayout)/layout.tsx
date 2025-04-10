import Header from './components/Header'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='__content'>
            <Header />
            {children}
        </section>
    )
}
export default DefaultLayout
