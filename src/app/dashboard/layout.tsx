import Link from 'next/link';
import SideNav from './ui/SideNav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-20">
           <SideNav/> 
            <div>
                {children}
            </div>
        </div>
    );
}