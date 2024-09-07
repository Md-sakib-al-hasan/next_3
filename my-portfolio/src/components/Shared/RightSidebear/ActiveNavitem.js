import Link from "next/link";

const ActiveNavitem = ({href,children}) => {
    
    return (
        <div className="ml-4 text-xs font-bold text-white ">
         <Link href={href}>{children}</Link>
            
        </div>
    );
};

export default ActiveNavitem;