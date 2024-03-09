export default function Navbar() {
    return (
        <div className="flex justify-center">
            <nav className="flex items-center justify-between p-4 mt-4 w-1/2">
                <div>
                    <a href="/">
                        <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
                    </a>
                </div>
                <div className="space-x-4">
                    <a href="/">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </div>
    );
}