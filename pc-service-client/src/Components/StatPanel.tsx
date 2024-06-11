import React, { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
type StatPanelProps={
    number: string;
    description: string;
    className: string;
}
function StatPanel(props: StatPanelProps) {
    return (
        <div className="text-start stat-panel">
            <span className={`${props.className}`}>{props.number}</span>
            <p>{props.description}</p>
        </div>
        
    )
}
export default StatPanel;