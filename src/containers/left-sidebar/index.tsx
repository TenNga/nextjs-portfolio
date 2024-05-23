import Navigation from "@/components/Navigation";
import { ClassProps } from "@/types";

export default function LeftSidebar({className}:ClassProps) {
    return (<div className={className}>
            <Navigation />
        </div>)
};
