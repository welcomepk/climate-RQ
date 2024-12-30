import { Link } from "react-router"
import { useTheme } from "../context/theme-provider"
import { Moon, Sun } from "lucide-react";


const Header = () => {
    const { theme, setTheme } = useTheme()
    const isDark = theme === 'dark';

    return (
        <header className="sticky top-0 z-50 w-full border-b dark:border-b-gray-700 border-b-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
            <nav className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/"  ><img className="h-14" src="/logo.png" alt="LOGO" /></Link>
                <div className="flex items-center">
                    {/* search */}
                    {/* theme toggle */}
                    <button className={`transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`} onClick={() => setTheme(isDark ? 'light' : 'dark')}>
                        {
                            isDark ? <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
                                : <Moon className="h-6 w-6 text-gray-500 rotate-0 transition-all" />
                        }
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header