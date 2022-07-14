import Header from './Header'

export default function Layout({ children }) {
    return (
        <div className="w-3/4 mx-auto my-0 bg-red-200 font-lato">
            <Header />
            <main>{children}</main>
        </div>
    )
}